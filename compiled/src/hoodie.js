// Generated by CoffeeScript 1.3.3
var Hoodie,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Hoodie = (function(_super) {

  __extends(Hoodie, _super);

  Hoodie.prototype.modules = function() {
    return {
      'store': Hoodie.Store,
      'config': Hoodie.Config,
      'account': Hoodie.Account,
      'remote': Hoodie.Remote,
      'email': Hoodie.Email
    };
  };

  function Hoodie(base_url) {
    this.base_url = base_url != null ? base_url : '';
    this.base_url = this.base_url.replace(/\/+$/, '');
    this._load_modules();
  }

  Hoodie.prototype.request = function(type, path, options) {
    var defaults;
    if (options == null) {
      options = {};
    }
    defaults = {
      type: type,
      url: "" + this.base_url + path,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      dataType: 'json'
    };
    return $.ajax($.extend(defaults, options));
  };

  Hoodie.prototype.defer = $.Deferred;

  Hoodie.prototype.isPromise = function(obj) {
    return typeof obj.done === 'function' && typeof obj.fail === 'function';
  };

  Hoodie.prototype._load_modules = function() {
    var Module, instance_name, _ref, _results;
    _ref = this.modules();
    _results = [];
    for (instance_name in _ref) {
      Module = _ref[instance_name];
      _results.push(this[instance_name] = new Module(this));
    }
    return _results;
  };

  return Hoodie;

})(Events);
