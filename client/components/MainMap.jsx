import React from 'react'
import { connect } from 'react-redux'

import mapboxgl from 'mapbox-gl'
import { updatePosition } from '../actions/createEvent'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFja2VuYWRhbSIsImEiOiJja2k3MHE1aDEwcmF2MnJvbGd2NWE5aW9mIn0.fFQVww5WDzwFB5zgovZ6NQ'

class MainMap extends React.Component {
    state = {
      initial: {
        lng: 174.7741,
        lat: -41.3670,
        zoom: 10
      },
      start: [
        174.7741,
        -41.2970
      ],
      finish: [
        174.7741,
        -41.2970
      ]
    }

    componentDidMount () {
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.initial.lng, this.state.initial.lat],
        zoom: this.state.initial.zoom
      })

      const getRoute = (startPoint, end) => {
        const start = startPoint
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
                'line-cap': 'round'
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
        const newPosition = [lngLat.lng.toFixed(4), lngLat.lat.toFixed(4)]

        this.setState({
          [stateKey]: [
            lngLat.lng.toFixed(4),
            lngLat.lat.toFixed(4)
          ]
        })
        getRoute(this.state.start, this.state.finish)
        this.props.dispatch(updatePosition(stateKey, newPosition))
      }

      const finishMarker = new mapboxgl.Marker({
        draggable: true,
        color: '#ff3300'
      })
        .setLngLat([174.7741, -41.2970])
        .addTo(map)

      const startMarker = new mapboxgl.Marker({
        draggable: true,
        color: '#00ff00'
      })
        .setLngLat([174.7741, -41.2970])
        .addTo(map)

      startMarker.on('dragend', () => { onDragEnd(startMarker, 'start') })
      finishMarker.on('dragend', () => { onDragEnd(finishMarker, 'finish') })
      this.props.dispatch(updatePosition('start', this.state.start))
      this.props.dispatch(updatePosition('finish', this.state.finish))
    }

    render () {
      return (
        <div className='mapFrame'>
          <div ref={(el) => { this.mapContainer = el }} className="mapContainer" />
        </div>
      )
    }
}

export default connect()(MainMap)
