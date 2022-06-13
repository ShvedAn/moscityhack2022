import { YMaps, Map, Placemark } from "react-yandex-maps";
import { EventData } from "stores/events-store";

const EventMap = ({data}: {data?: EventData[]}) => {
  return (
    <YMaps>
      <Map
        width="100%"
        height={500}
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
      >
        {data
          ?.filter(
            (x) =>
              x.data.Props.MAP.VALUE &&
              x.data.Props.MAP.VALUE.toString().includes(",")
          )
          .map((x) => (
            <Placemark
              key={x.id}
              geometry={x.data.Props.MAP.VALUE?.toString()
                .split(",")
                .map((y) => {
                  return Number(y);
                })}
              properties={{
                balloonContentHeader: `<font size=3><b><a target='_blank' href='/events/${x.id}'>${x.data.Fields.NAME}</a></b></font>`,
                balloonContentBody: `<p>${x.data.Props.DATE_START.VALUE}</p>`,
                balloonContentFooter: `<font size=1>${x.data.Props.ADRESS.VALUE}</font>`,
                hintContent: `${x.data.Fields.NAME}`,
              }}
            />
          ))}
      </Map>
    </YMaps>
  );
};

export default EventMap;
