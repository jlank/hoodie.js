// Generated by CoffeeScript 1.3.1

define('mocks/hoodie', function() {
  var HoodieMock;
  return HoodieMock = (function() {

    HoodieMock.name = 'HoodieMock';

    function HoodieMock() {}

    HoodieMock.prototype.base_url = 'http://my.cou.ch';

    HoodieMock.prototype.trigger = function() {};

    HoodieMock.prototype.request = function() {};

    HoodieMock.prototype.on = function() {};

    HoodieMock.prototype.one = function() {};

    HoodieMock.prototype.unbind = function() {};

    HoodieMock.prototype.defer = $.Deferred;

    HoodieMock.prototype.store = {
      create: function() {
        return {
          then: function() {}
        };
      },
      destroy: function() {
        return {
          then: function() {}
        };
      },
      save: function() {
        return {
          then: function() {}
        };
      },
      changed_docs: function() {},
      db: {
        getItem: function() {},
        setItem: function() {},
        removeItem: function() {}
      }
    };

    HoodieMock.prototype.account = {
      authenticate: function() {
        return {
          then: function() {}
        };
      },
      user_db: function() {},
      on: function() {}
    };

    return HoodieMock;

  })();
});