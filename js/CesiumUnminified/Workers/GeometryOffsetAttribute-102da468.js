/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.97
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

define(['exports'], (function (exports) { 'use strict';

  /**
   * Represents which vertices should have a value of `true` for the `applyOffset` attribute
   * @private
   */
  const GeometryOffsetAttribute = {
    NONE: 0,
    TOP: 1,
    ALL: 2,
  };
  var GeometryOffsetAttribute$1 = Object.freeze(GeometryOffsetAttribute);

  exports.GeometryOffsetAttribute = GeometryOffsetAttribute$1;

}));
//# sourceMappingURL=GeometryOffsetAttribute-102da468.js.map
