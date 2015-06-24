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
common.runOnAllPlatfroms(pi, "pi example");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCQTtBQUFBLFdBQVcsQ0FBQztBQUNaLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFVBQVMsQ0FBQyxDQUFDO0FBQ2xDLEFBQUksRUFBQSxDQUFBLEtBQUksRUFBSSxDQUFBLFFBQU8sVUFBVSxDQUFDO0FBQzlCLEFBQUksRUFBQSxDQUFBLE1BQUssRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFdBQVUsQ0FBQyxDQUFDO0FBRWpDLEFBQU0sRUFBQSxDQUFBLGNBQWEsRUFBSSxTQUFPLENBQUM7QUFFL0IsQUFBSSxFQUFBLENBQUEsRUFBQyxFQUFJLENBQUEsS0FBSSxBQUFDLENBdENkLGVBQWMsc0JBQXNCLEFBQUMsQ0FzQ3RCLGNBQVUsRUFBQyxDQUFHLENBQUEsVUFBUzs7Ozs7OztBQXRDdEMsT0FBTyxDQUFQLGVBQWMsd0JBQXdCLEFBQWQsQ0FBeEIsU0FBUyxJQUFHLENBQUc7QUFDVCxVQUFPLElBQUc7OztBQXNDWixXQUFDLFVBQVUsQUFBQyxDQUFDLFVBQVMsR0FBRyxDQUFDLENBQUM7a0JBQ2IsQ0FBQSxFQUFDLFFBQVE7QUFFdkIsZ0JBQU0sSUFBSSxBQUFDLENBQUMsNkJBQTRCLENBQUMsQ0FBQztBQUMxQyxlQUFLLGdCQUFnQixBQUFDLENBQUMsVUFBUyxDQUFDLENBQUM7QUFDbEMsZ0JBQU0sSUFBSSxBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFFUCxDQUFBLEVBQUMsTUFBTSxBQUFDLENBQUMsY0FBYSxDQUFHLENBQUEsRUFBQyxNQUFNLE1BQU0sSUFBSSxDQUFDO1lBQzNDLENBQUEsRUFBQyxNQUFNLEFBQUMsQ0FBQyxjQUFhLENBQUcsQ0FBQSxFQUFDLE1BQU0sTUFBTSxJQUFJLENBQUM7ZUFDeEMsQ0FBQSxFQUFDLEtBQUssQUFBQyxDQUFDLENBQUEsSUFBSSxBQUFDLENBQUMsQ0FBQSxDQUFDLElBQUksQUFBQyxDQUFDLENBQUEsSUFBSSxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQzs7Ozs7ZUFDbkIsQ0FBQSxFQUFDLFNBQVMsQUFBQyxDQUFDLElBQUcsR0FBRyxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7O29CQWpEaEQsQ0FBQSxJQUFHLEtBQUs7Ozs7Z0JBa0RRLENBQUEsQ0FBQyxHQUFFLEVBQUssVUFBUSxDQUFDLEVBQUksZUFBYTtBQUU5QyxnQkFBTSxJQUFJLEFBQUMsRUFBQyxPQUFPLEVBQUMsTUFBSSxFQUFHLENBQUM7Ozs7QUFwRGhDLGVBQU8sQ0FBQSxJQUFHLElBQUksQUFBQyxFQUFDLENBQUE7O0FBQ21CLEVBQy9CLE9BQTZCLEtBQUcsQ0FBQyxDQUFDO0FBbUR0QyxDQXJEdUQsQ0FxRHRELENBQUM7QUFFRixLQUFLLGtCQUFrQixBQUFDLENBQUMsRUFBQyxDQUFHLGFBQVcsQ0FBQyxDQUFDO0FBQzFDIiwiZmlsZSI6ImJlY2htYXJrcy9waS5qcyIsInNvdXJjZVJvb3QiOiJleGFtcGxlcy9lczYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEFycmF5RmlyZVxuQ29weXJpZ2h0IChjKSAyMDE1IEfvv71ib3IgTWV677+9IGFrYSB1bmJvcm5jaGlra2VuIChnYWJvci5tZXpvQG91dGxvb2suY29tKVxuQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbmFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgQXJyYXlGaXJlIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4gIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG5cblRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORFxuQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbldBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkVcbkRJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SXG5BTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcbihJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUztcbkxPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTlxuQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbihJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTXG5TT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cblwidXNlIHN0cmljdFwiO1xubGV0IEJsdWViaXJkID0gcmVxdWlyZShcImJsdWViaXJkXCIpO1xubGV0IGFzeW5jID0gQmx1ZWJpcmQuY29yb3V0aW5lO1xubGV0IGNvbW1vbiA9IHJlcXVpcmUoXCIuLi9jb21tb25cIik7XG5cbmNvbnN0IG51bWJlck9mUG9pbnRzID0gMjAwMDAwMDA7XG5cbmxldCBwaSA9IGFzeW5jKGZ1bmN0aW9uKihhZiwgZGV2aWNlSW5mbykge1xuICAgIGFmLnNldERldmljZShkZXZpY2VJbmZvLmlkKTtcbiAgICBsZXQgQUZBcnJheSA9IGFmLkFGQXJyYXk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkNhbGN1bGF0aW5nIHBpIG9uIGRldmljZTpcXG5cIik7XG4gICAgY29tbW9uLnByaW50RGV2aWNlSW5mbyhkZXZpY2VJbmZvKTtcbiAgICBjb25zb2xlLmxvZyhcIlwiKTtcblxuICAgIGxldCB4ID0gYWYucmFuZHUobnVtYmVyT2ZQb2ludHMsIGFmLnR5cGVzLmR0eXBlLmYzMik7XG4gICAgbGV0IHkgPSBhZi5yYW5kdShudW1iZXJPZlBvaW50cywgYWYudHlwZXMuZHR5cGUuZjMyKTtcbiAgICBsZXQgZGlzdCA9IGFmLnNxcnQoeC5tdWwoeCkuYWRkKHkubXVsKHkpKSk7XG4gICAgbGV0IG51bUluc2lkZSA9IHlpZWxkIGFmLnN1bUFzeW5jKGRpc3QubHQoMSkpO1xuICAgIGxldCBwaVZhbCA9ICg0LjAgKiAgbnVtSW5zaWRlKSAvIG51bWJlck9mUG9pbnRzO1xuXG4gICAgY29uc29sZS5sb2coYFBJID0gJHtwaVZhbH1gKTtcbn0pO1xuXG5jb21tb24ucnVuT25BbGxQbGF0ZnJvbXMocGksIFwicGkgZXhhbXBsZVwiKTtcbiJdfQ==
