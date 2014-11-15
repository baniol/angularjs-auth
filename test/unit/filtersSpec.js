describe('filters', function() {
  beforeEach(module('NgAuth'));

  describe('fromNow', function() {
    it('should display a relative date string', inject(function(fromNowFilter) {
      var now = new Date();
      now.setDate(now.getDate() + 2);
      expect(fromNowFilter(now)).toEqual('in 2 days');
    }));
  });
});