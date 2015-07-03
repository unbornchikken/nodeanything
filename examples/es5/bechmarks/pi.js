"use strict";
"use strict";
var Bluebird = require("bluebird");
var async = Bluebird.coroutine;
var common = require("../common");
var numberOfPoints = 20000000;
var pi = async($traceurRuntime.initGeneratorFunction(function $__0(af, deviceInfo) {
  var AFArray,
      x,
      y,
      dist,
      numInside,
      piVal;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          af.setDevice(deviceInfo.id);
          AFArray = af.AFArray;
          console.log("Calculating pi on device:\n");
          common.printDeviceInfo(deviceInfo);
          console.log("");
          x = af.randu(numberOfPoints, af.types.dtype.f32);
          y = af.randu(numberOfPoints, af.types.dtype.f32);
          dist = af.sqrt(x.mul(x).add(y.mul(y)));
          $ctx.state = 6;
          break;
        case 6:
          $ctx.state = 2;
          return af.sumAsync(dist.lt(1));
        case 2:
          numInside = $ctx.sent;
          $ctx.state = 4;
          break;
        case 4:
          piVal = (4.0 * numInside) / numberOfPoints;
          console.log(("PI = " + piVal));
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__0, this);
}));
common.runOnAllPlatforms(pi, "pi example");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCQTtBQUFBLFdBQVcsQ0FBQztBQUNaLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFVBQVMsQ0FBQyxDQUFDO0FBQ2xDLEFBQUksRUFBQSxDQUFBLEtBQUksRUFBSSxDQUFBLFFBQU8sVUFBVSxDQUFDO0FBQzlCLEFBQUksRUFBQSxDQUFBLE1BQUssRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFdBQVUsQ0FBQyxDQUFDO0FBRWpDLEFBQU0sRUFBQSxDQUFBLGNBQWEsRUFBSSxTQUFPLENBQUM7QUFFL0IsQUFBSSxFQUFBLENBQUEsRUFBQyxFQUFJLENBQUEsS0FBSSxBQUFDLENBdENkLGVBQWMsc0JBQXNCLEFBQUMsQ0FzQ3RCLGNBQVUsRUFBQyxDQUFHLENBQUEsVUFBUzs7Ozs7OztBQXRDdEMsT0FBTyxDQUFQLGVBQWMsd0JBQXdCLEFBQWQsQ0FBeEIsU0FBUyxJQUFHLENBQUc7QUFDVCxVQUFPLElBQUc7OztBQXNDWixXQUFDLFVBQVUsQUFBQyxDQUFDLFVBQVMsR0FBRyxDQUFDLENBQUM7a0JBQ2IsQ0FBQSxFQUFDLFFBQVE7QUFFdkIsZ0JBQU0sSUFBSSxBQUFDLENBQUMsNkJBQTRCLENBQUMsQ0FBQztBQUMxQyxlQUFLLGdCQUFnQixBQUFDLENBQUMsVUFBUyxDQUFDLENBQUM7QUFDbEMsZ0JBQU0sSUFBSSxBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFFUCxDQUFBLEVBQUMsTUFBTSxBQUFDLENBQUMsY0FBYSxDQUFHLENBQUEsRUFBQyxNQUFNLE1BQU0sSUFBSSxDQUFDO1lBQzNDLENBQUEsRUFBQyxNQUFNLEFBQUMsQ0FBQyxjQUFhLENBQUcsQ0FBQSxFQUFDLE1BQU0sTUFBTSxJQUFJLENBQUM7ZUFDeEMsQ0FBQSxFQUFDLEtBQUssQUFBQyxDQUFDLENBQUEsSUFBSSxBQUFDLENBQUMsQ0FBQSxDQUFDLElBQUksQUFBQyxDQUFDLENBQUEsSUFBSSxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQzs7Ozs7QUFoRDdDLGVBaUQwQixDQUFBLEVBQUMsU0FBUyxBQUFDLENBQUMsSUFBRyxHQUFHLEFBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQWpEekI7O29CQUF2QixDQUFBLElBQUcsS0FBSzs7OztnQkFrRFEsQ0FBQSxDQUFDLEdBQUUsRUFBSyxVQUFRLENBQUMsRUFBSSxlQUFhO0FBRTlDLGdCQUFNLElBQUksQUFBQyxFQUFDLE9BQU8sRUFBQyxNQUFJLEVBQUcsQ0FBQzs7OztBQXBEaEMsZUFBTyxDQUFBLElBQUcsSUFBSSxBQUFDLEVBQUMsQ0FBQTs7QUFDbUIsRUFDL0IsT0FBNkIsS0FBRyxDQUFDLENBQUM7QUFtRHRDLENBckR1RCxDQXFEdEQsQ0FBQztBQUVGLEtBQUssa0JBQWtCLEFBQUMsQ0FBQyxFQUFDLENBQUcsYUFBVyxDQUFDLENBQUM7QUFDMUMiLCJmaWxlIjoiYmVjaG1hcmtzL3BpLmpzIiwic291cmNlUm9vdCI6ImV4YW1wbGVzL2VzNiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgQXJyYXlGaXJlXG5Db3B5cmlnaHQgKGMpIDIwMTUgR8OhYm9yIE1lesWRIGFrYSB1bmJvcm5jaGlra2VuIChnYWJvci5tZXpvQG91dGxvb2suY29tKVxuQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbmFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIEFycmF5RmlyZSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuICB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuXG5USElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkRcbkFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG5XQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXG5ESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUlxuQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTXG4oSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7XG5MT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT05cbkFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4oSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJU1xuU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5cInVzZSBzdHJpY3RcIjtcbmxldCBCbHVlYmlyZCA9IHJlcXVpcmUoXCJibHVlYmlyZFwiKTtcbmxldCBhc3luYyA9IEJsdWViaXJkLmNvcm91dGluZTtcbmxldCBjb21tb24gPSByZXF1aXJlKFwiLi4vY29tbW9uXCIpO1xuXG5jb25zdCBudW1iZXJPZlBvaW50cyA9IDIwMDAwMDAwO1xuXG5sZXQgcGkgPSBhc3luYyhmdW5jdGlvbiooYWYsIGRldmljZUluZm8pIHtcbiAgICBhZi5zZXREZXZpY2UoZGV2aWNlSW5mby5pZCk7XG4gICAgbGV0IEFGQXJyYXkgPSBhZi5BRkFycmF5O1xuXG4gICAgY29uc29sZS5sb2coXCJDYWxjdWxhdGluZyBwaSBvbiBkZXZpY2U6XFxuXCIpO1xuICAgIGNvbW1vbi5wcmludERldmljZUluZm8oZGV2aWNlSW5mbyk7XG4gICAgY29uc29sZS5sb2coXCJcIik7XG5cbiAgICBsZXQgeCA9IGFmLnJhbmR1KG51bWJlck9mUG9pbnRzLCBhZi50eXBlcy5kdHlwZS5mMzIpO1xuICAgIGxldCB5ID0gYWYucmFuZHUobnVtYmVyT2ZQb2ludHMsIGFmLnR5cGVzLmR0eXBlLmYzMik7XG4gICAgbGV0IGRpc3QgPSBhZi5zcXJ0KHgubXVsKHgpLmFkZCh5Lm11bCh5KSkpO1xuICAgIGxldCBudW1JbnNpZGUgPSB5aWVsZCBhZi5zdW1Bc3luYyhkaXN0Lmx0KDEpKTtcbiAgICBsZXQgcGlWYWwgPSAoNC4wICogIG51bUluc2lkZSkgLyBudW1iZXJPZlBvaW50cztcblxuICAgIGNvbnNvbGUubG9nKGBQSSA9ICR7cGlWYWx9YCk7XG59KTtcblxuY29tbW9uLnJ1bk9uQWxsUGxhdGZyb21zKHBpLCBcInBpIGV4YW1wbGVcIik7XG4iXX0=
