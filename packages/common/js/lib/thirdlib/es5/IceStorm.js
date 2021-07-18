"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(function () {
  var root = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var ice = root.ice || {};
  root.IceStorm = root.IceStorm || {};
  ice.IceStorm = root.IceStorm;
  var Slice = Ice.Slice;

  (function () {
    //
    // Copyright (c) ZeroC, Inc. All rights reserved.
    //
    //
    // Ice version 3.7.3
    //
    // <auto-generated>
    //
    // Generated from file `Metrics.ice'
    //
    // Warning: do not edit this file.
    //
    // </auto-generated>
    //

    /* eslint-disable */

    /* jshint ignore: start */
    (function (module, require, exports) {
      var _ModuleRegistry = Ice._ModuleRegistry;
      var Slice = Ice.Slice;
      var iceC_IceMX_TopicMetrics_ids = ["::Ice::Object", "::IceMX::Metrics", "::IceMX::TopicMetrics"];
      /**
       * Provides information on IceStorm topics.
       *
       **/

      IceMX.TopicMetrics =
      /*#__PURE__*/
      function (_IceMX$Metrics) {
        _inherits(_class, _IceMX$Metrics);

        function _class(id, total, current, totalLifetime, failures) {
          var _this;

          var published = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new Ice.Long(0, 0);
          var forwarded = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new Ice.Long(0, 0);

          _classCallCheck(this, _class);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, id, total, current, totalLifetime, failures));
          _this.published = published;
          _this.forwarded = forwarded;
          return _this;
        }

        _createClass(_class, [{
          key: "_iceWriteMemberImpl",
          value: function _iceWriteMemberImpl(ostr) {
            ostr.writeLong(this.published);
            ostr.writeLong(this.forwarded);
          }
        }, {
          key: "_iceReadMemberImpl",
          value: function _iceReadMemberImpl(istr) {
            this.published = istr.readLong();
            this.forwarded = istr.readLong();
          }
        }]);

        return _class;
      }(IceMX.Metrics);

      Slice.defineValue(IceMX.TopicMetrics, iceC_IceMX_TopicMetrics_ids[2], false);
      var iceC_IceMX_SubscriberMetrics_ids = ["::Ice::Object", "::IceMX::Metrics", "::IceMX::SubscriberMetrics"];
      /**
       * Provides information on IceStorm subscribers.
       *
       **/

      IceMX.SubscriberMetrics =
      /*#__PURE__*/
      function (_IceMX$Metrics2) {
        _inherits(_class2, _IceMX$Metrics2);

        function _class2(id, total, current, totalLifetime, failures) {
          var _this2;

          var queued = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
          var outstanding = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
          var delivered = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new Ice.Long(0, 0);

          _classCallCheck(this, _class2);

          _this2 = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, id, total, current, totalLifetime, failures));
          _this2.queued = queued;
          _this2.outstanding = outstanding;
          _this2.delivered = delivered;
          return _this2;
        }

        _createClass(_class2, [{
          key: "_iceWriteMemberImpl",
          value: function _iceWriteMemberImpl(ostr) {
            ostr.writeInt(this.queued);
            ostr.writeInt(this.outstanding);
            ostr.writeLong(this.delivered);
          }
        }, {
          key: "_iceReadMemberImpl",
          value: function _iceReadMemberImpl(istr) {
            this.queued = istr.readInt();
            this.outstanding = istr.readInt();
            this.delivered = istr.readLong();
          }
        }]);

        return _class2;
      }(IceMX.Metrics);

      Slice.defineValue(IceMX.SubscriberMetrics, iceC_IceMX_SubscriberMetrics_ids[2], false);
    })(typeof global !== "undefined" && typeof global.process !== "undefined" ? module : undefined, typeof global !== "undefined" && typeof global.process !== "undefined" ? require : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self.Ice._require : window.Ice._require, typeof global !== "undefined" && typeof global.process !== "undefined" ? exports : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : window);
  })();

  (function () {
    //
    // Copyright (c) ZeroC, Inc. All rights reserved.
    //
    //
    // Ice version 3.7.3
    //
    // <auto-generated>
    //
    // Generated from file `IceStorm.ice'
    //
    // Warning: do not edit this file.
    //
    // </auto-generated>
    //

    /* eslint-disable */

    /* jshint ignore: start */

    /**
     * Information on the topic links.
     *
     **/
    IceStorm.LinkInfo =
    /*#__PURE__*/
    function () {
      function _class3() {
        var theTopic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var cost = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, _class3);

        this.theTopic = theTopic;
        this.name = name;
        this.cost = cost;
      }

      _createClass(_class3, [{
        key: "_write",
        value: function _write(ostr) {
          IceStorm.TopicPrx.write(ostr, this.theTopic);
          ostr.writeString(this.name);
          ostr.writeInt(this.cost);
        }
      }, {
        key: "_read",
        value: function _read(istr) {
          this.theTopic = IceStorm.TopicPrx.read(istr, this.theTopic);
          this.name = istr.readString();
          this.cost = istr.readInt();
        }
      }], [{
        key: "minWireSize",
        get: function get() {
          return 7;
        }
      }]);

      return _class3;
    }();

    Slice.defineStruct(IceStorm.LinkInfo, false, true);
    Slice.defineSequence(IceStorm, "LinkInfoSeqHelper", "IceStorm.LinkInfo", false);
    Slice.defineDictionary(IceStorm, "QoS", "QoSHelper", "Ice.StringHelper", "Ice.StringHelper", false, undefined, undefined);
    /**
     * This exception indicates that an attempt was made to create a link
     * that already exists.
     *
     **/

    IceStorm.LinkExists =
    /*#__PURE__*/
    function (_Ice$UserException) {
      _inherits(_class4, _Ice$UserException);

      function _class4() {
        var _this3;

        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        var _cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        _classCallCheck(this, _class4);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(_class4).call(this, _cause));
        _this3.name = name;
        return _this3;
      }

      _createClass(_class4, [{
        key: "_mostDerivedType",
        value: function _mostDerivedType() {
          return IceStorm.LinkExists;
        }
      }, {
        key: "_writeMemberImpl",
        value: function _writeMemberImpl(ostr) {
          ostr.writeString(this.name);
        }
      }, {
        key: "_readMemberImpl",
        value: function _readMemberImpl(istr) {
          this.name = istr.readString();
        }
      }], [{
        key: "_parent",
        get: function get() {
          return Ice.UserException;
        }
      }, {
        key: "_id",
        get: function get() {
          return "::IceStorm::LinkExists";
        }
      }]);

      return _class4;
    }(Ice.UserException);
    /**
     * This exception indicates that an attempt was made to remove a
     * link that does not exist.
     *
     **/


    IceStorm.NoSuchLink =
    /*#__PURE__*/
    function (_Ice$UserException2) {
      _inherits(_class5, _Ice$UserException2);

      function _class5() {
        var _this4;

        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        var _cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        _classCallCheck(this, _class5);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(_class5).call(this, _cause));
        _this4.name = name;
        return _this4;
      }

      _createClass(_class5, [{
        key: "_mostDerivedType",
        value: function _mostDerivedType() {
          return IceStorm.NoSuchLink;
        }
      }, {
        key: "_writeMemberImpl",
        value: function _writeMemberImpl(ostr) {
          ostr.writeString(this.name);
        }
      }, {
        key: "_readMemberImpl",
        value: function _readMemberImpl(istr) {
          this.name = istr.readString();
        }
      }], [{
        key: "_parent",
        get: function get() {
          return Ice.UserException;
        }
      }, {
        key: "_id",
        get: function get() {
          return "::IceStorm::NoSuchLink";
        }
      }]);

      return _class5;
    }(Ice.UserException);
    /**
     * This exception indicates that an attempt was made to subscribe
     * a proxy for which a subscription already exists.
     *
     **/


    IceStorm.AlreadySubscribed =
    /*#__PURE__*/
    function (_Ice$UserException3) {
      _inherits(_class6, _Ice$UserException3);

      function _class6() {
        var _cause = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        _classCallCheck(this, _class6);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class6).call(this, _cause));
      }

      _createClass(_class6, [{
        key: "_mostDerivedType",
        value: function _mostDerivedType() {
          return IceStorm.AlreadySubscribed;
        }
      }], [{
        key: "_parent",
        get: function get() {
          return Ice.UserException;
        }
      }, {
        key: "_id",
        get: function get() {
          return "::IceStorm::AlreadySubscribed";
        }
      }]);

      return _class6;
    }(Ice.UserException);
    /**
     * This exception indicates that an attempt was made to subscribe
     * a proxy that is null.
     *
     **/


    IceStorm.InvalidSubscriber =
    /*#__PURE__*/
    function (_Ice$UserException4) {
      _inherits(_class7, _Ice$UserException4);

      function _class7() {
        var _this5;

        var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        var _cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        _classCallCheck(this, _class7);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(_class7).call(this, _cause));
        _this5.reason = reason;
        return _this5;
      }

      _createClass(_class7, [{
        key: "_mostDerivedType",
        value: function _mostDerivedType() {
          return IceStorm.InvalidSubscriber;
        }
      }, {
        key: "_writeMemberImpl",
        value: function _writeMemberImpl(ostr) {
          ostr.writeString(this.reason);
        }
      }, {
        key: "_readMemberImpl",
        value: function _readMemberImpl(istr) {
          this.reason = istr.readString();
        }
      }], [{
        key: "_parent",
        get: function get() {
          return Ice.UserException;
        }
      }, {
        key: "_id",
        get: function get() {
          return "::IceStorm::InvalidSubscriber";
        }
      }]);

      return _class7;
    }(Ice.UserException);
    /**
     * This exception indicates that a subscription failed due to an
     * invalid QoS.
     *
     **/


    IceStorm.BadQoS =
    /*#__PURE__*/
    function (_Ice$UserException5) {
      _inherits(_class8, _Ice$UserException5);

      function _class8() {
        var _this6;

        var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        var _cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        _classCallCheck(this, _class8);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(_class8).call(this, _cause));
        _this6.reason = reason;
        return _this6;
      }

      _createClass(_class8, [{
        key: "_mostDerivedType",
        value: function _mostDerivedType() {
          return IceStorm.BadQoS;
        }
      }, {
        key: "_writeMemberImpl",
        value: function _writeMemberImpl(ostr) {
          ostr.writeString(this.reason);
        }
      }, {
        key: "_readMemberImpl",
        value: function _readMemberImpl(istr) {
          this.reason = istr.readString();
        }
      }], [{
        key: "_parent",
        get: function get() {
          return Ice.UserException;
        }
      }, {
        key: "_id",
        get: function get() {
          return "::IceStorm::BadQoS";
        }
      }]);

      return _class8;
    }(Ice.UserException);

    var iceC_IceStorm_Topic_ids = ["::Ice::Object", "::IceStorm::Topic"];
    /**
     * Publishers publish information on a particular topic. A topic
     * logically represents a type.
     *
     * @see TopicManager
     *
     **/

    IceStorm.Topic =
    /*#__PURE__*/
    function (_Ice$Object) {
      _inherits(_class9, _Ice$Object);

      function _class9() {
        _classCallCheck(this, _class9);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class9).apply(this, arguments));
      }

      return _class9;
    }(Ice.Object);

    IceStorm.TopicPrx =
    /*#__PURE__*/
    function (_Ice$ObjectPrx) {
      _inherits(_class10, _Ice$ObjectPrx);

      function _class10() {
        _classCallCheck(this, _class10);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class10).apply(this, arguments));
      }

      return _class10;
    }(Ice.ObjectPrx);

    Slice.defineOperations(IceStorm.Topic, IceStorm.TopicPrx, iceC_IceStorm_Topic_ids, 1, {
      "getName": [, 2, 1,, [7],,,,,],
      "getPublisher": [, 2, 1,, [9],,,,,],
      "getNonReplicatedPublisher": [, 2, 1,, [9],,,,,],
      "subscribeAndGetPublisher": [,,,, [9], [["IceStorm.QoSHelper"], [9]],, [IceStorm.AlreadySubscribed, IceStorm.BadQoS, IceStorm.InvalidSubscriber],,],
      "unsubscribe": [, 2, 2,,, [[9]],,,,],
      "link": [,,,,, [["IceStorm.TopicPrx"], [3]],, [IceStorm.LinkExists],,],
      "unlink": [,,,,, [["IceStorm.TopicPrx"]],, [IceStorm.NoSuchLink],,],
      "getLinkInfoSeq": [, 2, 1,, ["IceStorm.LinkInfoSeqHelper"],,,,,],
      "getSubscribers": [,,,, ["Ice.IdentitySeqHelper"],,,,,],
      "destroy": [,,,,,,,,,]
    });
    Slice.defineDictionary(IceStorm, "TopicDict", "TopicDictHelper", "Ice.StringHelper", "IceStorm.TopicPrx", false, undefined, undefined);
    /**
     * This exception indicates that an attempt was made to create a topic
     * that already exists.
     *
     **/

    IceStorm.TopicExists =
    /*#__PURE__*/
    function (_Ice$UserException6) {
      _inherits(_class11, _Ice$UserException6);

      function _class11() {
        var _this7;

        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        var _cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        _classCallCheck(this, _class11);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(_class11).call(this, _cause));
        _this7.name = name;
        return _this7;
      }

      _createClass(_class11, [{
        key: "_mostDerivedType",
        value: function _mostDerivedType() {
          return IceStorm.TopicExists;
        }
      }, {
        key: "_writeMemberImpl",
        value: function _writeMemberImpl(ostr) {
          ostr.writeString(this.name);
        }
      }, {
        key: "_readMemberImpl",
        value: function _readMemberImpl(istr) {
          this.name = istr.readString();
        }
      }], [{
        key: "_parent",
        get: function get() {
          return Ice.UserException;
        }
      }, {
        key: "_id",
        get: function get() {
          return "::IceStorm::TopicExists";
        }
      }]);

      return _class11;
    }(Ice.UserException);
    /**
     * This exception indicates that an attempt was made to retrieve a
     * topic that does not exist.
     *
     **/


    IceStorm.NoSuchTopic =
    /*#__PURE__*/
    function (_Ice$UserException7) {
      _inherits(_class12, _Ice$UserException7);

      function _class12() {
        var _this8;

        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        var _cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        _classCallCheck(this, _class12);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(_class12).call(this, _cause));
        _this8.name = name;
        return _this8;
      }

      _createClass(_class12, [{
        key: "_mostDerivedType",
        value: function _mostDerivedType() {
          return IceStorm.NoSuchTopic;
        }
      }, {
        key: "_writeMemberImpl",
        value: function _writeMemberImpl(ostr) {
          ostr.writeString(this.name);
        }
      }, {
        key: "_readMemberImpl",
        value: function _readMemberImpl(istr) {
          this.name = istr.readString();
        }
      }], [{
        key: "_parent",
        get: function get() {
          return Ice.UserException;
        }
      }, {
        key: "_id",
        get: function get() {
          return "::IceStorm::NoSuchTopic";
        }
      }]);

      return _class12;
    }(Ice.UserException);

    var iceC_IceStorm_TopicManager_ids = ["::Ice::Object", "::IceStorm::TopicManager"];
    /**
     * A topic manager manages topics, and subscribers to topics.
     *
     * @see Topic
     *
     **/

    IceStorm.TopicManager =
    /*#__PURE__*/
    function (_Ice$Object2) {
      _inherits(_class13, _Ice$Object2);

      function _class13() {
        _classCallCheck(this, _class13);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class13).apply(this, arguments));
      }

      return _class13;
    }(Ice.Object);

    IceStorm.TopicManagerPrx =
    /*#__PURE__*/
    function (_Ice$ObjectPrx2) {
      _inherits(_class14, _Ice$ObjectPrx2);

      function _class14() {
        _classCallCheck(this, _class14);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class14).apply(this, arguments));
      }

      return _class14;
    }(Ice.ObjectPrx);

    Slice.defineOperations(IceStorm.TopicManager, IceStorm.TopicManagerPrx, iceC_IceStorm_TopicManager_ids, 1, {
      "create": [,,,, ["IceStorm.TopicPrx"], [[7]],, [IceStorm.TopicExists],,],
      "retrieve": [, 2, 1,, ["IceStorm.TopicPrx"], [[7]],, [IceStorm.NoSuchTopic],,],
      "retrieveAll": [, 2, 1,, ["IceStorm.TopicDictHelper"],,,,,],
      "getSliceChecksums": [, 2, 1,, ["Ice.SliceChecksumDictHelper"],,,,,]
    });
    var iceC_IceStorm_Finder_ids = ["::Ice::Object", "::IceStorm::Finder"];
    /**
     * This inferface is advertised by the IceStorm service through the
     * Ice object with the identity `IceStorm/Finder'. This allows clients
     * to retrieve the topic manager with just the endpoint information of
     * the IceStorm service.
     *
     **/

    IceStorm.Finder =
    /*#__PURE__*/
    function (_Ice$Object3) {
      _inherits(_class15, _Ice$Object3);

      function _class15() {
        _classCallCheck(this, _class15);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class15).apply(this, arguments));
      }

      return _class15;
    }(Ice.Object);

    IceStorm.FinderPrx =
    /*#__PURE__*/
    function (_Ice$ObjectPrx3) {
      _inherits(_class16, _Ice$ObjectPrx3);

      function _class16() {
        _classCallCheck(this, _class16);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class16).apply(this, arguments));
      }

      return _class16;
    }(Ice.ObjectPrx);

    Slice.defineOperations(IceStorm.Finder, IceStorm.FinderPrx, iceC_IceStorm_Finder_ids, 1, {
      "getTopicManager": [,,,, ["IceStorm.TopicManagerPrx"],,,,,]
    });
  })();

  root.IceStorm = IceStorm;
  root.ice = ice;
})();
//# sourceMappingURL=IceStorm.js.map
