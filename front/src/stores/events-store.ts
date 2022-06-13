import { backendUrl } from "constants/routes";
import { makeAutoObservable, runInAction } from "mobx";
import { Fields, Props } from "types/generated";

export type EventData = {
  id: number;
  data: { Fields: Fields; Props: Props };
};

const mapEventDataFromApi = (data: any) => {
  const mapped = Object.keys(data ?? {}).map((key) => {
    return { id: Number(key), data: data[key] } as EventData;
  });

  return mapped;
};

class EventsStore {
  constructor() {
    makeAutoObservable(this);
  }

  data: EventData[] | undefined;

  isLoading = false;

  errorMessage: string | undefined;

  filters: string[] = [];

  subscribed: EventData[] | undefined;

  dateFilterFrom: Date | undefined;
  dateFilterTo: Date | undefined;

  addFilter(filter: string) {
    this.filters?.push(filter);
    this.loadEvents();
  }

  removeFilter(filter: string) {
    const index = this.filters?.indexOf(filter);
    if (index !== -1) {
      this.filters?.splice(index, 1);
    }
    this.loadEvents();
  }

  toggleFilter(filter: string) {
    if (this.isActiveFilter(filter)) {
      this.removeFilter(filter);
    } else {
      this.addFilter(filter);
    }
  }

  isActiveFilter(filter: string) {
    return this.filters?.includes(filter);
  }

  private get searchParams() {
    const params = new URLSearchParams();
    if (this.filters.length) {
      this.filters.forEach((x) =>
        params.append(x.split("_")[0].toUpperCase() + "[]", x)
      );
    }
    return params;
  }

  isSubscribed(id: number) {
    return !!this.subscribed?.find((x) => x.id === id);
  }

  async loadSubscribedEvents() {
    this.isLoading = true;
    try {
      const response = await fetch(`${backendUrl}/api/user/eventlist/`);
      const data = await response.json();
      const mapped = mapEventDataFromApi(data);
      runInAction(() => (this.subscribed = mapped));
    } catch (error) {
      runInAction(() => (this.errorMessage = String(error)));
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  async toggleSubscribe(id: number) {
    this.isLoading = true;
    try {
      let isSubcribeAction = true;
      let url = `${backendUrl}/api/events/subscription/?event=${id}&userid=3`;
      if (this.isSubscribed(id)) {
        url += "&unsubscribe=y";
        isSubcribeAction = false;
      }
      await fetch(url);
      return isSubcribeAction;
    } catch (error) {
      runInAction(() => (this.errorMessage = String(error)));
    } finally {
      this.loadSubscribedEvents();
    }
  }

  async loadEvents() {
    this.isLoading = true;
    try {
      //TODO move to env
      let url = `${backendUrl}/api/events/list/`;
      if (this.searchParams) url += `?${this.searchParams}`;
      const response = await fetch(url);
      const data = await response.json();
      const mapped = mapEventDataFromApi(data);
      runInAction(() => (this.data = mapped));
    } catch (error) {
      runInAction(() => (this.errorMessage = String(error)));
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  init() {
    this.loadEvents().then(() => this.loadSubscribedEvents());
  }

  reset() {
    this.data = undefined;
    this.isLoading = false;
    this.filters = [];
  }
}

const eventsStore = new EventsStore();

export default eventsStore;
