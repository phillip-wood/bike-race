import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFja2VuYWRhbSIsImEiOiJja2k3MHE1aDEwcmF2MnJvbGd2NWE5aW9mIn0.fFQVww5WDzwFB5zgovZ6NQ'

class SingleEventMap extends React.Component {
    state = {
      initial: {
        lng: 174.7571,
        lat: -41.2873,
        zoom: 10
      },
      start: [
        174.78044,
        -41.3022
      ],
      finish: [
        174.7969,
        -41.3156
      ]
    }

    componentDidMount () {
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.initial.lng, this.state.initial.lat],
        zoom: this.state.initial.zoom
      })

      const getRoute = (start,end) => {
        // const start = start
        console.log(start,end)
        const url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken

        const req = new XMLHttpRequest()
        req.open('GET', url, true)
        req.onload = function () {
          const json = JSON.parse(req.response)
          const data = json.routes[0]
          const route = data.geometry.coordinates
          const geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: route
            }
          }
          if (map.getSource('route')) {
            map.getSource('route').setData(geojson)
          } else {
            map.addLayer({
              id: 'route',
              type: 'line',
              source: {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'LineString',
                    coordinates: geojson
                  }
                }
              }, 
              layout: {
                'line-join': 'round',
                'line-cap' : 'round'
              },
              paint: {
                'line-color': '#3887be',
                'line-width': 5,
                'line-opacity': 0.75
              }
            })
          }
        }
        req.send()
      }

      const onDragEnd = (marker, stateKey) => {
        const lngLat = marker.getLngLat()

        this.setState({
          [stateKey]: [
            lngLat.lng,
            lngLat.lat
          ]
        })
        console.log(lngLat)
      }
      getRoute(this.state.start, this.state.finish)
      getRoute(this.state.start, this.state.finish)

      const finishMarker = new mapboxgl.Marker({
        draggable: true,
        color: '#ff3300'
      })
        .setLngLat([174.78044, -41.3022])
        .addTo(map)

      const startMarker = new mapboxgl.Marker({
        draggable: true,
        color: '#00ff00'
      })
        .setLngLat([174.7969, -41.3156])
        .addTo(map)

      startMarker.on('dragend', () => { onDragEnd(startMarker, 'start') })
      finishMarker.on('dragend', () => { onDragEnd(finishMarker, 'finish') })
    }

    render () {
      return (
        <div className='mapFrame'>
          <div ref={(el) => { this.mapContainer = el }} className="mapContainer" />
        </div>
      )
    }
}

export default SingleEventMap
