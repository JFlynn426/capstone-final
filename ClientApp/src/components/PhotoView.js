import React, { Component } from 'react'
import sandhill from './FloridaPhotos/SandhillCranePond.jpg'
class CategoryView extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sandhill Crane</h1>
        <img className="photoview" src={sandhill} />
        <footer>
          <p>
            Found in several scattered areas of North America, Sandhill Cranes
            reach their peak abundance at migratory stopover points on the Great
            Plains. The early spring gathering of Sandhills on the Platte River
            in Nebraska is among the greatest wildlife spectacles on the
            continent, with over a quarter of a million birds present at one
            time. Although they are currently very common, their dependence on
            key stopover sites makes them vulnerable to loss of habitat in the
            future. Within the last few decades, Sandhill Cranes have greatly
            expanded their nesting range and numbers in the upper Midwest, a
            population that migrates southeastward toward Florida for the
            winter. Most populations now stable or increasing, but still
            vulnerable to loss of habitat. Degradation of habitat at major
            stopover points for migrants could have serious impact on species.
            Localized races in Mississippi and Cuba are endangered.
          </p>
        </footer>
      </div>
    )
  }
}

export default CategoryView
