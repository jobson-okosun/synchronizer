import {
  RouterLink,
  RouterOutlet,
  init_router,
  provideRouter
} from "./chunk-LU6QLYEP.js";
import {
  ANIMATION_MODULE_TYPE,
  BrowserModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  DomRendererFactory2,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  TemplateRef,
  TestBed,
  ViewChild,
  ViewEncapsulation,
  __async,
  __commonJS,
  __decorate,
  __esm,
  __objRest,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  contentChild,
  core_exports,
  effect,
  init_browser,
  init_common,
  init_core,
  init_dom_renderer,
  init_esm,
  init_testing,
  init_tslib_es6,
  inject,
  input,
  isPlatformBrowser,
  isPlatformServer,
  numberAttribute,
  provideZonelessChangeDetection,
  signal,
  untracked,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-4VNRBC2U.js";

// node_modules/@angular/animations/fesm2022/private_export.mjs
function trigger(name, definitions) {
  return { type: AnimationMetadataType.Trigger, name, definitions, options: {} };
}
function animate(timings, styles = null) {
  return { type: AnimationMetadataType.Animate, styles, timings };
}
function sequence(steps, options = null) {
  return { type: AnimationMetadataType.Sequence, steps, options };
}
function style(tokens) {
  return { type: AnimationMetadataType.Style, styles: tokens, offset: null };
}
function state(name, styles, options) {
  return { type: AnimationMetadataType.State, name, styles, options };
}
function transition(stateChangeExpr, steps, options = null) {
  return { type: AnimationMetadataType.Transition, expr: stateChangeExpr, animation: steps, options };
}
function animation(steps, options = null) {
  return { type: AnimationMetadataType.Reference, animation: steps, options };
}
function useAnimation(animation2, options = null) {
  return { type: AnimationMetadataType.AnimateRef, animation: animation2, options };
}
var AnimationMetadataType, AUTO_STYLE, NoopAnimationPlayer, AnimationGroupPlayer, \u0275PRE_STYLE;
var init_private_export = __esm({
  "node_modules/@angular/animations/fesm2022/private_export.mjs"() {
    "use strict";
    (function(AnimationMetadataType2) {
      AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
      AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
      AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
      AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
      AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
      AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
      AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
      AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
      AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
      AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
      AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
      AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
      AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
    })(AnimationMetadataType || (AnimationMetadataType = {}));
    AUTO_STYLE = "*";
    NoopAnimationPlayer = class {
      _onDoneFns = [];
      _onStartFns = [];
      _onDestroyFns = [];
      _originalOnDoneFns = [];
      _originalOnStartFns = [];
      _started = false;
      _destroyed = false;
      _finished = false;
      _position = 0;
      parentPlayer = null;
      totalTime;
      constructor(duration = 0, delay = 0) {
        this.totalTime = duration + delay;
      }
      _onFinish() {
        if (!this._finished) {
          this._finished = true;
          this._onDoneFns.forEach((fn) => fn());
          this._onDoneFns = [];
        }
      }
      onStart(fn) {
        this._originalOnStartFns.push(fn);
        this._onStartFns.push(fn);
      }
      onDone(fn) {
        this._originalOnDoneFns.push(fn);
        this._onDoneFns.push(fn);
      }
      onDestroy(fn) {
        this._onDestroyFns.push(fn);
      }
      hasStarted() {
        return this._started;
      }
      init() {
      }
      play() {
        if (!this.hasStarted()) {
          this._onStart();
          this.triggerMicrotask();
        }
        this._started = true;
      }
      /** @internal */
      triggerMicrotask() {
        queueMicrotask(() => this._onFinish());
      }
      _onStart() {
        this._onStartFns.forEach((fn) => fn());
        this._onStartFns = [];
      }
      pause() {
      }
      restart() {
      }
      finish() {
        this._onFinish();
      }
      destroy() {
        if (!this._destroyed) {
          this._destroyed = true;
          if (!this.hasStarted()) {
            this._onStart();
          }
          this.finish();
          this._onDestroyFns.forEach((fn) => fn());
          this._onDestroyFns = [];
        }
      }
      reset() {
        this._started = false;
        this._finished = false;
        this._onStartFns = this._originalOnStartFns;
        this._onDoneFns = this._originalOnDoneFns;
      }
      setPosition(position) {
        this._position = this.totalTime ? position * this.totalTime : 1;
      }
      getPosition() {
        return this.totalTime ? this._position / this.totalTime : 1;
      }
      /** @internal */
      triggerCallback(phaseName) {
        const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
        methods.forEach((fn) => fn());
        methods.length = 0;
      }
    };
    AnimationGroupPlayer = class {
      _onDoneFns = [];
      _onStartFns = [];
      _finished = false;
      _started = false;
      _destroyed = false;
      _onDestroyFns = [];
      parentPlayer = null;
      totalTime = 0;
      players;
      constructor(_players) {
        this.players = _players;
        let doneCount = 0;
        let destroyCount = 0;
        let startCount = 0;
        const total = this.players.length;
        if (total == 0) {
          queueMicrotask(() => this._onFinish());
        } else {
          this.players.forEach((player) => {
            player.onDone(() => {
              if (++doneCount == total) {
                this._onFinish();
              }
            });
            player.onDestroy(() => {
              if (++destroyCount == total) {
                this._onDestroy();
              }
            });
            player.onStart(() => {
              if (++startCount == total) {
                this._onStart();
              }
            });
          });
        }
        this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
      }
      _onFinish() {
        if (!this._finished) {
          this._finished = true;
          this._onDoneFns.forEach((fn) => fn());
          this._onDoneFns = [];
        }
      }
      init() {
        this.players.forEach((player) => player.init());
      }
      onStart(fn) {
        this._onStartFns.push(fn);
      }
      _onStart() {
        if (!this.hasStarted()) {
          this._started = true;
          this._onStartFns.forEach((fn) => fn());
          this._onStartFns = [];
        }
      }
      onDone(fn) {
        this._onDoneFns.push(fn);
      }
      onDestroy(fn) {
        this._onDestroyFns.push(fn);
      }
      hasStarted() {
        return this._started;
      }
      play() {
        if (!this.parentPlayer) {
          this.init();
        }
        this._onStart();
        this.players.forEach((player) => player.play());
      }
      pause() {
        this.players.forEach((player) => player.pause());
      }
      restart() {
        this.players.forEach((player) => player.restart());
      }
      finish() {
        this._onFinish();
        this.players.forEach((player) => player.finish());
      }
      destroy() {
        this._onDestroy();
      }
      _onDestroy() {
        if (!this._destroyed) {
          this._destroyed = true;
          this._onFinish();
          this.players.forEach((player) => player.destroy());
          this._onDestroyFns.forEach((fn) => fn());
          this._onDestroyFns = [];
        }
      }
      reset() {
        this.players.forEach((player) => player.reset());
        this._destroyed = false;
        this._finished = false;
        this._started = false;
      }
      setPosition(p3) {
        const timeAtPosition = p3 * this.totalTime;
        this.players.forEach((player) => {
          const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
          player.setPosition(position);
        });
      }
      getPosition() {
        const longestPlayer = this.players.reduce((longestSoFar, player) => {
          const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
          return newPlayerIsLongest ? player : longestSoFar;
        }, null);
        return longestPlayer != null ? longestPlayer.getPosition() : 0;
      }
      beforeDestroy() {
        this.players.forEach((player) => {
          if (player.beforeDestroy) {
            player.beforeDestroy();
          }
        });
      }
      /** @internal */
      triggerCallback(phaseName) {
        const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
        methods.forEach((fn) => fn());
        methods.length = 0;
      }
    };
    \u0275PRE_STYLE = "!";
  }
});

// node_modules/@angular/animations/fesm2022/util.mjs
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes2, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes2.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return { element, triggerName, fromState, toState, phaseName, totalTime, disabled: !!disabled };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
function resolveTimingValue(value) {
  if (typeof value == "number")
    return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2)
    return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(PARSE_TIME_EXPRESSION_REGEX);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return { duration: 0, delay: 0, easing: "" };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return { duration, delay, easing };
}
function normalizeKeyframes(keyframes2) {
  if (!keyframes2.length) {
    return [];
  }
  if (keyframes2[0] instanceof Map) {
    return keyframes2;
  }
  return keyframes2.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1)
      return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
function dashCaseToCamelCase(input2) {
  return input2.replace(DASH_CASE_REGEXP, (...m2) => m2[1].toUpperCase());
}
function camelCaseToDashCase(input2) {
  return input2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes2, previousStyles) {
  if (previousStyles.size && keyframes2.length) {
    let startingKeyframe = keyframes2[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i3 = 1; i3 < keyframes2.length; i3++) {
        let kf = keyframes2[i3];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes2;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}
var LINE_START, ANIMATABLE_PROP_SET, documentElement, _CACHED_BODY, _IS_WEBKIT, ONE_SECOND, SUBSTITUTION_EXPR_START, SUBSTITUTION_EXPR_END, ENTER_CLASSNAME, LEAVE_CLASSNAME, NG_TRIGGER_CLASSNAME, NG_TRIGGER_SELECTOR, NG_ANIMATING_CLASSNAME, NG_ANIMATING_SELECTOR, PARSE_TIME_EXPRESSION_REGEX, PARAM_REGEX, DASH_CASE_REGEXP;
var init_util = __esm({
  "node_modules/@angular/animations/fesm2022/util.mjs"() {
    "use strict";
    init_private_export();
    init_core();
    LINE_START = "\n - ";
    ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set([
      "-moz-outline-radius",
      "-moz-outline-radius-bottomleft",
      "-moz-outline-radius-bottomright",
      "-moz-outline-radius-topleft",
      "-moz-outline-radius-topright",
      "-ms-grid-columns",
      "-ms-grid-rows",
      "-webkit-line-clamp",
      "-webkit-text-fill-color",
      "-webkit-text-stroke",
      "-webkit-text-stroke-color",
      "accent-color",
      "all",
      "backdrop-filter",
      "background",
      "background-color",
      "background-position",
      "background-size",
      "block-size",
      "border",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-width",
      "border-color",
      "border-end-end-radius",
      "border-end-start-radius",
      "border-image-outset",
      "border-image-slice",
      "border-image-width",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-width",
      "border-left",
      "border-left-color",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-width",
      "border-start-end-radius",
      "border-start-start-radius",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-width",
      "border-width",
      "bottom",
      "box-shadow",
      "caret-color",
      "clip",
      "clip-path",
      "color",
      "column-count",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-width",
      "column-width",
      "columns",
      "filter",
      "flex",
      "flex-basis",
      "flex-grow",
      "flex-shrink",
      "font",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-variation-settings",
      "font-weight",
      "gap",
      "grid-column-gap",
      "grid-gap",
      "grid-row-gap",
      "grid-template-columns",
      "grid-template-rows",
      "height",
      "inline-size",
      "input-security",
      "inset",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "left",
      "letter-spacing",
      "line-clamp",
      "line-height",
      "margin",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "mask",
      "mask-border",
      "mask-position",
      "mask-size",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-lines",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "object-position",
      "offset",
      "offset-anchor",
      "offset-distance",
      "offset-path",
      "offset-position",
      "offset-rotate",
      "opacity",
      "order",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-width",
      "padding",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "perspective",
      "perspective-origin",
      "right",
      "rotate",
      "row-gap",
      "scale",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-coordinate",
      "scroll-snap-destination",
      "scrollbar-color",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "tab-size",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-thickness",
      "text-emphasis",
      "text-emphasis-color",
      "text-indent",
      "text-shadow",
      "text-underline-offset",
      "top",
      "transform",
      "transform-origin",
      "translate",
      "vertical-align",
      "visibility",
      "width",
      "word-spacing",
      "z-index",
      "zoom"
    ]);
    documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
    _CACHED_BODY = null;
    _IS_WEBKIT = false;
    ONE_SECOND = 1e3;
    SUBSTITUTION_EXPR_START = "{{";
    SUBSTITUTION_EXPR_END = "}}";
    ENTER_CLASSNAME = "ng-enter";
    LEAVE_CLASSNAME = "ng-leave";
    NG_TRIGGER_CLASSNAME = "ng-trigger";
    NG_TRIGGER_SELECTOR = ".ng-trigger";
    NG_ANIMATING_CLASSNAME = "ng-animating";
    NG_ANIMATING_SELECTOR = ".ng-animating";
    PARSE_TIME_EXPRESSION_REGEX = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
    PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
    DASH_CASE_REGEXP = /-+([a-z0-9])/g;
  }
});

// node_modules/@angular/animations/fesm2022/browser.mjs
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
function consumeOffset(styles) {
  if (typeof styles == "string")
    return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v3) => v3.charAt(0) == "{" && v3.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return { duration, delay, easing };
}
function createTimelineInstruction(element, keyframes2, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes: keyframes2,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input2, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input2.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({ keyframes: keyframes2 }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes2.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation2 = { type: AnimationMetadataType.Sequence, steps: [], options: null };
  const transition2 = {
    type: AnimationMetadataType.Transition,
    animation: animation2,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition2, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i3 = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i3++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0)
    return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node)
      return NULL_NODE;
    let root = localRootMap.get(node);
    if (root)
      return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i3 = 0; i3 < players.length; i3++) {
    const player = players[i3];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a2, b4) {
  const k1 = Object.keys(a2);
  const k22 = Object.keys(b4);
  if (k1.length != k22.length)
    return false;
  for (let i3 = 0; i3 < k1.length; i3++) {
    const prop = k1[i3];
    if (!b4.hasOwnProperty(prop) || a2[prop] !== b4[prop])
      return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry)
    return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger2 = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger2, phase];
}
var NoopAnimationDriver, AnimationDriver, AnimationStyleNormalizer, DIMENSIONAL_PROP_SET, WebAnimationsStyleNormalizer, ANY_STATE, TRUE_BOOLEAN_VALUES, FALSE_BOOLEAN_VALUES, SELF_TOKEN, SELF_TOKEN_REGEX, ROOT_SELECTOR, AnimationAstBuilderVisitor, AnimationAstBuilderContext, ElementInstructionMap, ONE_FRAME_IN_MILLISECONDS, ENTER_TOKEN, ENTER_TOKEN_REGEX, LEAVE_TOKEN, LEAVE_TOKEN_REGEX, AnimationTimelineBuilderVisitor, DEFAULT_NOOP_PREVIOUS_NODE, AnimationTimelineContext, TimelineBuilder, SubTimelineBuilder, EMPTY_OBJECT, AnimationTransitionFactory, AnimationStateStyles, AnimationTrigger, EMPTY_INSTRUCTION_MAP, TimelineAnimationEngine, QUEUED_CLASSNAME, QUEUED_SELECTOR, DISABLED_CLASSNAME, DISABLED_SELECTOR, STAR_CLASSNAME, STAR_SELECTOR, EMPTY_PLAYER_ARRAY, NULL_REMOVAL_STATE, NULL_REMOVED_QUERIED_STATE, REMOVAL_FLAG, StateValue, VOID_VALUE, DEFAULT_STATE_VALUE, AnimationTransitionNamespace, TransitionAnimationEngine, TransitionAnimationPlayer, AnimationEngine, SpecialCasedStyles, WebAnimationsPlayer, WebAnimationsDriver, ANIMATION_PREFIX, DISABLE_ANIMATIONS_FLAG, BaseAnimationRenderer, AnimationRenderer, AnimationRendererFactory;
var init_browser2 = __esm({
  "node_modules/@angular/animations/fesm2022/browser.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_util();
    init_private_export();
    NoopAnimationDriver = class _NoopAnimationDriver {
      /**
       * @returns Whether `prop` is a valid CSS property
       */
      validateStyleProperty(prop) {
        return validateStyleProperty(prop);
      }
      /**
       *
       * @returns Whether elm1 contains elm2.
       */
      containsElement(elm1, elm2) {
        return containsElement(elm1, elm2);
      }
      /**
       * @returns Rhe parent of the given element or `null` if the element is the `document`
       */
      getParentElement(element) {
        return getParentElement(element);
      }
      /**
       * @returns The result of the query selector on the element. The array will contain up to 1 item
       *     if `multi` is  `false`.
       */
      query(element, selector, multi) {
        return invokeQuery(element, selector, multi);
      }
      /**
       * @returns The `defaultValue` or empty string
       */
      computeStyle(element, prop, defaultValue) {
        return defaultValue || "";
      }
      /**
       * @returns An `NoopAnimationPlayer`
       */
      animate(element, keyframes2, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
        return new NoopAnimationPlayer(duration, delay);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _NoopAnimationDriver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _NoopAnimationDriver });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: NoopAnimationDriver, decorators: [{
      type: Injectable
    }] });
    AnimationDriver = class {
      /**
       * @deprecated Use the NoopAnimationDriver class.
       */
      static NOOP = new NoopAnimationDriver();
    };
    AnimationStyleNormalizer = class {
    };
    DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set([
      "width",
      "height",
      "minWidth",
      "minHeight",
      "maxWidth",
      "maxHeight",
      "left",
      "top",
      "bottom",
      "right",
      "fontSize",
      "outlineWidth",
      "outlineOffset",
      "paddingTop",
      "paddingLeft",
      "paddingBottom",
      "paddingRight",
      "marginTop",
      "marginLeft",
      "marginBottom",
      "marginRight",
      "borderRadius",
      "borderWidth",
      "borderTopWidth",
      "borderLeftWidth",
      "borderRightWidth",
      "borderBottomWidth",
      "textIndent",
      "perspective"
    ]);
    WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
      normalizePropertyName(propertyName, errors) {
        return dashCaseToCamelCase(propertyName);
      }
      normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
        let unit = "";
        const strVal = value.toString().trim();
        if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
          if (typeof value === "number") {
            unit = "px";
          } else {
            const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
            if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
              errors.push(invalidCssUnitValue(userProvidedProperty, value));
            }
          }
        }
        return strVal + unit;
      }
    };
    ANY_STATE = "*";
    TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
    FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
    SELF_TOKEN = ":self";
    SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
    ROOT_SELECTOR = "";
    AnimationAstBuilderVisitor = class {
      _driver;
      constructor(_driver) {
        this._driver = _driver;
      }
      build(metadata, errors, warnings) {
        const context = new AnimationAstBuilderContext(errors);
        this._resetContextStyleTimingState(context);
        const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (context.unsupportedCSSPropertiesFound.size) {
            pushUnrecognizedPropertiesWarning(warnings, [
              ...context.unsupportedCSSPropertiesFound.keys()
            ]);
          }
        }
        return ast;
      }
      _resetContextStyleTimingState(context) {
        context.currentQuerySelector = ROOT_SELECTOR;
        context.collectedStyles = /* @__PURE__ */ new Map();
        context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
        context.currentTime = 0;
      }
      visitTrigger(metadata, context) {
        let queryCount = context.queryCount = 0;
        let depCount = context.depCount = 0;
        const states = [];
        const transitions = [];
        if (metadata.name.charAt(0) == "@") {
          context.errors.push(invalidTrigger());
        }
        metadata.definitions.forEach((def) => {
          this._resetContextStyleTimingState(context);
          if (def.type == AnimationMetadataType.State) {
            const stateDef = def;
            const name = stateDef.name;
            name.toString().split(/\s*,\s*/).forEach((n2) => {
              stateDef.name = n2;
              states.push(this.visitState(stateDef, context));
            });
            stateDef.name = name;
          } else if (def.type == AnimationMetadataType.Transition) {
            const transition2 = this.visitTransition(def, context);
            queryCount += transition2.queryCount;
            depCount += transition2.depCount;
            transitions.push(transition2);
          } else {
            context.errors.push(invalidDefinition());
          }
        });
        return {
          type: AnimationMetadataType.Trigger,
          name: metadata.name,
          states,
          transitions,
          queryCount,
          depCount,
          options: null
        };
      }
      visitState(metadata, context) {
        const styleAst = this.visitStyle(metadata.styles, context);
        const astParams = metadata.options && metadata.options.params || null;
        if (styleAst.containsDynamicStyles) {
          const missingSubs = /* @__PURE__ */ new Set();
          const params = astParams || {};
          styleAst.styles.forEach((style11) => {
            if (style11 instanceof Map) {
              style11.forEach((value) => {
                extractStyleParams(value).forEach((sub) => {
                  if (!params.hasOwnProperty(sub)) {
                    missingSubs.add(sub);
                  }
                });
              });
            }
          });
          if (missingSubs.size) {
            context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
          }
        }
        return {
          type: AnimationMetadataType.State,
          name: metadata.name,
          style: styleAst,
          options: astParams ? { params: astParams } : null
        };
      }
      visitTransition(metadata, context) {
        context.queryCount = 0;
        context.depCount = 0;
        const animation2 = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
        const matchers = parseTransitionExpr(metadata.expr, context.errors);
        return {
          type: AnimationMetadataType.Transition,
          matchers,
          animation: animation2,
          queryCount: context.queryCount,
          depCount: context.depCount,
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitSequence(metadata, context) {
        return {
          type: AnimationMetadataType.Sequence,
          steps: metadata.steps.map((s4) => visitDslNode(this, s4, context)),
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitGroup(metadata, context) {
        const currentTime = context.currentTime;
        let furthestTime = 0;
        const steps = metadata.steps.map((step) => {
          context.currentTime = currentTime;
          const innerAst = visitDslNode(this, step, context);
          furthestTime = Math.max(furthestTime, context.currentTime);
          return innerAst;
        });
        context.currentTime = furthestTime;
        return {
          type: AnimationMetadataType.Group,
          steps,
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitAnimate(metadata, context) {
        const timingAst = constructTimingAst(metadata.timings, context.errors);
        context.currentAnimateTimings = timingAst;
        let styleAst;
        let styleMetadata = metadata.styles ? metadata.styles : style({});
        if (styleMetadata.type == AnimationMetadataType.Keyframes) {
          styleAst = this.visitKeyframes(styleMetadata, context);
        } else {
          let styleMetadata2 = metadata.styles;
          let isEmpty = false;
          if (!styleMetadata2) {
            isEmpty = true;
            const newStyleData = {};
            if (timingAst.easing) {
              newStyleData["easing"] = timingAst.easing;
            }
            styleMetadata2 = style(newStyleData);
          }
          context.currentTime += timingAst.duration + timingAst.delay;
          const _styleAst = this.visitStyle(styleMetadata2, context);
          _styleAst.isEmptyStep = isEmpty;
          styleAst = _styleAst;
        }
        context.currentAnimateTimings = null;
        return {
          type: AnimationMetadataType.Animate,
          timings: timingAst,
          style: styleAst,
          options: null
        };
      }
      visitStyle(metadata, context) {
        const ast = this._makeStyleAst(metadata, context);
        this._validateStyleAst(ast, context);
        return ast;
      }
      _makeStyleAst(metadata, context) {
        const styles = [];
        const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
        for (let styleTuple of metadataStyles) {
          if (typeof styleTuple === "string") {
            if (styleTuple === AUTO_STYLE) {
              styles.push(styleTuple);
            } else {
              context.errors.push(invalidStyleValue(styleTuple));
            }
          } else {
            styles.push(new Map(Object.entries(styleTuple)));
          }
        }
        let containsDynamicStyles = false;
        let collectedEasing = null;
        styles.forEach((styleData) => {
          if (styleData instanceof Map) {
            if (styleData.has("easing")) {
              collectedEasing = styleData.get("easing");
              styleData.delete("easing");
            }
            if (!containsDynamicStyles) {
              for (let value of styleData.values()) {
                if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
                  containsDynamicStyles = true;
                  break;
                }
              }
            }
          }
        });
        return {
          type: AnimationMetadataType.Style,
          styles,
          easing: collectedEasing,
          offset: metadata.offset,
          containsDynamicStyles,
          options: null
        };
      }
      _validateStyleAst(ast, context) {
        const timings = context.currentAnimateTimings;
        let endTime = context.currentTime;
        let startTime = context.currentTime;
        if (timings && startTime > 0) {
          startTime -= timings.duration + timings.delay;
        }
        ast.styles.forEach((tuple) => {
          if (typeof tuple === "string")
            return;
          tuple.forEach((value, prop) => {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              if (!this._driver.validateStyleProperty(prop)) {
                tuple.delete(prop);
                context.unsupportedCSSPropertiesFound.add(prop);
                return;
              }
            }
            const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
            const collectedEntry = collectedStyles.get(prop);
            let updateCollectedStyle = true;
            if (collectedEntry) {
              if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
                context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
                updateCollectedStyle = false;
              }
              startTime = collectedEntry.startTime;
            }
            if (updateCollectedStyle) {
              collectedStyles.set(prop, { startTime, endTime });
            }
            if (context.options) {
              validateStyleParams(value, context.options, context.errors);
            }
          });
        });
      }
      visitKeyframes(metadata, context) {
        const ast = { type: AnimationMetadataType.Keyframes, styles: [], options: null };
        if (!context.currentAnimateTimings) {
          context.errors.push(invalidKeyframes());
          return ast;
        }
        const MAX_KEYFRAME_OFFSET = 1;
        let totalKeyframesWithOffsets = 0;
        const offsets = [];
        let offsetsOutOfOrder = false;
        let keyframesOutOfRange = false;
        let previousOffset = 0;
        const keyframes2 = metadata.steps.map((styles) => {
          const style11 = this._makeStyleAst(styles, context);
          let offsetVal = style11.offset != null ? style11.offset : consumeOffset(style11.styles);
          let offset = 0;
          if (offsetVal != null) {
            totalKeyframesWithOffsets++;
            offset = style11.offset = offsetVal;
          }
          keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
          offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
          previousOffset = offset;
          offsets.push(offset);
          return style11;
        });
        if (keyframesOutOfRange) {
          context.errors.push(invalidOffset());
        }
        if (offsetsOutOfOrder) {
          context.errors.push(keyframeOffsetsOutOfOrder());
        }
        const length = metadata.steps.length;
        let generatedOffset = 0;
        if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
          context.errors.push(keyframesMissingOffsets());
        } else if (totalKeyframesWithOffsets == 0) {
          generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
        }
        const limit = length - 1;
        const currentTime = context.currentTime;
        const currentAnimateTimings = context.currentAnimateTimings;
        const animateDuration = currentAnimateTimings.duration;
        keyframes2.forEach((kf, i3) => {
          const offset = generatedOffset > 0 ? i3 == limit ? 1 : generatedOffset * i3 : offsets[i3];
          const durationUpToThisFrame = offset * animateDuration;
          context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
          currentAnimateTimings.duration = durationUpToThisFrame;
          this._validateStyleAst(kf, context);
          kf.offset = offset;
          ast.styles.push(kf);
        });
        return ast;
      }
      visitReference(metadata, context) {
        return {
          type: AnimationMetadataType.Reference,
          animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitAnimateChild(metadata, context) {
        context.depCount++;
        return {
          type: AnimationMetadataType.AnimateChild,
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitAnimateRef(metadata, context) {
        return {
          type: AnimationMetadataType.AnimateRef,
          animation: this.visitReference(metadata.animation, context),
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitQuery(metadata, context) {
        const parentSelector = context.currentQuerySelector;
        const options = metadata.options || {};
        context.queryCount++;
        context.currentQuery = metadata;
        const [selector, includeSelf] = normalizeSelector(metadata.selector);
        context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
        getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
        const animation2 = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
        context.currentQuery = null;
        context.currentQuerySelector = parentSelector;
        return {
          type: AnimationMetadataType.Query,
          selector,
          limit: options.limit || 0,
          optional: !!options.optional,
          includeSelf,
          animation: animation2,
          originalSelector: metadata.selector,
          options: normalizeAnimationOptions(metadata.options)
        };
      }
      visitStagger(metadata, context) {
        if (!context.currentQuery) {
          context.errors.push(invalidStagger());
        }
        const timings = metadata.timings === "full" ? { duration: 0, delay: 0, easing: "full" } : resolveTiming(metadata.timings, context.errors, true);
        return {
          type: AnimationMetadataType.Stagger,
          animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
          timings,
          options: null
        };
      }
    };
    AnimationAstBuilderContext = class {
      errors;
      queryCount = 0;
      depCount = 0;
      currentTransition = null;
      currentQuery = null;
      currentQuerySelector = null;
      currentAnimateTimings = null;
      currentTime = 0;
      collectedStyles = /* @__PURE__ */ new Map();
      options = null;
      unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
      constructor(errors) {
        this.errors = errors;
      }
    };
    ElementInstructionMap = class {
      _map = /* @__PURE__ */ new Map();
      get(element) {
        return this._map.get(element) || [];
      }
      append(element, instructions) {
        let existingInstructions = this._map.get(element);
        if (!existingInstructions) {
          this._map.set(element, existingInstructions = []);
        }
        existingInstructions.push(...instructions);
      }
      has(element) {
        return this._map.has(element);
      }
      clear() {
        this._map.clear();
      }
    };
    ONE_FRAME_IN_MILLISECONDS = 1;
    ENTER_TOKEN = ":enter";
    ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
    LEAVE_TOKEN = ":leave";
    LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
    AnimationTimelineBuilderVisitor = class {
      buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
        subInstructions = subInstructions || new ElementInstructionMap();
        const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
        context.options = options;
        const delay = options.delay ? resolveTimingValue(options.delay) : 0;
        context.currentTimeline.delayNextStep(delay);
        context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
        visitDslNode(this, ast, context);
        const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
        if (timelines.length && finalStyles.size) {
          let lastRootTimeline;
          for (let i3 = timelines.length - 1; i3 >= 0; i3--) {
            const timeline = timelines[i3];
            if (timeline.element === rootElement) {
              lastRootTimeline = timeline;
              break;
            }
          }
          if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
            lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
          }
        }
        return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
      }
      visitTrigger(ast, context) {
      }
      visitState(ast, context) {
      }
      visitTransition(ast, context) {
      }
      visitAnimateChild(ast, context) {
        const elementInstructions = context.subInstructions.get(context.element);
        if (elementInstructions) {
          const innerContext = context.createSubContext(ast.options);
          const startTime = context.currentTimeline.currentTime;
          const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
          if (startTime != endTime) {
            context.transformIntoNewTimeline(endTime);
          }
        }
        context.previousNode = ast;
      }
      visitAnimateRef(ast, context) {
        const innerContext = context.createSubContext(ast.options);
        innerContext.transformIntoNewTimeline();
        this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
        this.visitReference(ast.animation, innerContext);
        context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
        context.previousNode = ast;
      }
      _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
        for (const animationRefOptions of animationsRefsOptions) {
          const animationDelay = animationRefOptions?.delay;
          if (animationDelay) {
            const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
            innerContext.delayNextStep(animationDelayValue);
          }
        }
      }
      _visitSubInstructions(instructions, context, options) {
        const startTime = context.currentTimeline.currentTime;
        let furthestTime = startTime;
        const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
        const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
        if (duration !== 0) {
          instructions.forEach((instruction) => {
            const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
            furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
          });
        }
        return furthestTime;
      }
      visitReference(ast, context) {
        context.updateOptions(ast.options, true);
        visitDslNode(this, ast.animation, context);
        context.previousNode = ast;
      }
      visitSequence(ast, context) {
        const subContextCount = context.subContextCount;
        let ctx = context;
        const options = ast.options;
        if (options && (options.params || options.delay)) {
          ctx = context.createSubContext(options);
          ctx.transformIntoNewTimeline();
          if (options.delay != null) {
            if (ctx.previousNode.type == AnimationMetadataType.Style) {
              ctx.currentTimeline.snapshotCurrentStyles();
              ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
            }
            const delay = resolveTimingValue(options.delay);
            ctx.delayNextStep(delay);
          }
        }
        if (ast.steps.length) {
          ast.steps.forEach((s4) => visitDslNode(this, s4, ctx));
          ctx.currentTimeline.applyStylesToKeyframe();
          if (ctx.subContextCount > subContextCount) {
            ctx.transformIntoNewTimeline();
          }
        }
        context.previousNode = ast;
      }
      visitGroup(ast, context) {
        const innerTimelines = [];
        let furthestTime = context.currentTimeline.currentTime;
        const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
        ast.steps.forEach((s4) => {
          const innerContext = context.createSubContext(ast.options);
          if (delay) {
            innerContext.delayNextStep(delay);
          }
          visitDslNode(this, s4, innerContext);
          furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
          innerTimelines.push(innerContext.currentTimeline);
        });
        innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
        context.transformIntoNewTimeline(furthestTime);
        context.previousNode = ast;
      }
      _visitTiming(ast, context) {
        if (ast.dynamic) {
          const strValue = ast.strValue;
          const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
          return resolveTiming(timingValue, context.errors);
        } else {
          return { duration: ast.duration, delay: ast.delay, easing: ast.easing };
        }
      }
      visitAnimate(ast, context) {
        const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
        const timeline = context.currentTimeline;
        if (timings.delay) {
          context.incrementTime(timings.delay);
          timeline.snapshotCurrentStyles();
        }
        const style11 = ast.style;
        if (style11.type == AnimationMetadataType.Keyframes) {
          this.visitKeyframes(style11, context);
        } else {
          context.incrementTime(timings.duration);
          this.visitStyle(style11, context);
          timeline.applyStylesToKeyframe();
        }
        context.currentAnimateTimings = null;
        context.previousNode = ast;
      }
      visitStyle(ast, context) {
        const timeline = context.currentTimeline;
        const timings = context.currentAnimateTimings;
        if (!timings && timeline.hasCurrentStyleProperties()) {
          timeline.forwardFrame();
        }
        const easing = timings && timings.easing || ast.easing;
        if (ast.isEmptyStep) {
          timeline.applyEmptyStep(easing);
        } else {
          timeline.setStyles(ast.styles, easing, context.errors, context.options);
        }
        context.previousNode = ast;
      }
      visitKeyframes(ast, context) {
        const currentAnimateTimings = context.currentAnimateTimings;
        const startTime = context.currentTimeline.duration;
        const duration = currentAnimateTimings.duration;
        const innerContext = context.createSubContext();
        const innerTimeline = innerContext.currentTimeline;
        innerTimeline.easing = currentAnimateTimings.easing;
        ast.styles.forEach((step) => {
          const offset = step.offset || 0;
          innerTimeline.forwardTime(offset * duration);
          innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
          innerTimeline.applyStylesToKeyframe();
        });
        context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
        context.transformIntoNewTimeline(startTime + duration);
        context.previousNode = ast;
      }
      visitQuery(ast, context) {
        const startTime = context.currentTimeline.currentTime;
        const options = ast.options || {};
        const delay = options.delay ? resolveTimingValue(options.delay) : 0;
        if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
          context.currentTimeline.snapshotCurrentStyles();
          context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        let furthestTime = startTime;
        const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
        context.currentQueryTotal = elms.length;
        let sameElementTimeline = null;
        elms.forEach((element, i3) => {
          context.currentQueryIndex = i3;
          const innerContext = context.createSubContext(ast.options, element);
          if (delay) {
            innerContext.delayNextStep(delay);
          }
          if (element === context.element) {
            sameElementTimeline = innerContext.currentTimeline;
          }
          visitDslNode(this, ast.animation, innerContext);
          innerContext.currentTimeline.applyStylesToKeyframe();
          const endTime = innerContext.currentTimeline.currentTime;
          furthestTime = Math.max(furthestTime, endTime);
        });
        context.currentQueryIndex = 0;
        context.currentQueryTotal = 0;
        context.transformIntoNewTimeline(furthestTime);
        if (sameElementTimeline) {
          context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
          context.currentTimeline.snapshotCurrentStyles();
        }
        context.previousNode = ast;
      }
      visitStagger(ast, context) {
        const parentContext = context.parentContext;
        const tl = context.currentTimeline;
        const timings = ast.timings;
        const duration = Math.abs(timings.duration);
        const maxTime = duration * (context.currentQueryTotal - 1);
        let delay = duration * context.currentQueryIndex;
        let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
        switch (staggerTransformer) {
          case "reverse":
            delay = maxTime - delay;
            break;
          case "full":
            delay = parentContext.currentStaggerTime;
            break;
        }
        const timeline = context.currentTimeline;
        if (delay) {
          timeline.delayNextStep(delay);
        }
        const startingTime = timeline.currentTime;
        visitDslNode(this, ast.animation, context);
        context.previousNode = ast;
        parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
      }
    };
    DEFAULT_NOOP_PREVIOUS_NODE = {};
    AnimationTimelineContext = class _AnimationTimelineContext {
      _driver;
      element;
      subInstructions;
      _enterClassName;
      _leaveClassName;
      errors;
      timelines;
      parentContext = null;
      currentTimeline;
      currentAnimateTimings = null;
      previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
      subContextCount = 0;
      options = {};
      currentQueryIndex = 0;
      currentQueryTotal = 0;
      currentStaggerTime = 0;
      constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
        this._driver = _driver;
        this.element = element;
        this.subInstructions = subInstructions;
        this._enterClassName = _enterClassName;
        this._leaveClassName = _leaveClassName;
        this.errors = errors;
        this.timelines = timelines;
        this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
        timelines.push(this.currentTimeline);
      }
      get params() {
        return this.options.params;
      }
      updateOptions(options, skipIfExists) {
        if (!options)
          return;
        const newOptions = options;
        let optionsToUpdate = this.options;
        if (newOptions.duration != null) {
          optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
        }
        if (newOptions.delay != null) {
          optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
        }
        const newParams = newOptions.params;
        if (newParams) {
          let paramsToUpdate = optionsToUpdate.params;
          if (!paramsToUpdate) {
            paramsToUpdate = this.options.params = {};
          }
          Object.keys(newParams).forEach((name) => {
            if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
              paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
            }
          });
        }
      }
      _copyOptions() {
        const options = {};
        if (this.options) {
          const oldParams = this.options.params;
          if (oldParams) {
            const params = options["params"] = {};
            Object.keys(oldParams).forEach((name) => {
              params[name] = oldParams[name];
            });
          }
        }
        return options;
      }
      createSubContext(options = null, element, newTime) {
        const target = element || this.element;
        const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
        context.previousNode = this.previousNode;
        context.currentAnimateTimings = this.currentAnimateTimings;
        context.options = this._copyOptions();
        context.updateOptions(options);
        context.currentQueryIndex = this.currentQueryIndex;
        context.currentQueryTotal = this.currentQueryTotal;
        context.parentContext = this;
        this.subContextCount++;
        return context;
      }
      transformIntoNewTimeline(newTime) {
        this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
        this.timelines.push(this.currentTimeline);
        return this.currentTimeline;
      }
      appendInstructionToTimeline(instruction, duration, delay) {
        const updatedTimings = {
          duration: duration != null ? duration : instruction.duration,
          delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
          easing: ""
        };
        const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
        this.timelines.push(builder);
        return updatedTimings;
      }
      incrementTime(time) {
        this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
      }
      delayNextStep(delay) {
        if (delay > 0) {
          this.currentTimeline.delayNextStep(delay);
        }
      }
      invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
        let results = [];
        if (includeSelf) {
          results.push(this.element);
        }
        if (selector.length > 0) {
          selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
          selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
          const multi = limit != 1;
          let elements = this._driver.query(this.element, selector, multi);
          if (limit !== 0) {
            elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
          }
          results.push(...elements);
        }
        if (!optional && results.length == 0) {
          errors.push(invalidQuery(originalSelector));
        }
        return results;
      }
    };
    TimelineBuilder = class _TimelineBuilder {
      _driver;
      element;
      startTime;
      _elementTimelineStylesLookup;
      duration = 0;
      easing = null;
      _previousKeyframe = /* @__PURE__ */ new Map();
      _currentKeyframe = /* @__PURE__ */ new Map();
      _keyframes = /* @__PURE__ */ new Map();
      _styleSummary = /* @__PURE__ */ new Map();
      _localTimelineStyles = /* @__PURE__ */ new Map();
      _globalTimelineStyles;
      _pendingStyles = /* @__PURE__ */ new Map();
      _backFill = /* @__PURE__ */ new Map();
      _currentEmptyStepKeyframe = null;
      constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
        this._driver = _driver;
        this.element = element;
        this.startTime = startTime;
        this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
        if (!this._elementTimelineStylesLookup) {
          this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
        }
        this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
        if (!this._globalTimelineStyles) {
          this._globalTimelineStyles = this._localTimelineStyles;
          this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
        }
        this._loadKeyframe();
      }
      containsAnimation() {
        switch (this._keyframes.size) {
          case 0:
            return false;
          case 1:
            return this.hasCurrentStyleProperties();
          default:
            return true;
        }
      }
      hasCurrentStyleProperties() {
        return this._currentKeyframe.size > 0;
      }
      get currentTime() {
        return this.startTime + this.duration;
      }
      delayNextStep(delay) {
        const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
        if (this.duration || hasPreStyleStep) {
          this.forwardTime(this.currentTime + delay);
          if (hasPreStyleStep) {
            this.snapshotCurrentStyles();
          }
        } else {
          this.startTime += delay;
        }
      }
      fork(element, currentTime) {
        this.applyStylesToKeyframe();
        return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
      }
      _loadKeyframe() {
        if (this._currentKeyframe) {
          this._previousKeyframe = this._currentKeyframe;
        }
        this._currentKeyframe = this._keyframes.get(this.duration);
        if (!this._currentKeyframe) {
          this._currentKeyframe = /* @__PURE__ */ new Map();
          this._keyframes.set(this.duration, this._currentKeyframe);
        }
      }
      forwardFrame() {
        this.duration += ONE_FRAME_IN_MILLISECONDS;
        this._loadKeyframe();
      }
      forwardTime(time) {
        this.applyStylesToKeyframe();
        this.duration = time;
        this._loadKeyframe();
      }
      _updateStyle(prop, value) {
        this._localTimelineStyles.set(prop, value);
        this._globalTimelineStyles.set(prop, value);
        this._styleSummary.set(prop, { time: this.currentTime, value });
      }
      allowOnlyTimelineStyles() {
        return this._currentEmptyStepKeyframe !== this._currentKeyframe;
      }
      applyEmptyStep(easing) {
        if (easing) {
          this._previousKeyframe.set("easing", easing);
        }
        for (let [prop, value] of this._globalTimelineStyles) {
          this._backFill.set(prop, value || AUTO_STYLE);
          this._currentKeyframe.set(prop, AUTO_STYLE);
        }
        this._currentEmptyStepKeyframe = this._currentKeyframe;
      }
      setStyles(input2, easing, errors, options) {
        if (easing) {
          this._previousKeyframe.set("easing", easing);
        }
        const params = options && options.params || {};
        const styles = flattenStyles(input2, this._globalTimelineStyles);
        for (let [prop, value] of styles) {
          const val = interpolateParams(value, params, errors);
          this._pendingStyles.set(prop, val);
          if (!this._localTimelineStyles.has(prop)) {
            this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
          }
          this._updateStyle(prop, val);
        }
      }
      applyStylesToKeyframe() {
        if (this._pendingStyles.size == 0)
          return;
        this._pendingStyles.forEach((val, prop) => {
          this._currentKeyframe.set(prop, val);
        });
        this._pendingStyles.clear();
        this._localTimelineStyles.forEach((val, prop) => {
          if (!this._currentKeyframe.has(prop)) {
            this._currentKeyframe.set(prop, val);
          }
        });
      }
      snapshotCurrentStyles() {
        for (let [prop, val] of this._localTimelineStyles) {
          this._pendingStyles.set(prop, val);
          this._updateStyle(prop, val);
        }
      }
      getFinalKeyframe() {
        return this._keyframes.get(this.duration);
      }
      get properties() {
        const properties = [];
        for (let prop in this._currentKeyframe) {
          properties.push(prop);
        }
        return properties;
      }
      mergeTimelineCollectedStyles(timeline) {
        timeline._styleSummary.forEach((details1, prop) => {
          const details0 = this._styleSummary.get(prop);
          if (!details0 || details1.time > details0.time) {
            this._updateStyle(prop, details1.value);
          }
        });
      }
      buildKeyframes() {
        this.applyStylesToKeyframe();
        const preStyleProps = /* @__PURE__ */ new Set();
        const postStyleProps = /* @__PURE__ */ new Set();
        const isEmpty = this._keyframes.size === 1 && this.duration === 0;
        let finalKeyframes = [];
        this._keyframes.forEach((keyframe, time) => {
          const finalKeyframe = new Map([...this._backFill, ...keyframe]);
          finalKeyframe.forEach((value, prop) => {
            if (value === \u0275PRE_STYLE) {
              preStyleProps.add(prop);
            } else if (value === AUTO_STYLE) {
              postStyleProps.add(prop);
            }
          });
          if (!isEmpty) {
            finalKeyframe.set("offset", time / this.duration);
          }
          finalKeyframes.push(finalKeyframe);
        });
        const preProps = [...preStyleProps.values()];
        const postProps = [...postStyleProps.values()];
        if (isEmpty) {
          const kf0 = finalKeyframes[0];
          const kf1 = new Map(kf0);
          kf0.set("offset", 0);
          kf1.set("offset", 1);
          finalKeyframes = [kf0, kf1];
        }
        return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
      }
    };
    SubTimelineBuilder = class extends TimelineBuilder {
      keyframes;
      preStyleProps;
      postStyleProps;
      _stretchStartingKeyframe;
      timings;
      constructor(driver, element, keyframes2, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
        super(driver, element, timings.delay);
        this.keyframes = keyframes2;
        this.preStyleProps = preStyleProps;
        this.postStyleProps = postStyleProps;
        this._stretchStartingKeyframe = _stretchStartingKeyframe;
        this.timings = { duration: timings.duration, delay: timings.delay, easing: timings.easing };
      }
      containsAnimation() {
        return this.keyframes.length > 1;
      }
      buildKeyframes() {
        let keyframes2 = this.keyframes;
        let { delay, duration, easing } = this.timings;
        if (this._stretchStartingKeyframe && delay) {
          const newKeyframes = [];
          const totalTime = duration + delay;
          const startingGap = delay / totalTime;
          const newFirstKeyframe = new Map(keyframes2[0]);
          newFirstKeyframe.set("offset", 0);
          newKeyframes.push(newFirstKeyframe);
          const oldFirstKeyframe = new Map(keyframes2[0]);
          oldFirstKeyframe.set("offset", roundOffset(startingGap));
          newKeyframes.push(oldFirstKeyframe);
          const limit = keyframes2.length - 1;
          for (let i3 = 1; i3 <= limit; i3++) {
            let kf = new Map(keyframes2[i3]);
            const oldOffset = kf.get("offset");
            const timeAtKeyframe = delay + oldOffset * duration;
            kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
            newKeyframes.push(kf);
          }
          duration = totalTime;
          delay = 0;
          easing = "";
          keyframes2 = newKeyframes;
        }
        return createTimelineInstruction(this.element, keyframes2, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
      }
    };
    EMPTY_OBJECT = {};
    AnimationTransitionFactory = class {
      _triggerName;
      ast;
      _stateStyles;
      constructor(_triggerName, ast, _stateStyles) {
        this._triggerName = _triggerName;
        this.ast = ast;
        this._stateStyles = _stateStyles;
      }
      match(currentState, nextState, element, params) {
        return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
      }
      buildStyles(stateName, params, errors) {
        let styler = this._stateStyles.get("*");
        if (stateName !== void 0) {
          styler = this._stateStyles.get(stateName?.toString()) || styler;
        }
        return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
      }
      build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
        const errors = [];
        const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
        const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
        const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
        const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
        const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
        const queriedElements = /* @__PURE__ */ new Set();
        const preStyleMap = /* @__PURE__ */ new Map();
        const postStyleMap = /* @__PURE__ */ new Map();
        const isRemoval = nextState === "void";
        const animationOptions = {
          params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
          delay: this.ast.options?.delay
        };
        const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
        let totalTime = 0;
        timelines.forEach((tl) => {
          totalTime = Math.max(tl.duration + tl.delay, totalTime);
        });
        if (errors.length) {
          return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
        }
        timelines.forEach((tl) => {
          const elm = tl.element;
          const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
          tl.preStyleProps.forEach((prop) => preProps.add(prop));
          const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
          tl.postStyleProps.forEach((prop) => postProps.add(prop));
          if (elm !== element) {
            queriedElements.add(elm);
          }
        });
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
        }
        return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
      }
    };
    AnimationStateStyles = class {
      styles;
      defaultParams;
      normalizer;
      constructor(styles, defaultParams, normalizer) {
        this.styles = styles;
        this.defaultParams = defaultParams;
        this.normalizer = normalizer;
      }
      buildStyles(params, errors) {
        const finalStyles = /* @__PURE__ */ new Map();
        const combinedParams = applyParamDefaults(params, this.defaultParams);
        this.styles.styles.forEach((value) => {
          if (typeof value !== "string") {
            value.forEach((val, prop) => {
              if (val) {
                val = interpolateParams(val, combinedParams, errors);
              }
              const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
              val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
              finalStyles.set(prop, val);
            });
          }
        });
        return finalStyles;
      }
    };
    AnimationTrigger = class {
      name;
      ast;
      _normalizer;
      transitionFactories = [];
      fallbackTransition;
      states = /* @__PURE__ */ new Map();
      constructor(name, ast, _normalizer) {
        this.name = name;
        this.ast = ast;
        this._normalizer = _normalizer;
        ast.states.forEach((ast2) => {
          const defaultParams = ast2.options && ast2.options.params || {};
          this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
        });
        balanceProperties(this.states, "true", "1");
        balanceProperties(this.states, "false", "0");
        ast.transitions.forEach((ast2) => {
          this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
        });
        this.fallbackTransition = createFallbackTransition(name, this.states);
      }
      get containsQueries() {
        return this.ast.queryCount > 0;
      }
      matchTransition(currentState, nextState, element, params) {
        const entry = this.transitionFactories.find((f2) => f2.match(currentState, nextState, element, params));
        return entry || null;
      }
      matchStyles(currentState, params, errors) {
        return this.fallbackTransition.buildStyles(currentState, params, errors);
      }
    };
    EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
    TimelineAnimationEngine = class {
      bodyNode;
      _driver;
      _normalizer;
      _animations = /* @__PURE__ */ new Map();
      _playersById = /* @__PURE__ */ new Map();
      players = [];
      constructor(bodyNode, _driver, _normalizer) {
        this.bodyNode = bodyNode;
        this._driver = _driver;
        this._normalizer = _normalizer;
      }
      register(id, metadata) {
        const errors = [];
        const warnings = [];
        const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
        if (errors.length) {
          throw registerFailed(errors);
        } else {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            if (warnings.length) {
              warnRegister(warnings);
            }
          }
          this._animations.set(id, ast);
        }
      }
      _buildPlayer(i3, preStyles, postStyles) {
        const element = i3.element;
        const keyframes2 = normalizeKeyframes$1(this._normalizer, i3.keyframes, preStyles, postStyles);
        return this._driver.animate(element, keyframes2, i3.duration, i3.delay, i3.easing, [], true);
      }
      create(id, element, options = {}) {
        const errors = [];
        const ast = this._animations.get(id);
        let instructions;
        const autoStylesMap = /* @__PURE__ */ new Map();
        if (ast) {
          instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
          instructions.forEach((inst) => {
            const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
            inst.postStyleProps.forEach((prop) => styles.set(prop, null));
          });
        } else {
          errors.push(missingOrDestroyedAnimation());
          instructions = [];
        }
        if (errors.length) {
          throw createAnimationFailed(errors);
        }
        autoStylesMap.forEach((styles, element2) => {
          styles.forEach((_, prop) => {
            styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
          });
        });
        const players = instructions.map((i3) => {
          const styles = autoStylesMap.get(i3.element);
          return this._buildPlayer(i3, /* @__PURE__ */ new Map(), styles);
        });
        const player = optimizeGroupPlayer(players);
        this._playersById.set(id, player);
        player.onDestroy(() => this.destroy(id));
        this.players.push(player);
        return player;
      }
      destroy(id) {
        const player = this._getPlayer(id);
        player.destroy();
        this._playersById.delete(id);
        const index = this.players.indexOf(player);
        if (index >= 0) {
          this.players.splice(index, 1);
        }
      }
      _getPlayer(id) {
        const player = this._playersById.get(id);
        if (!player) {
          throw missingPlayer(id);
        }
        return player;
      }
      listen(id, element, eventName, callback) {
        const baseEvent = makeAnimationEvent(element, "", "", "");
        listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
        return () => {
        };
      }
      command(id, element, command, args) {
        if (command == "register") {
          this.register(id, args[0]);
          return;
        }
        if (command == "create") {
          const options = args[0] || {};
          this.create(id, element, options);
          return;
        }
        const player = this._getPlayer(id);
        switch (command) {
          case "play":
            player.play();
            break;
          case "pause":
            player.pause();
            break;
          case "reset":
            player.reset();
            break;
          case "restart":
            player.restart();
            break;
          case "finish":
            player.finish();
            break;
          case "init":
            player.init();
            break;
          case "setPosition":
            player.setPosition(parseFloat(args[0]));
            break;
          case "destroy":
            this.destroy(id);
            break;
        }
      }
    };
    QUEUED_CLASSNAME = "ng-animate-queued";
    QUEUED_SELECTOR = ".ng-animate-queued";
    DISABLED_CLASSNAME = "ng-animate-disabled";
    DISABLED_SELECTOR = ".ng-animate-disabled";
    STAR_CLASSNAME = "ng-star-inserted";
    STAR_SELECTOR = ".ng-star-inserted";
    EMPTY_PLAYER_ARRAY = [];
    NULL_REMOVAL_STATE = {
      namespaceId: "",
      setForRemoval: false,
      setForMove: false,
      hasAnimation: false,
      removedBeforeQueried: false
    };
    NULL_REMOVED_QUERIED_STATE = {
      namespaceId: "",
      setForMove: false,
      setForRemoval: false,
      hasAnimation: false,
      removedBeforeQueried: true
    };
    REMOVAL_FLAG = "__ng_removed";
    StateValue = class {
      namespaceId;
      value;
      options;
      get params() {
        return this.options.params;
      }
      constructor(input2, namespaceId = "") {
        this.namespaceId = namespaceId;
        const isObj = input2 && input2.hasOwnProperty("value");
        const value = isObj ? input2["value"] : input2;
        this.value = normalizeTriggerValue(value);
        if (isObj) {
          const _a = input2, { value: value2 } = _a, options = __objRest(_a, ["value"]);
          this.options = options;
        } else {
          this.options = {};
        }
        if (!this.options.params) {
          this.options.params = {};
        }
      }
      absorbOptions(options) {
        const newParams = options.params;
        if (newParams) {
          const oldParams = this.options.params;
          Object.keys(newParams).forEach((prop) => {
            if (oldParams[prop] == null) {
              oldParams[prop] = newParams[prop];
            }
          });
        }
      }
    };
    VOID_VALUE = "void";
    DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
    AnimationTransitionNamespace = class {
      id;
      hostElement;
      _engine;
      players = [];
      _triggers = /* @__PURE__ */ new Map();
      _queue = [];
      _elementListeners = /* @__PURE__ */ new Map();
      _hostClassName;
      constructor(id, hostElement, _engine) {
        this.id = id;
        this.hostElement = hostElement;
        this._engine = _engine;
        this._hostClassName = "ng-tns-" + id;
        addClass(hostElement, this._hostClassName);
      }
      listen(element, name, phase, callback) {
        if (!this._triggers.has(name)) {
          throw missingTrigger(phase, name);
        }
        if (phase == null || phase.length == 0) {
          throw missingEvent(name);
        }
        if (!isTriggerEventValid(phase)) {
          throw unsupportedTriggerEvent(phase, name);
        }
        const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
        const data = { name, phase, callback };
        listeners.push(data);
        const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
        if (!triggersWithStates.has(name)) {
          addClass(element, NG_TRIGGER_CLASSNAME);
          addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
          triggersWithStates.set(name, DEFAULT_STATE_VALUE);
        }
        return () => {
          this._engine.afterFlush(() => {
            const index = listeners.indexOf(data);
            if (index >= 0) {
              listeners.splice(index, 1);
            }
            if (!this._triggers.has(name)) {
              triggersWithStates.delete(name);
            }
          });
        };
      }
      register(name, ast) {
        if (this._triggers.has(name)) {
          return false;
        } else {
          this._triggers.set(name, ast);
          return true;
        }
      }
      _getTrigger(name) {
        const trigger2 = this._triggers.get(name);
        if (!trigger2) {
          throw unregisteredTrigger(name);
        }
        return trigger2;
      }
      trigger(element, triggerName, value, defaultToFallback = true) {
        const trigger2 = this._getTrigger(triggerName);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        let triggersWithStates = this._engine.statesByElement.get(element);
        if (!triggersWithStates) {
          addClass(element, NG_TRIGGER_CLASSNAME);
          addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
          this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
        }
        let fromState = triggersWithStates.get(triggerName);
        const toState = new StateValue(value, this.id);
        const isObj = value && value.hasOwnProperty("value");
        if (!isObj && fromState) {
          toState.absorbOptions(fromState.options);
        }
        triggersWithStates.set(triggerName, toState);
        if (!fromState) {
          fromState = DEFAULT_STATE_VALUE;
        }
        const isRemoval = toState.value === VOID_VALUE;
        if (!isRemoval && fromState.value === toState.value) {
          if (!objEquals(fromState.params, toState.params)) {
            const errors = [];
            const fromStyles = trigger2.matchStyles(fromState.value, fromState.params, errors);
            const toStyles = trigger2.matchStyles(toState.value, toState.params, errors);
            if (errors.length) {
              this._engine.reportError(errors);
            } else {
              this._engine.afterFlush(() => {
                eraseStyles(element, fromStyles);
                setStyles(element, toStyles);
              });
            }
          }
          return;
        }
        const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
        playersOnElement.forEach((player2) => {
          if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
            player2.destroy();
          }
        });
        let transition2 = trigger2.matchTransition(fromState.value, toState.value, element, toState.params);
        let isFallbackTransition = false;
        if (!transition2) {
          if (!defaultToFallback)
            return;
          transition2 = trigger2.fallbackTransition;
          isFallbackTransition = true;
        }
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition: transition2,
          fromState,
          toState,
          player,
          isFallbackTransition
        });
        if (!isFallbackTransition) {
          addClass(element, QUEUED_CLASSNAME);
          player.onStart(() => {
            removeClass(element, QUEUED_CLASSNAME);
          });
        }
        player.onDone(() => {
          let index = this.players.indexOf(player);
          if (index >= 0) {
            this.players.splice(index, 1);
          }
          const players = this._engine.playersByElement.get(element);
          if (players) {
            let index2 = players.indexOf(player);
            if (index2 >= 0) {
              players.splice(index2, 1);
            }
          }
        });
        this.players.push(player);
        playersOnElement.push(player);
        return player;
      }
      deregister(name) {
        this._triggers.delete(name);
        this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
        this._elementListeners.forEach((listeners, element) => {
          this._elementListeners.set(element, listeners.filter((entry) => {
            return entry.name != name;
          }));
        });
      }
      clearElementCache(element) {
        this._engine.statesByElement.delete(element);
        this._elementListeners.delete(element);
        const elementPlayers = this._engine.playersByElement.get(element);
        if (elementPlayers) {
          elementPlayers.forEach((player) => player.destroy());
          this._engine.playersByElement.delete(element);
        }
      }
      _signalRemovalForInnerTriggers(rootElement, context) {
        const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
        elements.forEach((elm) => {
          if (elm[REMOVAL_FLAG])
            return;
          const namespaces = this._engine.fetchNamespacesByElement(elm);
          if (namespaces.size) {
            namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
          } else {
            this.clearElementCache(elm);
          }
        });
        this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
      }
      triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
        const triggerStates = this._engine.statesByElement.get(element);
        const previousTriggersValues = /* @__PURE__ */ new Map();
        if (triggerStates) {
          const players = [];
          triggerStates.forEach((state2, triggerName) => {
            previousTriggersValues.set(triggerName, state2.value);
            if (this._triggers.has(triggerName)) {
              const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
              if (player) {
                players.push(player);
              }
            }
          });
          if (players.length) {
            this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
            if (destroyAfterComplete) {
              optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
            }
            return true;
          }
        }
        return false;
      }
      prepareLeaveAnimationListeners(element) {
        const listeners = this._elementListeners.get(element);
        const elementStates = this._engine.statesByElement.get(element);
        if (listeners && elementStates) {
          const visitedTriggers = /* @__PURE__ */ new Set();
          listeners.forEach((listener) => {
            const triggerName = listener.name;
            if (visitedTriggers.has(triggerName))
              return;
            visitedTriggers.add(triggerName);
            const trigger2 = this._triggers.get(triggerName);
            const transition2 = trigger2.fallbackTransition;
            const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
            const toState = new StateValue(VOID_VALUE);
            const player = new TransitionAnimationPlayer(this.id, triggerName, element);
            this._engine.totalQueuedPlayers++;
            this._queue.push({
              element,
              triggerName,
              transition: transition2,
              fromState,
              toState,
              player,
              isFallbackTransition: true
            });
          });
        }
      }
      removeNode(element, context) {
        const engine = this._engine;
        if (element.childElementCount) {
          this._signalRemovalForInnerTriggers(element, context);
        }
        if (this.triggerLeaveAnimation(element, context, true))
          return;
        let containsPotentialParentTransition = false;
        if (engine.totalAnimations) {
          const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
          if (currentPlayers && currentPlayers.length) {
            containsPotentialParentTransition = true;
          } else {
            let parent = element;
            while (parent = parent.parentNode) {
              const triggers = engine.statesByElement.get(parent);
              if (triggers) {
                containsPotentialParentTransition = true;
                break;
              }
            }
          }
        }
        this.prepareLeaveAnimationListeners(element);
        if (containsPotentialParentTransition) {
          engine.markElementAsRemoved(this.id, element, false, context);
        } else {
          const removalFlag = element[REMOVAL_FLAG];
          if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
            engine.afterFlush(() => this.clearElementCache(element));
            engine.destroyInnerAnimations(element);
            engine._onRemovalComplete(element, context);
          }
        }
      }
      insertNode(element, parent) {
        addClass(element, this._hostClassName);
      }
      drainQueuedTransitions(microtaskId) {
        const instructions = [];
        this._queue.forEach((entry) => {
          const player = entry.player;
          if (player.destroyed)
            return;
          const element = entry.element;
          const listeners = this._elementListeners.get(element);
          if (listeners) {
            listeners.forEach((listener) => {
              if (listener.name == entry.triggerName) {
                const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
                baseEvent["_data"] = microtaskId;
                listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
              }
            });
          }
          if (player.markedForDestroy) {
            this._engine.afterFlush(() => {
              player.destroy();
            });
          } else {
            instructions.push(entry);
          }
        });
        this._queue = [];
        return instructions.sort((a2, b4) => {
          const d0 = a2.transition.ast.depCount;
          const d1 = b4.transition.ast.depCount;
          if (d0 == 0 || d1 == 0) {
            return d0 - d1;
          }
          return this._engine.driver.containsElement(a2.element, b4.element) ? 1 : -1;
        });
      }
      destroy(context) {
        this.players.forEach((p3) => p3.destroy());
        this._signalRemovalForInnerTriggers(this.hostElement, context);
      }
    };
    TransitionAnimationEngine = class {
      bodyNode;
      driver;
      _normalizer;
      players = [];
      newHostElements = /* @__PURE__ */ new Map();
      playersByElement = /* @__PURE__ */ new Map();
      playersByQueriedElement = /* @__PURE__ */ new Map();
      statesByElement = /* @__PURE__ */ new Map();
      disabledNodes = /* @__PURE__ */ new Set();
      totalAnimations = 0;
      totalQueuedPlayers = 0;
      _namespaceLookup = {};
      _namespaceList = [];
      _flushFns = [];
      _whenQuietFns = [];
      namespacesByHostElement = /* @__PURE__ */ new Map();
      collectedEnterElements = [];
      collectedLeaveElements = [];
      // this method is designed to be overridden by the code that uses this engine
      onRemovalComplete = (element, context) => {
      };
      /** @internal */
      _onRemovalComplete(element, context) {
        this.onRemovalComplete(element, context);
      }
      constructor(bodyNode, driver, _normalizer) {
        this.bodyNode = bodyNode;
        this.driver = driver;
        this._normalizer = _normalizer;
      }
      get queuedPlayers() {
        const players = [];
        this._namespaceList.forEach((ns) => {
          ns.players.forEach((player) => {
            if (player.queued) {
              players.push(player);
            }
          });
        });
        return players;
      }
      createNamespace(namespaceId, hostElement) {
        const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
        if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
          this._balanceNamespaceList(ns, hostElement);
        } else {
          this.newHostElements.set(hostElement, ns);
          this.collectEnterElement(hostElement);
        }
        return this._namespaceLookup[namespaceId] = ns;
      }
      _balanceNamespaceList(ns, hostElement) {
        const namespaceList = this._namespaceList;
        const namespacesByHostElement = this.namespacesByHostElement;
        const limit = namespaceList.length - 1;
        if (limit >= 0) {
          let found = false;
          let ancestor = this.driver.getParentElement(hostElement);
          while (ancestor) {
            const ancestorNs = namespacesByHostElement.get(ancestor);
            if (ancestorNs) {
              const index = namespaceList.indexOf(ancestorNs);
              namespaceList.splice(index + 1, 0, ns);
              found = true;
              break;
            }
            ancestor = this.driver.getParentElement(ancestor);
          }
          if (!found) {
            namespaceList.unshift(ns);
          }
        } else {
          namespaceList.push(ns);
        }
        namespacesByHostElement.set(hostElement, ns);
        return ns;
      }
      register(namespaceId, hostElement) {
        let ns = this._namespaceLookup[namespaceId];
        if (!ns) {
          ns = this.createNamespace(namespaceId, hostElement);
        }
        return ns;
      }
      registerTrigger(namespaceId, name, trigger2) {
        let ns = this._namespaceLookup[namespaceId];
        if (ns && ns.register(name, trigger2)) {
          this.totalAnimations++;
        }
      }
      destroy(namespaceId, context) {
        if (!namespaceId)
          return;
        this.afterFlush(() => {
        });
        this.afterFlushAnimationsDone(() => {
          const ns = this._fetchNamespace(namespaceId);
          this.namespacesByHostElement.delete(ns.hostElement);
          const index = this._namespaceList.indexOf(ns);
          if (index >= 0) {
            this._namespaceList.splice(index, 1);
          }
          ns.destroy(context);
          delete this._namespaceLookup[namespaceId];
        });
      }
      _fetchNamespace(id) {
        return this._namespaceLookup[id];
      }
      fetchNamespacesByElement(element) {
        const namespaces = /* @__PURE__ */ new Set();
        const elementStates = this.statesByElement.get(element);
        if (elementStates) {
          for (let stateValue of elementStates.values()) {
            if (stateValue.namespaceId) {
              const ns = this._fetchNamespace(stateValue.namespaceId);
              if (ns) {
                namespaces.add(ns);
              }
            }
          }
        }
        return namespaces;
      }
      trigger(namespaceId, element, name, value) {
        if (isElementNode(element)) {
          const ns = this._fetchNamespace(namespaceId);
          if (ns) {
            ns.trigger(element, name, value);
            return true;
          }
        }
        return false;
      }
      insertNode(namespaceId, element, parent, insertBefore) {
        if (!isElementNode(element))
          return;
        const details = element[REMOVAL_FLAG];
        if (details && details.setForRemoval) {
          details.setForRemoval = false;
          details.setForMove = true;
          const index = this.collectedLeaveElements.indexOf(element);
          if (index >= 0) {
            this.collectedLeaveElements.splice(index, 1);
          }
        }
        if (namespaceId) {
          const ns = this._fetchNamespace(namespaceId);
          if (ns) {
            ns.insertNode(element, parent);
          }
        }
        if (insertBefore) {
          this.collectEnterElement(element);
        }
      }
      collectEnterElement(element) {
        this.collectedEnterElements.push(element);
      }
      markElementAsDisabled(element, value) {
        if (value) {
          if (!this.disabledNodes.has(element)) {
            this.disabledNodes.add(element);
            addClass(element, DISABLED_CLASSNAME);
          }
        } else if (this.disabledNodes.has(element)) {
          this.disabledNodes.delete(element);
          removeClass(element, DISABLED_CLASSNAME);
        }
      }
      removeNode(namespaceId, element, context) {
        if (isElementNode(element)) {
          const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
          if (ns) {
            ns.removeNode(element, context);
          } else {
            this.markElementAsRemoved(namespaceId, element, false, context);
          }
          const hostNS = this.namespacesByHostElement.get(element);
          if (hostNS && hostNS.id !== namespaceId) {
            hostNS.removeNode(element, context);
          }
        } else {
          this._onRemovalComplete(element, context);
        }
      }
      markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
        this.collectedLeaveElements.push(element);
        element[REMOVAL_FLAG] = {
          namespaceId,
          setForRemoval: context,
          hasAnimation,
          removedBeforeQueried: false,
          previousTriggersValues
        };
      }
      listen(namespaceId, element, name, phase, callback) {
        if (isElementNode(element)) {
          return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
        }
        return () => {
        };
      }
      _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
        return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
      }
      destroyInnerAnimations(containerElement) {
        let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
        elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
        if (this.playersByQueriedElement.size == 0)
          return;
        elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
        elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
      }
      destroyActiveAnimationsForElement(element) {
        const players = this.playersByElement.get(element);
        if (players) {
          players.forEach((player) => {
            if (player.queued) {
              player.markedForDestroy = true;
            } else {
              player.destroy();
            }
          });
        }
      }
      finishActiveQueriedAnimationOnElement(element) {
        const players = this.playersByQueriedElement.get(element);
        if (players) {
          players.forEach((player) => player.finish());
        }
      }
      whenRenderingDone() {
        return new Promise((resolve) => {
          if (this.players.length) {
            return optimizeGroupPlayer(this.players).onDone(() => resolve());
          } else {
            resolve();
          }
        });
      }
      processLeaveNode(element) {
        const details = element[REMOVAL_FLAG];
        if (details && details.setForRemoval) {
          element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
          if (details.namespaceId) {
            this.destroyInnerAnimations(element);
            const ns = this._fetchNamespace(details.namespaceId);
            if (ns) {
              ns.clearElementCache(element);
            }
          }
          this._onRemovalComplete(element, details.setForRemoval);
        }
        if (element.classList?.contains(DISABLED_CLASSNAME)) {
          this.markElementAsDisabled(element, false);
        }
        this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
          this.markElementAsDisabled(node, false);
        });
      }
      flush(microtaskId = -1) {
        let players = [];
        if (this.newHostElements.size) {
          this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
          this.newHostElements.clear();
        }
        if (this.totalAnimations && this.collectedEnterElements.length) {
          for (let i3 = 0; i3 < this.collectedEnterElements.length; i3++) {
            const elm = this.collectedEnterElements[i3];
            addClass(elm, STAR_CLASSNAME);
          }
        }
        if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
          const cleanupFns = [];
          try {
            players = this._flushAnimations(cleanupFns, microtaskId);
          } finally {
            for (let i3 = 0; i3 < cleanupFns.length; i3++) {
              cleanupFns[i3]();
            }
          }
        } else {
          for (let i3 = 0; i3 < this.collectedLeaveElements.length; i3++) {
            const element = this.collectedLeaveElements[i3];
            this.processLeaveNode(element);
          }
        }
        this.totalQueuedPlayers = 0;
        this.collectedEnterElements.length = 0;
        this.collectedLeaveElements.length = 0;
        this._flushFns.forEach((fn) => fn());
        this._flushFns = [];
        if (this._whenQuietFns.length) {
          const quietFns = this._whenQuietFns;
          this._whenQuietFns = [];
          if (players.length) {
            optimizeGroupPlayer(players).onDone(() => {
              quietFns.forEach((fn) => fn());
            });
          } else {
            quietFns.forEach((fn) => fn());
          }
        }
      }
      reportError(errors) {
        throw triggerTransitionsFailed(errors);
      }
      _flushAnimations(cleanupFns, microtaskId) {
        const subTimelines = new ElementInstructionMap();
        const skippedPlayers = [];
        const skippedPlayersMap = /* @__PURE__ */ new Map();
        const queuedInstructions = [];
        const queriedElements = /* @__PURE__ */ new Map();
        const allPreStyleElements = /* @__PURE__ */ new Map();
        const allPostStyleElements = /* @__PURE__ */ new Map();
        const disabledElementsSet = /* @__PURE__ */ new Set();
        this.disabledNodes.forEach((node) => {
          disabledElementsSet.add(node);
          const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
          for (let i4 = 0; i4 < nodesThatAreDisabled.length; i4++) {
            disabledElementsSet.add(nodesThatAreDisabled[i4]);
          }
        });
        const bodyNode = this.bodyNode;
        const allTriggerElements = Array.from(this.statesByElement.keys());
        const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
        const enterNodeMapIds = /* @__PURE__ */ new Map();
        let i3 = 0;
        enterNodeMap.forEach((nodes, root) => {
          const className = ENTER_CLASSNAME + i3++;
          enterNodeMapIds.set(root, className);
          nodes.forEach((node) => addClass(node, className));
        });
        const allLeaveNodes = [];
        const mergedLeaveNodes = /* @__PURE__ */ new Set();
        const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
        for (let i4 = 0; i4 < this.collectedLeaveElements.length; i4++) {
          const element = this.collectedLeaveElements[i4];
          const details = element[REMOVAL_FLAG];
          if (details && details.setForRemoval) {
            allLeaveNodes.push(element);
            mergedLeaveNodes.add(element);
            if (details.hasAnimation) {
              this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
            } else {
              leaveNodesWithoutAnimations.add(element);
            }
          }
        }
        const leaveNodeMapIds = /* @__PURE__ */ new Map();
        const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
        leaveNodeMap.forEach((nodes, root) => {
          const className = LEAVE_CLASSNAME + i3++;
          leaveNodeMapIds.set(root, className);
          nodes.forEach((node) => addClass(node, className));
        });
        cleanupFns.push(() => {
          enterNodeMap.forEach((nodes, root) => {
            const className = enterNodeMapIds.get(root);
            nodes.forEach((node) => removeClass(node, className));
          });
          leaveNodeMap.forEach((nodes, root) => {
            const className = leaveNodeMapIds.get(root);
            nodes.forEach((node) => removeClass(node, className));
          });
          allLeaveNodes.forEach((element) => {
            this.processLeaveNode(element);
          });
        });
        const allPlayers = [];
        const erroneousTransitions = [];
        for (let i4 = this._namespaceList.length - 1; i4 >= 0; i4--) {
          const ns = this._namespaceList[i4];
          ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
            const player = entry.player;
            const element = entry.element;
            allPlayers.push(player);
            if (this.collectedEnterElements.length) {
              const details = element[REMOVAL_FLAG];
              if (details && details.setForMove) {
                if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
                  const previousValue = details.previousTriggersValues.get(entry.triggerName);
                  const triggersWithStates = this.statesByElement.get(entry.element);
                  if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                    const state2 = triggersWithStates.get(entry.triggerName);
                    state2.value = previousValue;
                    triggersWithStates.set(entry.triggerName, state2);
                  }
                }
                player.destroy();
                return;
              }
            }
            const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
            const leaveClassName = leaveNodeMapIds.get(element);
            const enterClassName = enterNodeMapIds.get(element);
            const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
            if (instruction.errors && instruction.errors.length) {
              erroneousTransitions.push(instruction);
              return;
            }
            if (nodeIsOrphaned) {
              player.onStart(() => eraseStyles(element, instruction.fromStyles));
              player.onDestroy(() => setStyles(element, instruction.toStyles));
              skippedPlayers.push(player);
              return;
            }
            if (entry.isFallbackTransition) {
              player.onStart(() => eraseStyles(element, instruction.fromStyles));
              player.onDestroy(() => setStyles(element, instruction.toStyles));
              skippedPlayers.push(player);
              return;
            }
            const timelines = [];
            instruction.timelines.forEach((tl) => {
              tl.stretchStartingKeyframe = true;
              if (!this.disabledNodes.has(tl.element)) {
                timelines.push(tl);
              }
            });
            instruction.timelines = timelines;
            subTimelines.append(element, instruction.timelines);
            const tuple = { instruction, player, element };
            queuedInstructions.push(tuple);
            instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
            instruction.preStyleProps.forEach((stringMap, element2) => {
              if (stringMap.size) {
                let setVal = allPreStyleElements.get(element2);
                if (!setVal) {
                  allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
                }
                stringMap.forEach((_, prop) => setVal.add(prop));
              }
            });
            instruction.postStyleProps.forEach((stringMap, element2) => {
              let setVal = allPostStyleElements.get(element2);
              if (!setVal) {
                allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
              }
              stringMap.forEach((_, prop) => setVal.add(prop));
            });
          });
        }
        if (erroneousTransitions.length) {
          const errors = [];
          erroneousTransitions.forEach((instruction) => {
            errors.push(transitionFailed(instruction.triggerName, instruction.errors));
          });
          allPlayers.forEach((player) => player.destroy());
          this.reportError(errors);
        }
        const allPreviousPlayersMap = /* @__PURE__ */ new Map();
        const animationElementMap = /* @__PURE__ */ new Map();
        queuedInstructions.forEach((entry) => {
          const element = entry.element;
          if (subTimelines.has(element)) {
            animationElementMap.set(element, element);
            this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
          }
        });
        skippedPlayers.forEach((player) => {
          const element = player.element;
          const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
          previousPlayers.forEach((prevPlayer) => {
            getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
            prevPlayer.destroy();
          });
        });
        const replaceNodes = allLeaveNodes.filter((node) => {
          return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
        });
        const postStylesMap = /* @__PURE__ */ new Map();
        const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
        allLeaveQueriedNodes.forEach((node) => {
          if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
            replaceNodes.push(node);
          }
        });
        const preStylesMap = /* @__PURE__ */ new Map();
        enterNodeMap.forEach((nodes, root) => {
          cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
        });
        replaceNodes.forEach((node) => {
          const post = postStylesMap.get(node);
          const pre = preStylesMap.get(node);
          postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
        });
        const rootPlayers = [];
        const subPlayers = [];
        const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
        queuedInstructions.forEach((entry) => {
          const { element, player, instruction } = entry;
          if (subTimelines.has(element)) {
            if (disabledElementsSet.has(element)) {
              player.onDestroy(() => setStyles(element, instruction.toStyles));
              player.disabled = true;
              player.overrideTotalTime(instruction.totalTime);
              skippedPlayers.push(player);
              return;
            }
            let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
            if (animationElementMap.size > 1) {
              let elm = element;
              const parentsToAdd = [];
              while (elm = elm.parentNode) {
                const detectedParent = animationElementMap.get(elm);
                if (detectedParent) {
                  parentWithAnimation = detectedParent;
                  break;
                }
                parentsToAdd.push(elm);
              }
              parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
            }
            const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
            player.setRealPlayer(innerPlayer);
            if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
              rootPlayers.push(player);
            } else {
              const parentPlayers = this.playersByElement.get(parentWithAnimation);
              if (parentPlayers && parentPlayers.length) {
                player.parentPlayer = optimizeGroupPlayer(parentPlayers);
              }
              skippedPlayers.push(player);
            }
          } else {
            eraseStyles(element, instruction.fromStyles);
            player.onDestroy(() => setStyles(element, instruction.toStyles));
            subPlayers.push(player);
            if (disabledElementsSet.has(element)) {
              skippedPlayers.push(player);
            }
          }
        });
        subPlayers.forEach((player) => {
          const playersForElement = skippedPlayersMap.get(player.element);
          if (playersForElement && playersForElement.length) {
            const innerPlayer = optimizeGroupPlayer(playersForElement);
            player.setRealPlayer(innerPlayer);
          }
        });
        skippedPlayers.forEach((player) => {
          if (player.parentPlayer) {
            player.syncPlayerEvents(player.parentPlayer);
          } else {
            player.destroy();
          }
        });
        for (let i4 = 0; i4 < allLeaveNodes.length; i4++) {
          const element = allLeaveNodes[i4];
          const details = element[REMOVAL_FLAG];
          removeClass(element, LEAVE_CLASSNAME);
          if (details && details.hasAnimation)
            continue;
          let players = [];
          if (queriedElements.size) {
            let queriedPlayerResults = queriedElements.get(element);
            if (queriedPlayerResults && queriedPlayerResults.length) {
              players.push(...queriedPlayerResults);
            }
            let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
            for (let j2 = 0; j2 < queriedInnerElements.length; j2++) {
              let queriedPlayers = queriedElements.get(queriedInnerElements[j2]);
              if (queriedPlayers && queriedPlayers.length) {
                players.push(...queriedPlayers);
              }
            }
          }
          const activePlayers = players.filter((p3) => !p3.destroyed);
          if (activePlayers.length) {
            removeNodesAfterAnimationDone(this, element, activePlayers);
          } else {
            this.processLeaveNode(element);
          }
        }
        allLeaveNodes.length = 0;
        rootPlayers.forEach((player) => {
          this.players.push(player);
          player.onDone(() => {
            player.destroy();
            const index = this.players.indexOf(player);
            this.players.splice(index, 1);
          });
          player.play();
        });
        return rootPlayers;
      }
      afterFlush(callback) {
        this._flushFns.push(callback);
      }
      afterFlushAnimationsDone(callback) {
        this._whenQuietFns.push(callback);
      }
      _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
        let players = [];
        if (isQueriedElement) {
          const queriedElementPlayers = this.playersByQueriedElement.get(element);
          if (queriedElementPlayers) {
            players = queriedElementPlayers;
          }
        } else {
          const elementPlayers = this.playersByElement.get(element);
          if (elementPlayers) {
            const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
            elementPlayers.forEach((player) => {
              if (player.queued)
                return;
              if (!isRemovalAnimation && player.triggerName != triggerName)
                return;
              players.push(player);
            });
          }
        }
        if (namespaceId || triggerName) {
          players = players.filter((player) => {
            if (namespaceId && namespaceId != player.namespaceId)
              return false;
            if (triggerName && triggerName != player.triggerName)
              return false;
            return true;
          });
        }
        return players;
      }
      _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
        const triggerName = instruction.triggerName;
        const rootElement = instruction.element;
        const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
        const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
        for (const timelineInstruction of instruction.timelines) {
          const element = timelineInstruction.element;
          const isQueriedElement = element !== rootElement;
          const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
          const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
          previousPlayers.forEach((player) => {
            const realPlayer = player.getRealPlayer();
            if (realPlayer.beforeDestroy) {
              realPlayer.beforeDestroy();
            }
            player.destroy();
            players.push(player);
          });
        }
        eraseStyles(rootElement, instruction.fromStyles);
      }
      _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
        const triggerName = instruction.triggerName;
        const rootElement = instruction.element;
        const allQueriedPlayers = [];
        const allConsumedElements = /* @__PURE__ */ new Set();
        const allSubElements = /* @__PURE__ */ new Set();
        const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
          const element = timelineInstruction.element;
          allConsumedElements.add(element);
          const details = element[REMOVAL_FLAG];
          if (details && details.removedBeforeQueried)
            return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
          const isQueriedElement = element !== rootElement;
          const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p3) => p3.getRealPlayer())).filter((p3) => {
            const pp = p3;
            return pp.element ? pp.element === element : false;
          });
          const preStyles = preStylesMap.get(element);
          const postStyles = postStylesMap.get(element);
          const keyframes2 = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
          const player2 = this._buildPlayer(timelineInstruction, keyframes2, previousPlayers);
          if (timelineInstruction.subTimeline && skippedPlayersMap) {
            allSubElements.add(element);
          }
          if (isQueriedElement) {
            const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
            wrappedPlayer.setRealPlayer(player2);
            allQueriedPlayers.push(wrappedPlayer);
          }
          return player2;
        });
        allQueriedPlayers.forEach((player2) => {
          getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
          player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
        });
        allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
        const player = optimizeGroupPlayer(allNewPlayers);
        player.onDestroy(() => {
          allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
          setStyles(rootElement, instruction.toStyles);
        });
        allSubElements.forEach((element) => {
          getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
        });
        return player;
      }
      _buildPlayer(instruction, keyframes2, previousPlayers) {
        if (keyframes2.length > 0) {
          return this.driver.animate(instruction.element, keyframes2, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
        }
        return new NoopAnimationPlayer(instruction.duration, instruction.delay);
      }
    };
    TransitionAnimationPlayer = class {
      namespaceId;
      triggerName;
      element;
      _player = new NoopAnimationPlayer();
      _containsRealPlayer = false;
      _queuedCallbacks = /* @__PURE__ */ new Map();
      destroyed = false;
      parentPlayer = null;
      markedForDestroy = false;
      disabled = false;
      queued = true;
      totalTime = 0;
      constructor(namespaceId, triggerName, element) {
        this.namespaceId = namespaceId;
        this.triggerName = triggerName;
        this.element = element;
      }
      setRealPlayer(player) {
        if (this._containsRealPlayer)
          return;
        this._player = player;
        this._queuedCallbacks.forEach((callbacks, phase) => {
          callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
        });
        this._queuedCallbacks.clear();
        this._containsRealPlayer = true;
        this.overrideTotalTime(player.totalTime);
        this.queued = false;
      }
      getRealPlayer() {
        return this._player;
      }
      overrideTotalTime(totalTime) {
        this.totalTime = totalTime;
      }
      syncPlayerEvents(player) {
        const p3 = this._player;
        if (p3.triggerCallback) {
          player.onStart(() => p3.triggerCallback("start"));
        }
        player.onDone(() => this.finish());
        player.onDestroy(() => this.destroy());
      }
      _queueEvent(name, callback) {
        getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
      }
      onDone(fn) {
        if (this.queued) {
          this._queueEvent("done", fn);
        }
        this._player.onDone(fn);
      }
      onStart(fn) {
        if (this.queued) {
          this._queueEvent("start", fn);
        }
        this._player.onStart(fn);
      }
      onDestroy(fn) {
        if (this.queued) {
          this._queueEvent("destroy", fn);
        }
        this._player.onDestroy(fn);
      }
      init() {
        this._player.init();
      }
      hasStarted() {
        return this.queued ? false : this._player.hasStarted();
      }
      play() {
        !this.queued && this._player.play();
      }
      pause() {
        !this.queued && this._player.pause();
      }
      restart() {
        !this.queued && this._player.restart();
      }
      finish() {
        this._player.finish();
      }
      destroy() {
        this.destroyed = true;
        this._player.destroy();
      }
      reset() {
        !this.queued && this._player.reset();
      }
      setPosition(p3) {
        if (!this.queued) {
          this._player.setPosition(p3);
        }
      }
      getPosition() {
        return this.queued ? 0 : this._player.getPosition();
      }
      /** @internal */
      triggerCallback(phaseName) {
        const p3 = this._player;
        if (p3.triggerCallback) {
          p3.triggerCallback(phaseName);
        }
      }
    };
    AnimationEngine = class {
      _driver;
      _normalizer;
      _transitionEngine;
      _timelineEngine;
      _triggerCache = {};
      // this method is designed to be overridden by the code that uses this engine
      onRemovalComplete = (element, context) => {
      };
      constructor(doc, _driver, _normalizer) {
        this._driver = _driver;
        this._normalizer = _normalizer;
        this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
        this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
        this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
      }
      registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
        const cacheKey = componentId + "-" + name;
        let trigger2 = this._triggerCache[cacheKey];
        if (!trigger2) {
          const errors = [];
          const warnings = [];
          const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
          if (errors.length) {
            throw triggerBuildFailed(name, errors);
          }
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            if (warnings.length) {
              warnTriggerBuild(name, warnings);
            }
          }
          trigger2 = buildTrigger(name, ast, this._normalizer);
          this._triggerCache[cacheKey] = trigger2;
        }
        this._transitionEngine.registerTrigger(namespaceId, name, trigger2);
      }
      register(namespaceId, hostElement) {
        this._transitionEngine.register(namespaceId, hostElement);
      }
      destroy(namespaceId, context) {
        this._transitionEngine.destroy(namespaceId, context);
      }
      onInsert(namespaceId, element, parent, insertBefore) {
        this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
      }
      onRemove(namespaceId, element, context) {
        this._transitionEngine.removeNode(namespaceId, element, context);
      }
      disableAnimations(element, disable) {
        this._transitionEngine.markElementAsDisabled(element, disable);
      }
      process(namespaceId, element, property, value) {
        if (property.charAt(0) == "@") {
          const [id, action] = parseTimelineCommand(property);
          const args = value;
          this._timelineEngine.command(id, element, action, args);
        } else {
          this._transitionEngine.trigger(namespaceId, element, property, value);
        }
      }
      listen(namespaceId, element, eventName, eventPhase, callback) {
        if (eventName.charAt(0) == "@") {
          const [id, action] = parseTimelineCommand(eventName);
          return this._timelineEngine.listen(id, element, action, callback);
        }
        return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
      }
      flush(microtaskId = -1) {
        this._transitionEngine.flush(microtaskId);
      }
      get players() {
        return [...this._transitionEngine.players, ...this._timelineEngine.players];
      }
      whenRenderingDone() {
        return this._transitionEngine.whenRenderingDone();
      }
      afterFlushAnimationsDone(cb) {
        this._transitionEngine.afterFlushAnimationsDone(cb);
      }
    };
    SpecialCasedStyles = class _SpecialCasedStyles {
      _element;
      _startStyles;
      _endStyles;
      static initialStylesByElement = /* @__PURE__ */ new WeakMap();
      _state = 0;
      _initialStyles;
      constructor(_element, _startStyles, _endStyles) {
        this._element = _element;
        this._startStyles = _startStyles;
        this._endStyles = _endStyles;
        let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
        if (!initialStyles) {
          _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
        }
        this._initialStyles = initialStyles;
      }
      start() {
        if (this._state < 1) {
          if (this._startStyles) {
            setStyles(this._element, this._startStyles, this._initialStyles);
          }
          this._state = 1;
        }
      }
      finish() {
        this.start();
        if (this._state < 2) {
          setStyles(this._element, this._initialStyles);
          if (this._endStyles) {
            setStyles(this._element, this._endStyles);
            this._endStyles = null;
          }
          this._state = 1;
        }
      }
      destroy() {
        this.finish();
        if (this._state < 3) {
          _SpecialCasedStyles.initialStylesByElement.delete(this._element);
          if (this._startStyles) {
            eraseStyles(this._element, this._startStyles);
            this._endStyles = null;
          }
          if (this._endStyles) {
            eraseStyles(this._element, this._endStyles);
            this._endStyles = null;
          }
          setStyles(this._element, this._initialStyles);
          this._state = 3;
        }
      }
    };
    WebAnimationsPlayer = class {
      element;
      keyframes;
      options;
      _specialStyles;
      _onDoneFns = [];
      _onStartFns = [];
      _onDestroyFns = [];
      _duration;
      _delay;
      _initialized = false;
      _finished = false;
      _started = false;
      _destroyed = false;
      _finalKeyframe;
      // the following original fns are persistent copies of the _onStartFns and _onDoneFns
      // and are used to reset the fns to their original values upon reset()
      // (since the _onStartFns and _onDoneFns get deleted after they are called)
      _originalOnDoneFns = [];
      _originalOnStartFns = [];
      domPlayer = null;
      time = 0;
      parentPlayer = null;
      currentSnapshot = /* @__PURE__ */ new Map();
      constructor(element, keyframes2, options, _specialStyles) {
        this.element = element;
        this.keyframes = keyframes2;
        this.options = options;
        this._specialStyles = _specialStyles;
        this._duration = options["duration"];
        this._delay = options["delay"] || 0;
        this.time = this._duration + this._delay;
      }
      _onFinish() {
        if (!this._finished) {
          this._finished = true;
          this._onDoneFns.forEach((fn) => fn());
          this._onDoneFns = [];
        }
      }
      init() {
        if (!this._buildPlayer()) {
          return;
        }
        this._preparePlayerBeforeStart();
      }
      _buildPlayer() {
        if (this._initialized)
          return this.domPlayer;
        this._initialized = true;
        const keyframes2 = this.keyframes;
        const animation2 = this._triggerWebAnimation(this.element, keyframes2, this.options);
        if (!animation2) {
          this._onFinish();
          return null;
        }
        this.domPlayer = animation2;
        this._finalKeyframe = keyframes2.length ? keyframes2[keyframes2.length - 1] : /* @__PURE__ */ new Map();
        const onFinish = () => this._onFinish();
        animation2.addEventListener("finish", onFinish);
        this.onDestroy(() => {
          animation2.removeEventListener("finish", onFinish);
        });
        return animation2;
      }
      _preparePlayerBeforeStart() {
        if (this._delay) {
          this._resetDomPlayerState();
        } else {
          this.domPlayer?.pause();
        }
      }
      _convertKeyframesToObject(keyframes2) {
        const kfs = [];
        keyframes2.forEach((frame) => {
          kfs.push(Object.fromEntries(frame));
        });
        return kfs;
      }
      /** @internal */
      _triggerWebAnimation(element, keyframes2, options) {
        const keyframesObject = this._convertKeyframesToObject(keyframes2);
        try {
          return element.animate(keyframesObject, options);
        } catch {
          return null;
        }
      }
      onStart(fn) {
        this._originalOnStartFns.push(fn);
        this._onStartFns.push(fn);
      }
      onDone(fn) {
        this._originalOnDoneFns.push(fn);
        this._onDoneFns.push(fn);
      }
      onDestroy(fn) {
        this._onDestroyFns.push(fn);
      }
      play() {
        const player = this._buildPlayer();
        if (!player) {
          return;
        }
        if (!this.hasStarted()) {
          this._onStartFns.forEach((fn) => fn());
          this._onStartFns = [];
          this._started = true;
          if (this._specialStyles) {
            this._specialStyles.start();
          }
        }
        player.play();
      }
      pause() {
        this.init();
        this.domPlayer?.pause();
      }
      finish() {
        this.init();
        if (!this.domPlayer)
          return;
        if (this._specialStyles) {
          this._specialStyles.finish();
        }
        this._onFinish();
        this.domPlayer.finish();
      }
      reset() {
        this._resetDomPlayerState();
        this._destroyed = false;
        this._finished = false;
        this._started = false;
        this._onStartFns = this._originalOnStartFns;
        this._onDoneFns = this._originalOnDoneFns;
      }
      _resetDomPlayerState() {
        this.domPlayer?.cancel();
      }
      restart() {
        this.reset();
        this.play();
      }
      hasStarted() {
        return this._started;
      }
      destroy() {
        if (!this._destroyed) {
          this._destroyed = true;
          this._resetDomPlayerState();
          this._onFinish();
          if (this._specialStyles) {
            this._specialStyles.destroy();
          }
          this._onDestroyFns.forEach((fn) => fn());
          this._onDestroyFns = [];
        }
      }
      setPosition(p3) {
        if (!this.domPlayer) {
          this.init();
        }
        if (this.domPlayer) {
          this.domPlayer.currentTime = p3 * this.time;
        }
      }
      getPosition() {
        if (!this.domPlayer) {
          return this._initialized ? 1 : 0;
        }
        return +(this.domPlayer.currentTime ?? 0) / this.time;
      }
      get totalTime() {
        return this._delay + this._duration;
      }
      beforeDestroy() {
        const styles = /* @__PURE__ */ new Map();
        if (this.hasStarted()) {
          const finalKeyframe = this._finalKeyframe;
          finalKeyframe.forEach((val, prop) => {
            if (prop !== "offset") {
              styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
            }
          });
        }
        this.currentSnapshot = styles;
      }
      /** @internal */
      triggerCallback(phaseName) {
        const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
        methods.forEach((fn) => fn());
        methods.length = 0;
      }
    };
    WebAnimationsDriver = class {
      validateStyleProperty(prop) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          return validateStyleProperty(prop);
        }
        return true;
      }
      validateAnimatableStyleProperty(prop) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          const cssProp = camelCaseToDashCase(prop);
          return validateWebAnimatableStyleProperty(cssProp);
        }
        return true;
      }
      containsElement(elm1, elm2) {
        return containsElement(elm1, elm2);
      }
      getParentElement(element) {
        return getParentElement(element);
      }
      query(element, selector, multi) {
        return invokeQuery(element, selector, multi);
      }
      computeStyle(element, prop, defaultValue) {
        return computeStyle(element, prop);
      }
      animate(element, keyframes2, duration, delay, easing, previousPlayers = []) {
        const fill = delay == 0 ? "both" : "forwards";
        const playerOptions = { duration, delay, fill };
        if (easing) {
          playerOptions["easing"] = easing;
        }
        const previousStyles = /* @__PURE__ */ new Map();
        const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
        if (allowPreviousPlayerStylesMerge(duration, delay)) {
          previousWebAnimationPlayers.forEach((player) => {
            player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
          });
        }
        let _keyframes = normalizeKeyframes(keyframes2).map((styles) => new Map(styles));
        _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
        const specialStyles = packageNonAnimatableStyles(element, _keyframes);
        return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
      }
    };
    ANIMATION_PREFIX = "@";
    DISABLE_ANIMATIONS_FLAG = "@.disabled";
    BaseAnimationRenderer = class {
      namespaceId;
      delegate;
      engine;
      _onDestroy;
      // We need to explicitly type this property because of an api-extractor bug
      // See https://github.com/microsoft/rushstack/issues/4390
      \u0275type = 0;
      constructor(namespaceId, delegate, engine, _onDestroy) {
        this.namespaceId = namespaceId;
        this.delegate = delegate;
        this.engine = engine;
        this._onDestroy = _onDestroy;
      }
      get data() {
        return this.delegate.data;
      }
      destroyNode(node) {
        this.delegate.destroyNode?.(node);
      }
      destroy() {
        this.engine.destroy(this.namespaceId, this.delegate);
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        });
        this._onDestroy?.();
      }
      createElement(name, namespace) {
        return this.delegate.createElement(name, namespace);
      }
      createComment(value) {
        return this.delegate.createComment(value);
      }
      createText(value) {
        return this.delegate.createText(value);
      }
      appendChild(parent, newChild) {
        this.delegate.appendChild(parent, newChild);
        this.engine.onInsert(this.namespaceId, newChild, parent, false);
      }
      insertBefore(parent, newChild, refChild, isMove = true) {
        this.delegate.insertBefore(parent, newChild, refChild);
        this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
      }
      // TODO(thePunderWoman): remove the requireSynchronousElementRemoval flag after the
      // animations package has been fully deleted post v23.
      removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
        if (requireSynchronousElementRemoval) {
          this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
          return;
        }
        if (this.parentNode(oldChild)) {
          this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
        }
      }
      selectRootElement(selectorOrNode, preserveContent) {
        return this.delegate.selectRootElement(selectorOrNode, preserveContent);
      }
      parentNode(node) {
        return this.delegate.parentNode(node);
      }
      nextSibling(node) {
        return this.delegate.nextSibling(node);
      }
      setAttribute(el, name, value, namespace) {
        this.delegate.setAttribute(el, name, value, namespace);
      }
      removeAttribute(el, name, namespace) {
        this.delegate.removeAttribute(el, name, namespace);
      }
      addClass(el, name) {
        this.delegate.addClass(el, name);
      }
      removeClass(el, name) {
        this.delegate.removeClass(el, name);
      }
      setStyle(el, style11, value, flags) {
        this.delegate.setStyle(el, style11, value, flags);
      }
      removeStyle(el, style11, flags) {
        this.delegate.removeStyle(el, style11, flags);
      }
      setProperty(el, name, value) {
        if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
          this.disableAnimations(el, !!value);
        } else {
          this.delegate.setProperty(el, name, value);
        }
      }
      setValue(node, value) {
        this.delegate.setValue(node, value);
      }
      listen(target, eventName, callback, options) {
        return this.delegate.listen(target, eventName, callback, options);
      }
      disableAnimations(element, value) {
        this.engine.disableAnimations(element, value);
      }
    };
    AnimationRenderer = class extends BaseAnimationRenderer {
      factory;
      constructor(factory, namespaceId, delegate, engine, onDestroy) {
        super(namespaceId, delegate, engine, onDestroy);
        this.factory = factory;
        this.namespaceId = namespaceId;
      }
      setProperty(el, name, value) {
        if (name.charAt(0) == ANIMATION_PREFIX) {
          if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
            value = value === void 0 ? true : !!value;
            this.disableAnimations(el, value);
          } else {
            this.engine.process(this.namespaceId, el, name.slice(1), value);
          }
        } else {
          this.delegate.setProperty(el, name, value);
        }
      }
      listen(target, eventName, callback, options) {
        if (eventName.charAt(0) == ANIMATION_PREFIX) {
          const element = resolveElementFromTarget(target);
          let name = eventName.slice(1);
          let phase = "";
          if (name.charAt(0) != ANIMATION_PREFIX) {
            [name, phase] = parseTriggerCallbackName(name);
          }
          return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
            const countId = event["_data"] || -1;
            this.factory.scheduleListenerCallback(countId, callback, event);
          });
        }
        return this.delegate.listen(target, eventName, callback, options);
      }
    };
    AnimationRendererFactory = class {
      delegate;
      engine;
      _zone;
      _currentId = 0;
      _microtaskId = 1;
      _animationCallbacksBuffer = [];
      _rendererCache = /* @__PURE__ */ new Map();
      _cdRecurDepth = 0;
      constructor(delegate, engine, _zone) {
        this.delegate = delegate;
        this.engine = engine;
        this._zone = _zone;
        engine.onRemovalComplete = (element, delegate2) => {
          delegate2?.removeChild(null, element);
        };
      }
      createRenderer(hostElement, type) {
        const EMPTY_NAMESPACE_ID = "";
        const delegate = this.delegate.createRenderer(hostElement, type);
        if (!hostElement || !type?.data?.["animation"]) {
          const cache = this._rendererCache;
          let renderer = cache.get(delegate);
          if (!renderer) {
            const onRendererDestroy = () => cache.delete(delegate);
            renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
            cache.set(delegate, renderer);
          }
          return renderer;
        }
        const componentId = type.id;
        const namespaceId = type.id + "-" + this._currentId;
        this._currentId++;
        this.engine.register(namespaceId, hostElement);
        const registerTrigger = (trigger2) => {
          if (Array.isArray(trigger2)) {
            trigger2.forEach(registerTrigger);
          } else {
            this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger2.name, trigger2);
          }
        };
        const animationTriggers = type.data["animation"];
        animationTriggers.forEach(registerTrigger);
        return new AnimationRenderer(this, namespaceId, delegate, this.engine);
      }
      begin() {
        this._cdRecurDepth++;
        if (this.delegate.begin) {
          this.delegate.begin();
        }
      }
      _scheduleCountTask() {
        queueMicrotask(() => {
          this._microtaskId++;
        });
      }
      /** @internal */
      scheduleListenerCallback(count, fn, data) {
        if (count >= 0 && count < this._microtaskId) {
          this._zone.run(() => fn(data));
          return;
        }
        const animationCallbacksBuffer = this._animationCallbacksBuffer;
        if (animationCallbacksBuffer.length == 0) {
          queueMicrotask(() => {
            this._zone.run(() => {
              animationCallbacksBuffer.forEach((tuple) => {
                const [fn2, data2] = tuple;
                fn2(data2);
              });
              this._animationCallbacksBuffer = [];
            });
          });
        }
        animationCallbacksBuffer.push([fn, data]);
      }
      end() {
        this._cdRecurDepth--;
        if (this._cdRecurDepth == 0) {
          this._zone.runOutsideAngular(() => {
            this._scheduleCountTask();
            this.engine.flush(this._microtaskId);
          });
        }
        if (this.delegate.end) {
          this.delegate.end();
        }
      }
      whenRenderingDone() {
        return this.engine.whenRenderingDone();
      }
      /**
       * Used during HMR to clear any cached data about a component.
       * @param componentId ID of the component that is being replaced.
       */
      componentReplaced(componentId) {
        this.engine.flush();
        this.delegate.componentReplaced?.(componentId);
      }
    };
  }
});

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
function provideNoopAnimations() {
  return [...BROWSER_NOOP_ANIMATIONS_PROVIDERS];
}
var InjectableAnimationEngine, SHARED_ANIMATION_PROVIDERS, BROWSER_NOOP_ANIMATIONS_PROVIDERS, BROWSER_ANIMATIONS_PROVIDERS, BrowserAnimationsModule, NoopAnimationsModule;
var init_animations = __esm({
  "node_modules/@angular/platform-browser/fesm2022/animations.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_browser2();
    init_browser2();
    init_common();
    init_dom_renderer();
    init_browser();
    InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
      // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
      // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
      // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
      constructor(doc, driver, normalizer) {
        super(doc, driver, normalizer);
      }
      ngOnDestroy() {
        this.flush();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _InjectableAnimationEngine, deps: [{ token: DOCUMENT }, { token: AnimationDriver }, { token: AnimationStyleNormalizer }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _InjectableAnimationEngine });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: InjectableAnimationEngine, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: Document, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: AnimationDriver }, { type: AnimationStyleNormalizer }] });
    SHARED_ANIMATION_PROVIDERS = [
      { provide: AnimationStyleNormalizer, useFactory: instantiateDefaultStyleNormalizer },
      { provide: AnimationEngine, useClass: InjectableAnimationEngine },
      {
        provide: RendererFactory2,
        useFactory: instantiateRendererFactory,
        deps: [DomRendererFactory2, AnimationEngine, NgZone]
      }
    ];
    BROWSER_NOOP_ANIMATIONS_PROVIDERS = [
      { provide: AnimationDriver, useClass: NoopAnimationDriver },
      { provide: ANIMATION_MODULE_TYPE, useValue: "NoopAnimations" },
      ...SHARED_ANIMATION_PROVIDERS
    ];
    BROWSER_ANIMATIONS_PROVIDERS = [
      // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
      {
        provide: AnimationDriver,
        useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
      },
      {
        provide: ANIMATION_MODULE_TYPE,
        useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
      },
      ...SHARED_ANIMATION_PROVIDERS
    ];
    BrowserAnimationsModule = class _BrowserAnimationsModule {
      /**
       * Configures the module based on the specified object.
       *
       * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
       * @see {@link BrowserAnimationsModuleConfig}
       *
       * @usageNotes
       * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
       * function as follows:
       * ```ts
       * @NgModule({
       *   imports: [BrowserAnimationsModule.withConfig(config)]
       * })
       * class MyNgModule {}
       * ```
       */
      static withConfig(config) {
        return {
          ngModule: _BrowserAnimationsModule,
          providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _BrowserAnimationsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.16", ngImport: core_exports, type: _BrowserAnimationsModule, exports: [BrowserModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _BrowserAnimationsModule, providers: BROWSER_ANIMATIONS_PROVIDERS, imports: [BrowserModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: BrowserAnimationsModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [BrowserModule],
        providers: BROWSER_ANIMATIONS_PROVIDERS
      }]
    }] });
    NoopAnimationsModule = class _NoopAnimationsModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _NoopAnimationsModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.16", ngImport: core_exports, type: _NoopAnimationsModule, exports: [BrowserModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _NoopAnimationsModule, providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS, imports: [BrowserModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: NoopAnimationsModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [BrowserModule],
        providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
      }]
    }] });
  }
});

// node_modules/@primeuix/utils/dist/classnames/index.mjs
function f(...e) {
  if (e) {
    let t2 = [];
    for (let i3 = 0; i3 < e.length; i3++) {
      let n2 = e[i3];
      if (!n2) continue;
      let s4 = typeof n2;
      if (s4 === "string" || s4 === "number") t2.push(n2);
      else if (s4 === "object") {
        let c4 = Array.isArray(n2) ? [f(...n2)] : Object.entries(n2).map(([r, o]) => o ? r : void 0);
        t2 = c4.length ? t2.concat(c4.filter((r) => !!r)) : t2;
      }
    }
    return t2.join(" ").trim();
  }
}
var init_classnames = __esm({
  "node_modules/@primeuix/utils/dist/classnames/index.mjs"() {
    "use strict";
  }
});

// node_modules/@primeuix/utils/dist/dom/index.mjs
function R(t2, e) {
  return t2 ? t2.classList ? t2.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t2.className) : false;
}
function W(t2, e) {
  if (t2 && e) {
    let o = (n2) => {
      R(t2, n2) || (t2.classList ? t2.classList.add(n2) : t2.className += " " + n2);
    };
    [e].flat().filter(Boolean).forEach((n2) => n2.split(" ").forEach(o));
  }
}
function F() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
function st(t2) {
  typeof t2 == "string" ? W(document.body, t2 || "p-overflow-hidden") : (t2 != null && t2.variableName && document.body.style.setProperty(t2.variableName, F() + "px"), W(document.body, (t2 == null ? void 0 : t2.className) || "p-overflow-hidden"));
}
function P(t2, e) {
  if (t2 && e) {
    let o = (n2) => {
      t2.classList ? t2.classList.remove(n2) : t2.className = t2.className.replace(new RegExp("(^|\\b)" + n2.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((n2) => n2.split(" ").forEach(o));
  }
}
function dt(t2) {
  typeof t2 == "string" ? P(document.body, t2 || "p-overflow-hidden") : (t2 != null && t2.variableName && document.body.style.removeProperty(t2.variableName), P(document.body, (t2 == null ? void 0 : t2.className) || "p-overflow-hidden"));
}
function x(t2) {
  for (let e of document == null ? void 0 : document.styleSheets) try {
    for (let o of e == null ? void 0 : e.cssRules) for (let n2 of o == null ? void 0 : o.style) if (t2.test(n2)) return { name: n2, value: o.style.getPropertyValue(n2).trim() };
  } catch (o) {
  }
  return null;
}
function w(t2) {
  let e = { width: 0, height: 0 };
  if (t2) {
    let [o, n2] = [t2.style.visibility, t2.style.display], r = t2.getBoundingClientRect();
    t2.style.visibility = "hidden", t2.style.display = "block", e.width = r.width || t2.offsetWidth, e.height = r.height || t2.offsetHeight, t2.style.display = n2, t2.style.visibility = o;
  }
  return e;
}
function h() {
  let t2 = window, e = document, o = e.documentElement, n2 = e.getElementsByTagName("body")[0], r = t2.innerWidth || o.clientWidth || n2.clientWidth, i3 = t2.innerHeight || o.clientHeight || n2.clientHeight;
  return { width: r, height: i3 };
}
function E(t2) {
  return t2 ? Math.abs(t2.scrollLeft) : 0;
}
function k() {
  let t2 = document.documentElement;
  return (window.pageXOffset || E(t2)) - (t2.clientLeft || 0);
}
function $() {
  let t2 = document.documentElement;
  return (window.pageYOffset || t2.scrollTop) - (t2.clientTop || 0);
}
function V(t2) {
  return t2 ? getComputedStyle(t2).direction === "rtl" : false;
}
function D(t2, e, o = true) {
  var n2, r, i3, l3;
  if (t2) {
    let d2 = t2.offsetParent ? { width: t2.offsetWidth, height: t2.offsetHeight } : w(t2), s4 = d2.height, a2 = d2.width, u2 = e.offsetHeight, p3 = e.offsetWidth, f2 = e.getBoundingClientRect(), g3 = $(), it2 = k(), lt = h(), L, N2, ot = "top";
    f2.top + u2 + s4 > lt.height ? (L = f2.top + g3 - s4, ot = "bottom", L < 0 && (L = g3)) : L = u2 + f2.top + g3, f2.left + a2 > lt.width ? N2 = Math.max(0, f2.left + it2 + p3 - a2) : N2 = f2.left + it2, V(t2) ? t2.style.insetInlineEnd = N2 + "px" : t2.style.insetInlineStart = N2 + "px", t2.style.top = L + "px", t2.style.transformOrigin = ot, o && (t2.style.marginTop = ot === "bottom" ? `calc(${(r = (n2 = x(/-anchor-gutter$/)) == null ? void 0 : n2.value) != null ? r : "2px"} * -1)` : (l3 = (i3 = x(/-anchor-gutter$/)) == null ? void 0 : i3.value) != null ? l3 : "");
  }
}
function v(t2, e) {
  if (t2 instanceof HTMLElement) {
    let o = t2.offsetWidth;
    if (e) {
      let n2 = getComputedStyle(t2);
      o += parseFloat(n2.marginLeft) + parseFloat(n2.marginRight);
    }
    return o;
  }
  return 0;
}
function y(t2) {
  if (t2) {
    let e = t2.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function T(t2) {
  return !!(t2 !== null && typeof t2 != "undefined" && t2.nodeName && y(t2));
}
function c(t2) {
  return typeof Element != "undefined" ? t2 instanceof Element : t2 !== null && typeof t2 == "object" && t2.nodeType === 1 && typeof t2.nodeName == "string";
}
function H(t2) {
  let e = t2;
  return t2 && typeof t2 == "object" && (Object.hasOwn(t2, "current") ? e = t2.current : Object.hasOwn(t2, "el") && (Object.hasOwn(t2.el, "nativeElement") ? e = t2.el.nativeElement : e = t2.el)), c(e) ? e : void 0;
}
function j(t2, e) {
  var o, n2, r;
  if (t2) switch (t2) {
    case "document":
      return document;
    case "window":
      return window;
    case "body":
      return document.body;
    case "@next":
      return e == null ? void 0 : e.nextElementSibling;
    case "@prev":
      return e == null ? void 0 : e.previousElementSibling;
    case "@first":
      return e == null ? void 0 : e.firstElementChild;
    case "@last":
      return e == null ? void 0 : e.lastElementChild;
    case "@child":
      return (o = e == null ? void 0 : e.children) == null ? void 0 : o[0];
    case "@parent":
      return e == null ? void 0 : e.parentElement;
    case "@grandparent":
      return (n2 = e == null ? void 0 : e.parentElement) == null ? void 0 : n2.parentElement;
    default: {
      if (typeof t2 == "string") {
        let s4 = t2.match(/^@child\[(\d+)]/);
        return s4 ? ((r = e == null ? void 0 : e.children) == null ? void 0 : r[parseInt(s4[1], 10)]) || null : document.querySelector(t2) || null;
      }
      let l3 = ((s4) => typeof s4 == "function" && "call" in s4 && "apply" in s4)(t2) ? t2() : t2, d2 = H(l3);
      return T(d2) ? d2 : (l3 == null ? void 0 : l3.nodeType) === 9 ? l3 : void 0;
    }
  }
}
function ut(t2, e) {
  let o = j(t2, e);
  if (o) o.appendChild(e);
  else throw new Error("Cannot append " + e + " to " + t2);
}
function A(t2, e = {}) {
  if (c(t2)) {
    let o = (n2, r) => {
      var l3, d2;
      let i3 = (l3 = t2 == null ? void 0 : t2.$attrs) != null && l3[n2] ? [(d2 = t2 == null ? void 0 : t2.$attrs) == null ? void 0 : d2[n2]] : [];
      return [r].flat().reduce((s4, a2) => {
        if (a2 != null) {
          let u2 = typeof a2;
          if (u2 === "string" || u2 === "number") s4.push(a2);
          else if (u2 === "object") {
            let p3 = Array.isArray(a2) ? o(n2, a2) : Object.entries(a2).map(([f2, g3]) => n2 === "style" && (g3 || g3 === 0) ? `${f2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${g3}` : g3 ? f2 : void 0);
            s4 = p3.length ? s4.concat(p3.filter((f2) => !!f2)) : s4;
          }
        }
        return s4;
      }, i3);
    };
    Object.entries(e).forEach(([n2, r]) => {
      if (r != null) {
        let i3 = n2.match(/^on(.+)/);
        i3 ? t2.addEventListener(i3[1].toLowerCase(), r) : n2 === "p-bind" || n2 === "pBind" ? A(t2, r) : (r = n2 === "class" ? [...new Set(o("class", r))].join(" ").trim() : n2 === "style" ? o("style", r).join(";").trim() : r, (t2.$attrs = t2.$attrs || {}) && (t2.$attrs[n2] = r), t2.setAttribute(n2, r));
      }
    });
  }
}
function U(t2, e = {}, ...o) {
  if (t2) {
    let n2 = document.createElement(t2);
    return A(n2, e), n2.append(...o), n2;
  }
}
function Y(t2, e) {
  return c(t2) ? Array.from(t2.querySelectorAll(e)) : [];
}
function z(t2, e) {
  return c(t2) ? t2.matches(e) ? t2 : t2.querySelector(e) : null;
}
function bt(t2, e) {
  t2 && document.activeElement !== t2 && t2.focus(e);
}
function b(t2, e = "") {
  let o = Y(t2, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`), n2 = [];
  for (let r of o) getComputedStyle(r).display != "none" && getComputedStyle(r).visibility != "hidden" && n2.push(r);
  return n2;
}
function vt(t2, e) {
  let o = b(t2, e);
  return o.length > 0 ? o[0] : null;
}
function Tt(t2) {
  if (t2) {
    let e = t2.offsetHeight, o = getComputedStyle(t2);
    return e -= parseFloat(o.paddingTop) + parseFloat(o.paddingBottom) + parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), e;
  }
  return 0;
}
function Lt(t2, e) {
  let o = b(t2, e);
  return o.length > 0 ? o[o.length - 1] : null;
}
function K(t2) {
  if (t2) {
    let e = t2.getBoundingClientRect();
    return { top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: e.left + (window.pageXOffset || E(document.documentElement) || E(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function C(t2, e) {
  if (t2) {
    let o = t2.offsetHeight;
    if (e) {
      let n2 = getComputedStyle(t2);
      o += parseFloat(n2.marginTop) + parseFloat(n2.marginBottom);
    }
    return o;
  }
  return 0;
}
function Rt(t2) {
  if (t2) {
    let e = t2.offsetWidth, o = getComputedStyle(t2);
    return e -= parseFloat(o.paddingLeft) + parseFloat(o.paddingRight) + parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), e;
  }
  return 0;
}
function Ut() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
}
function Yt() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Zt(t2) {
  var e;
  t2 && ("remove" in Element.prototype ? t2.remove() : (e = t2.parentNode) == null || e.removeChild(t2));
}
function _t(t2, e = "", o) {
  c(t2) && o !== null && o !== void 0 && t2.setAttribute(e, o);
}
var init_dom = __esm({
  "node_modules/@primeuix/utils/dist/dom/index.mjs"() {
    "use strict";
  }
});

// node_modules/@primeuix/utils/dist/eventbus/index.mjs
function s() {
  let r = /* @__PURE__ */ new Map();
  return { on(e, t2) {
    let n2 = r.get(e);
    return n2 ? n2.push(t2) : n2 = [t2], r.set(e, n2), this;
  }, off(e, t2) {
    let n2 = r.get(e);
    return n2 && n2.splice(n2.indexOf(t2) >>> 0, 1), this;
  }, emit(e, t2) {
    let n2 = r.get(e);
    n2 && n2.forEach((i3) => {
      i3(t2);
    });
  }, clear() {
    r.clear();
  } };
}
var init_eventbus = __esm({
  "node_modules/@primeuix/utils/dist/eventbus/index.mjs"() {
    "use strict";
  }
});

// node_modules/@primeuix/utils/dist/mergeprops/index.mjs
function u(...t2) {
  if (t2) {
    let e = [];
    for (let a2 = 0; a2 < t2.length; a2++) {
      let o = t2[a2];
      if (!o) continue;
      let r = typeof o;
      if (r === "string" || r === "number") e.push(o);
      else if (r === "object") {
        let s4 = Array.isArray(o) ? [u(...o)] : Object.entries(o).map(([f2, m2]) => m2 ? f2 : void 0);
        e = s4.length ? e.concat(s4.filter((f2) => !!f2)) : e;
      }
    }
    return e.join(" ").trim();
  }
}
function l(t2) {
  return typeof t2 == "function" && "call" in t2 && "apply" in t2;
}
function w2(...t2) {
  return t2 == null ? void 0 : t2.reduce((e, a2 = {}) => {
    for (let o in a2) {
      let r = a2[o];
      if (o === "style") e.style = n(n({}, e.style), a2.style);
      else if (o === "class" || o === "className") e[o] = u(e[o], a2[o]);
      else if (l(r)) {
        let s4 = e[o];
        e[o] = s4 ? (...f2) => {
          s4(...f2), r(...f2);
        } : r;
      } else e[o] = r;
    }
    return e;
  }, {});
}
var p, i, x2, c2, d, n;
var init_mergeprops = __esm({
  "node_modules/@primeuix/utils/dist/mergeprops/index.mjs"() {
    "use strict";
    p = Object.defineProperty;
    i = Object.getOwnPropertySymbols;
    x2 = Object.prototype.hasOwnProperty;
    c2 = Object.prototype.propertyIsEnumerable;
    d = (t2, e, a2) => e in t2 ? p(t2, e, { enumerable: true, configurable: true, writable: true, value: a2 }) : t2[e] = a2;
    n = (t2, e) => {
      for (var a2 in e || (e = {})) x2.call(e, a2) && d(t2, a2, e[a2]);
      if (i) for (var a2 of i(e)) c2.call(e, a2) && d(t2, a2, e[a2]);
      return t2;
    };
  }
});

// node_modules/@primeuix/utils/dist/object/index.mjs
function l2(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function b2(e, t2, n2 = /* @__PURE__ */ new WeakSet()) {
  if (e === t2) return true;
  if (!e || !t2 || typeof e != "object" || typeof t2 != "object" || n2.has(e) || n2.has(t2)) return false;
  n2.add(e).add(t2);
  let o = Array.isArray(e), r = Array.isArray(t2), u2, f2, T2;
  if (o && r) {
    if (f2 = e.length, f2 != t2.length) return false;
    for (u2 = f2; u2-- !== 0; ) if (!b2(e[u2], t2[u2], n2)) return false;
    return true;
  }
  if (o != r) return false;
  let S2 = e instanceof Date, A2 = t2 instanceof Date;
  if (S2 != A2) return false;
  if (S2 && A2) return e.getTime() == t2.getTime();
  let I = e instanceof RegExp, L = t2 instanceof RegExp;
  if (I != L) return false;
  if (I && L) return e.toString() == t2.toString();
  let R2 = Object.keys(e);
  if (f2 = R2.length, f2 !== Object.keys(t2).length) return false;
  for (u2 = f2; u2-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t2, R2[u2])) return false;
  for (u2 = f2; u2-- !== 0; ) if (T2 = R2[u2], !b2(e[T2], t2[T2], n2)) return false;
  return true;
}
function y2(e, t2) {
  return b2(e, t2);
}
function c3(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function s2(e) {
  return !l2(e);
}
function p2(e, t2) {
  if (!e || !t2) return null;
  try {
    let n2 = e[t2];
    if (s2(n2)) return n2;
  } catch (n2) {
  }
  if (Object.keys(e).length) {
    if (c3(t2)) return t2(e);
    if (t2.indexOf(".") === -1) return e[t2];
    {
      let n2 = t2.split("."), o = e;
      for (let r = 0, u2 = n2.length; r < u2; ++r) {
        if (o == null) return null;
        o = o[n2[r]];
      }
      return o;
    }
  }
  return null;
}
function k2(e, t2, n2) {
  return n2 ? p2(e, n2) === p2(t2, n2) : y2(e, t2);
}
function i2(e, t2 = true) {
  return e instanceof Object && e.constructor === Object && (t2 || Object.keys(e).length !== 0);
}
function m(e, ...t2) {
  return c3(e) ? e(...t2) : e;
}
function a(e, t2 = true) {
  return typeof e == "string" && (t2 || e !== "");
}
function g(e) {
  return a(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function F2(e, t2 = "", n2 = {}) {
  let o = g(t2).split("."), r = o.shift();
  if (r) {
    if (i2(e)) {
      let u2 = Object.keys(e).find((f2) => g(f2) === r) || "";
      return F2(m(e[u2], n2), o.join("."), n2);
    }
    return;
  }
  return m(e, n2);
}
function C2(e, t2 = true) {
  return Array.isArray(e) && (t2 || e.length !== 0);
}
function z2(e) {
  return s2(e) && !isNaN(e);
}
function G(e, t2) {
  if (t2) {
    let n2 = t2.test(e);
    return t2.lastIndex = 0, n2;
  }
  return false;
}
function Y2(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function X(e) {
  if (e && /[\xC0-\xFF\u0100-\u017E]/.test(e)) {
    let n2 = { A: /[\xC0-\xC5\u0100\u0102\u0104]/g, AE: /[\xC6]/g, C: /[\xC7\u0106\u0108\u010A\u010C]/g, D: /[\xD0\u010E\u0110]/g, E: /[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g, G: /[\u011C\u011E\u0120\u0122]/g, H: /[\u0124\u0126]/g, I: /[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g, IJ: /[\u0132]/g, J: /[\u0134]/g, K: /[\u0136]/g, L: /[\u0139\u013B\u013D\u013F\u0141]/g, N: /[\xD1\u0143\u0145\u0147\u014A]/g, O: /[\xD2-\xD6\xD8\u014C\u014E\u0150]/g, OE: /[\u0152]/g, R: /[\u0154\u0156\u0158]/g, S: /[\u015A\u015C\u015E\u0160]/g, T: /[\u0162\u0164\u0166]/g, U: /[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g, W: /[\u0174]/g, Y: /[\xDD\u0176\u0178]/g, Z: /[\u0179\u017B\u017D]/g, a: /[\xE0-\xE5\u0101\u0103\u0105]/g, ae: /[\xE6]/g, c: /[\xE7\u0107\u0109\u010B\u010D]/g, d: /[\u010F\u0111]/g, e: /[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g, g: /[\u011D\u011F\u0121\u0123]/g, i: /[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g, ij: /[\u0133]/g, j: /[\u0135]/g, k: /[\u0137,\u0138]/g, l: /[\u013A\u013C\u013E\u0140\u0142]/g, n: /[\xF1\u0144\u0146\u0148\u014B]/g, p: /[\xFE]/g, o: /[\xF2-\xF6\xF8\u014D\u014F\u0151]/g, oe: /[\u0153]/g, r: /[\u0155\u0157\u0159]/g, s: /[\u015B\u015D\u015F\u0161]/g, t: /[\u0163\u0165\u0167]/g, u: /[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g, w: /[\u0175]/g, y: /[\xFD\xFF\u0177]/g, z: /[\u017A\u017C\u017E]/g };
    for (let o in n2) e = e.replace(n2[o], o);
  }
  return e;
}
function re(e) {
  return a(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}
var init_object = __esm({
  "node_modules/@primeuix/utils/dist/object/index.mjs"() {
    "use strict";
  }
});

// node_modules/@primeuix/utils/dist/uuid/index.mjs
function s3(n2 = "pui_id_") {
  return Object.hasOwn(t, n2) || (t[n2] = 0), t[n2]++, `${n2}${t[n2]}`;
}
var t;
var init_uuid = __esm({
  "node_modules/@primeuix/utils/dist/uuid/index.mjs"() {
    "use strict";
    t = {};
  }
});

// node_modules/@primeuix/utils/dist/zindex/index.mjs
function g2() {
  let r = [], i3 = (e, n2, t2 = 999) => {
    let s4 = u2(e, n2, t2), o = s4.value + (s4.key === e ? 0 : t2) + 1;
    return r.push({ key: e, value: o }), o;
  }, d2 = (e) => {
    r = r.filter((n2) => n2.value !== e);
  }, a2 = (e, n2) => u2(e, n2).value, u2 = (e, n2, t2 = 0) => [...r].reverse().find((s4) => n2 ? true : s4.key === e) || { key: e, value: t2 }, l3 = (e) => e && parseInt(e.style.zIndex, 10) || 0;
  return { get: l3, set: (e, n2, t2) => {
    n2 && (n2.style.zIndex = String(i3(e, true, t2)));
  }, clear: (e) => {
    e && (d2(l3(e)), e.style.zIndex = "");
  }, getCurrent: (e) => a2(e, true) };
}
var x3;
var init_zindex = __esm({
  "node_modules/@primeuix/utils/dist/zindex/index.mjs"() {
    "use strict";
    x3 = g2();
  }
});

// node_modules/@primeuix/utils/dist/index.mjs
var init_dist = __esm({
  "node_modules/@primeuix/utils/dist/index.mjs"() {
    "use strict";
    init_classnames();
    init_dom();
    init_eventbus();
    init_mergeprops();
    init_object();
    init_uuid();
    init_zindex();
  }
});

// node_modules/primeng/fesm2022/primeng-api.mjs
var ConfirmEventType, ConfirmationService, ContextMenuService, FilterMatchMode, FilterService, MessageService, OverlayService, Header, Footer, PrimeTemplate, SharedModule, TranslationKeys, TreeDragDropService;
var init_primeng_api = __esm({
  "node_modules/primeng/fesm2022/primeng-api.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_dist();
    init_common();
    (function(ConfirmEventType2) {
      ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
      ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
      ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
    })(ConfirmEventType || (ConfirmEventType = {}));
    ConfirmationService = class _ConfirmationService {
      requireConfirmationSource = new Subject();
      acceptConfirmationSource = new Subject();
      requireConfirmation$ = this.requireConfirmationSource.asObservable();
      accept = this.acceptConfirmationSource.asObservable();
      /**
       * Callback to invoke on confirm.
       * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
       * @group Method
       */
      confirm(confirmation) {
        this.requireConfirmationSource.next(confirmation);
        return this;
      }
      /**
       * Closes the dialog.
       * @group Method
       */
      close() {
        this.requireConfirmationSource.next(null);
        return this;
      }
      /**
       * Accepts the dialog.
       * @group Method
       */
      onAccept() {
        this.acceptConfirmationSource.next(null);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ConfirmationService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ConfirmationService });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ConfirmationService, decorators: [{
      type: Injectable
    }] });
    ContextMenuService = class _ContextMenuService {
      activeItemKeyChange = new Subject();
      activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
      activeItemKey;
      changeKey(key) {
        this.activeItemKey = key;
        this.activeItemKeyChange.next(this.activeItemKey);
      }
      reset() {
        this.activeItemKey = null;
        this.activeItemKeyChange.next(this.activeItemKey);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ContextMenuService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ContextMenuService });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ContextMenuService, decorators: [{
      type: Injectable
    }] });
    FilterMatchMode = class {
      static STARTS_WITH = "startsWith";
      static CONTAINS = "contains";
      static NOT_CONTAINS = "notContains";
      static ENDS_WITH = "endsWith";
      static EQUALS = "equals";
      static NOT_EQUALS = "notEquals";
      static IN = "in";
      static LESS_THAN = "lt";
      static LESS_THAN_OR_EQUAL_TO = "lte";
      static GREATER_THAN = "gt";
      static GREATER_THAN_OR_EQUAL_TO = "gte";
      static BETWEEN = "between";
      static IS = "is";
      static IS_NOT = "isNot";
      static BEFORE = "before";
      static AFTER = "after";
      static DATE_IS = "dateIs";
      static DATE_IS_NOT = "dateIsNot";
      static DATE_BEFORE = "dateBefore";
      static DATE_AFTER = "dateAfter";
    };
    FilterService = class _FilterService {
      filter(value, fields, filterValue, filterMatchMode, filterLocale) {
        let filteredItems = [];
        if (value) {
          for (let item of value) {
            for (let field of fields) {
              let fieldValue = p2(item, field);
              if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                filteredItems.push(item);
                break;
              }
            }
          }
        }
        return filteredItems;
      }
      filters = {
        startsWith: (value, filter, filterLocale) => {
          if (filter === void 0 || filter === null || filter.trim() === "") {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
          let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
          return stringValue.slice(0, filterValue.length) === filterValue;
        },
        contains: (value, filter, filterLocale) => {
          if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
          let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
          return stringValue.indexOf(filterValue) !== -1;
        },
        notContains: (value, filter, filterLocale) => {
          if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
          let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
          return stringValue.indexOf(filterValue) === -1;
        },
        endsWith: (value, filter, filterLocale) => {
          if (filter === void 0 || filter === null || filter.trim() === "") {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
          let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
          return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
        },
        equals: (value, filter, filterLocale) => {
          if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          if (value.getTime && filter.getTime)
            return value.getTime() === filter.getTime();
          else if (value == filter)
            return true;
          else
            return X(value.toString()).toLocaleLowerCase(filterLocale) == X(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        notEquals: (value, filter, filterLocale) => {
          if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
            return false;
          }
          if (value === void 0 || value === null) {
            return true;
          }
          if (value.getTime && filter.getTime)
            return value.getTime() !== filter.getTime();
          else if (value == filter)
            return false;
          else
            return X(value.toString()).toLocaleLowerCase(filterLocale) != X(filter.toString()).toLocaleLowerCase(filterLocale);
        },
        in: (value, filter) => {
          if (filter === void 0 || filter === null || filter.length === 0) {
            return true;
          }
          for (let i3 = 0; i3 < filter.length; i3++) {
            if (k2(value, filter[i3])) {
              return true;
            }
          }
          return false;
        },
        between: (value, filter) => {
          if (filter == null || filter[0] == null || filter[1] == null) {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          if (value.getTime)
            return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
          else
            return filter[0] <= value && value <= filter[1];
        },
        lt: (value, filter, filterLocale) => {
          if (filter === void 0 || filter === null) {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          if (value.getTime && filter.getTime)
            return value.getTime() < filter.getTime();
          else
            return value < filter;
        },
        lte: (value, filter, filterLocale) => {
          if (filter === void 0 || filter === null) {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          if (value.getTime && filter.getTime)
            return value.getTime() <= filter.getTime();
          else
            return value <= filter;
        },
        gt: (value, filter, filterLocale) => {
          if (filter === void 0 || filter === null) {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          if (value.getTime && filter.getTime)
            return value.getTime() > filter.getTime();
          else
            return value > filter;
        },
        gte: (value, filter, filterLocale) => {
          if (filter === void 0 || filter === null) {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          if (value.getTime && filter.getTime)
            return value.getTime() >= filter.getTime();
          else
            return value >= filter;
        },
        is: (value, filter, filterLocale) => {
          return this.filters.equals(value, filter, filterLocale);
        },
        isNot: (value, filter, filterLocale) => {
          return this.filters.notEquals(value, filter, filterLocale);
        },
        before: (value, filter, filterLocale) => {
          return this.filters.lt(value, filter, filterLocale);
        },
        after: (value, filter, filterLocale) => {
          return this.filters.gt(value, filter, filterLocale);
        },
        dateIs: (value, filter) => {
          if (filter === void 0 || filter === null) {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          return value.toDateString() === filter.toDateString();
        },
        dateIsNot: (value, filter) => {
          if (filter === void 0 || filter === null) {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          return value.toDateString() !== filter.toDateString();
        },
        dateBefore: (value, filter) => {
          if (filter === void 0 || filter === null) {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          return value.getTime() < filter.getTime();
        },
        dateAfter: (value, filter) => {
          if (filter === void 0 || filter === null) {
            return true;
          }
          if (value === void 0 || value === null) {
            return false;
          }
          value.setHours(0, 0, 0, 0);
          return value.getTime() > filter.getTime();
        }
      };
      register(rule, fn) {
        this.filters[rule] = fn;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _FilterService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _FilterService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: FilterService, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    MessageService = class _MessageService {
      messageSource = new Subject();
      clearSource = new Subject();
      messageObserver = this.messageSource.asObservable();
      clearObserver = this.clearSource.asObservable();
      /**
       * Inserts single message.
       * @param {ToastMessageOptions} message - Message to be added.
       * @group Method
       */
      add(message) {
        if (message) {
          this.messageSource.next(message);
        }
      }
      /**
       * Inserts new messages.
       * @param {Message[]} messages - Messages to be added.
       * @group Method
       */
      addAll(messages) {
        if (messages && messages.length) {
          this.messageSource.next(messages);
        }
      }
      /**
       * Clears the message with the given key.
       * @param {string} key - Key of the message to be cleared.
       * @group Method
       */
      clear(key) {
        this.clearSource.next(key || null);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _MessageService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _MessageService });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: MessageService, decorators: [{
      type: Injectable
    }] });
    OverlayService = class _OverlayService {
      clickSource = new Subject();
      clickObservable = this.clickSource.asObservable();
      add(event) {
        if (event) {
          this.clickSource.next(event);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _OverlayService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _OverlayService, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: OverlayService, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    Header = class _Header {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _Header, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _Header, isStandalone: false, selector: "p-header", ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: Header, decorators: [{
      type: Component,
      args: [{
        selector: "p-header",
        template: "<ng-content></ng-content>",
        standalone: false
      }]
    }] });
    Footer = class _Footer {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _Footer, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _Footer, isStandalone: false, selector: "p-footer", ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: Footer, decorators: [{
      type: Component,
      args: [{
        selector: "p-footer",
        template: "<ng-content></ng-content>",
        standalone: false
      }]
    }] });
    PrimeTemplate = class _PrimeTemplate {
      template;
      type;
      name;
      constructor(template) {
        this.template = template;
      }
      getType() {
        return this.name;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _PrimeTemplate, deps: [{ token: TemplateRef }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.4", type: _PrimeTemplate, isStandalone: true, selector: "[pTemplate]", inputs: { type: "type", name: ["pTemplate", "name"] }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: PrimeTemplate, decorators: [{
      type: Directive,
      args: [{
        selector: "[pTemplate]",
        standalone: true
      }]
    }], ctorParameters: () => [{ type: TemplateRef }], propDecorators: { type: [{
      type: Input
    }], name: [{
      type: Input,
      args: ["pTemplate"]
    }] } });
    SharedModule = class _SharedModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _SharedModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.4", ngImport: core_exports, type: _SharedModule, declarations: [Header, Footer], imports: [CommonModule, PrimeTemplate], exports: [Header, Footer, PrimeTemplate] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _SharedModule, imports: [CommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: SharedModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CommonModule, PrimeTemplate],
        exports: [Header, Footer, PrimeTemplate],
        declarations: [Header, Footer]
      }]
    }] });
    TranslationKeys = class {
      static STARTS_WITH = "startsWith";
      static CONTAINS = "contains";
      static NOT_CONTAINS = "notContains";
      static ENDS_WITH = "endsWith";
      static EQUALS = "equals";
      static NOT_EQUALS = "notEquals";
      static NO_FILTER = "noFilter";
      static LT = "lt";
      static LTE = "lte";
      static GT = "gt";
      static GTE = "gte";
      static IS = "is";
      static IS_NOT = "isNot";
      static BEFORE = "before";
      static AFTER = "after";
      static CLEAR = "clear";
      static APPLY = "apply";
      static MATCH_ALL = "matchAll";
      static MATCH_ANY = "matchAny";
      static ADD_RULE = "addRule";
      static REMOVE_RULE = "removeRule";
      static ACCEPT = "accept";
      static REJECT = "reject";
      static CHOOSE = "choose";
      static UPLOAD = "upload";
      static CANCEL = "cancel";
      static PENDING = "pending";
      static FILE_SIZE_TYPES = "fileSizeTypes";
      static DAY_NAMES = "dayNames";
      static DAY_NAMES_SHORT = "dayNamesShort";
      static DAY_NAMES_MIN = "dayNamesMin";
      static MONTH_NAMES = "monthNames";
      static MONTH_NAMES_SHORT = "monthNamesShort";
      static FIRST_DAY_OF_WEEK = "firstDayOfWeek";
      static TODAY = "today";
      static WEEK_HEADER = "weekHeader";
      static WEAK = "weak";
      static MEDIUM = "medium";
      static STRONG = "strong";
      static PASSWORD_PROMPT = "passwordPrompt";
      static EMPTY_MESSAGE = "emptyMessage";
      static EMPTY_FILTER_MESSAGE = "emptyFilterMessage";
      static SHOW_FILTER_MENU = "showFilterMenu";
      static HIDE_FILTER_MENU = "hideFilterMenu";
      static SELECTION_MESSAGE = "selectionMessage";
      static ARIA = "aria";
      static SELECT_COLOR = "selectColor";
      static BROWSE_FILES = "browseFiles";
    };
    TreeDragDropService = class _TreeDragDropService {
      dragStartSource = new Subject();
      dragStopSource = new Subject();
      dragStart$ = this.dragStartSource.asObservable();
      dragStop$ = this.dragStopSource.asObservable();
      startDrag(event) {
        this.dragStartSource.next(event);
      }
      stopDrag(event) {
        this.dragStopSource.next(event);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _TreeDragDropService, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _TreeDragDropService });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: TreeDragDropService, decorators: [{
      type: Injectable
    }] });
  }
});

// angular:jit:template:src\app\dashboard\layout\layout.html
var layout_default;
var init_layout = __esm({
  "angular:jit:template:src\\app\\dashboard\\layout\\layout.html"() {
    layout_default = '<div class="flex min-h-dvh flex-col bg-gray-50">\r\n	<header class="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">\r\n		<div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">\r\n			<div class="flex items-center gap-3">\r\n				<a class="text-2xl font-semibold tracking-tight text-gray-900" routerLink="/app/projects">\r\n					Updater\r\n				</a>\r\n				<span class="hidden h-5 w-px bg-gray-200 sm:inline-block"></span>\r\n				<span class="hidden text-sm text-gray-600 sm:inline-block">\r\n					Version archive\r\n				</span>\r\n			</div>\r\n\r\n			<div class="flex items-center gap-3">\r\n				<button\r\n					type="button"\r\n					class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 transition hover:bg-gray-200"\r\n					aria-label="Open user menu"\r\n					(click)="userMenu.toggle($event)"\r\n				>\r\n					AO\r\n				</button>\r\n\r\n				<p-popover #userMenu>\r\n					<div class="w-[min(320px,80vw)]">\r\n						<div class="flex items-center gap-3">\r\n							<div\r\n								class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-800 ring-1 ring-gray-200"\r\n								aria-hidden="true"\r\n							>\r\n								AO\r\n							</div>\r\n							<div class="min-w-0">\r\n								<div class="truncate text-sm font-semibold text-gray-900">Multilent Admin</div>\r\n								<div class="truncate text-xs text-gray-600">admin@company.com</div>\r\n							</div>\r\n						</div>\r\n\r\n						<div class="my-3 h-px bg-gray-200"></div>\r\n\r\n						<a\r\n							class="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50"\r\n							routerLink="/auth/login"\r\n						>\r\n							<i class="pi pi-sign-out text-sm"></i>\r\n							Logout\r\n						</a>\r\n					</div>\r\n				</p-popover>\r\n			</div>\r\n		</div>\r\n	</header>\r\n\r\n	<main class="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6">\r\n		<router-outlet />\r\n	</main>\r\n\r\n	<footer class="mt-auto border-t border-gray-200 bg-white/90 backdrop-blur">\r\n		<div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">\r\n			<span>\xA9 2026 Multilent Softwares</span>\r\n			<span class="text-xs text-gray-500">Updater \u2022 Version archive</span>\r\n		</div>\r\n	</footer>\r\n\r\n	<p-confirmDialog />\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\dashboard\layout\layout.css
var layout_default2;
var init_layout2 = __esm({
  "angular:jit:style:src\\app\\dashboard\\layout\\layout.css"() {
    layout_default2 = "/* src/app/dashboard/layout/layout.css */\n/*# sourceMappingURL=layout.css.map */\n";
  }
});

// node_modules/@angular/animations/fesm2022/animations.mjs
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}
var AnimationBuilder, AnimationFactory, BrowserAnimationBuilder, BrowserAnimationFactory, RendererAnimationPlayer;
var init_animations2 = __esm({
  "node_modules/@angular/animations/fesm2022/animations.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_private_export();
    init_private_export();
    AnimationBuilder = class _AnimationBuilder {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _AnimationBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _AnimationBuilder, providedIn: "root", useFactory: () => inject(BrowserAnimationBuilder) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: AnimationBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(BrowserAnimationBuilder) }]
    }] });
    AnimationFactory = class {
    };
    BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
      animationModuleType = inject(ANIMATION_MODULE_TYPE, { optional: true });
      _nextAnimationId = 0;
      _renderer;
      constructor(rootRenderer, doc) {
        super();
        const typeData = {
          id: "0",
          encapsulation: ViewEncapsulation.None,
          styles: [],
          data: { animation: [] }
        };
        this._renderer = rootRenderer.createRenderer(doc.body, typeData);
        if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
          throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
        }
      }
      build(animation2) {
        const id = this._nextAnimationId;
        this._nextAnimationId++;
        const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
        issueAnimationCommand(this._renderer, null, id, "register", [entry]);
        return new BrowserAnimationFactory(id, this._renderer);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _BrowserAnimationBuilder, deps: [{ token: RendererFactory2 }, { token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: _BrowserAnimationBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.16", ngImport: core_exports, type: BrowserAnimationBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: RendererFactory2 }, { type: Document, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    BrowserAnimationFactory = class extends AnimationFactory {
      _id;
      _renderer;
      constructor(_id2, _renderer) {
        super();
        this._id = _id2;
        this._renderer = _renderer;
      }
      create(element, options) {
        return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
      }
    };
    RendererAnimationPlayer = class {
      id;
      element;
      _renderer;
      parentPlayer = null;
      _started = false;
      constructor(id, element, options, _renderer) {
        this.id = id;
        this.element = element;
        this._renderer = _renderer;
        this._command("create", options);
      }
      _listen(eventName, callback) {
        return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
      }
      _command(command, ...args) {
        issueAnimationCommand(this._renderer, this.element, this.id, command, args);
      }
      onDone(fn) {
        this._listen("done", fn);
      }
      onStart(fn) {
        this._listen("start", fn);
      }
      onDestroy(fn) {
        this._listen("destroy", fn);
      }
      init() {
        this._command("init");
      }
      hasStarted() {
        return this._started;
      }
      play() {
        this._command("play");
        this._started = true;
      }
      pause() {
        this._command("pause");
      }
      restart() {
        this._command("restart");
      }
      finish() {
        this._command("finish");
      }
      destroy() {
        this._command("destroy");
      }
      reset() {
        this._command("reset");
        this._started = false;
      }
      setPosition(p3) {
        this._command("setPosition", p3);
      }
      getPosition() {
        return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
      }
      totalTime = 0;
    };
  }
});

// node_modules/@primeuix/styled/dist/index.mjs
function oe(e) {
  return a(e) ? e.replace(/[A-Z]/g, (t2, r) => r === 0 ? t2 : "." + t2.toLowerCase()).toLowerCase() : e;
}
function ve(e) {
  return i2(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function dt2(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Q(e = "", t2 = "") {
  return dt2(`${a(e, false) && a(t2, false) ? `${e}-` : e}${t2}`);
}
function ae(e = "", t2 = "") {
  return `--${Q(e, t2)}`;
}
function ht(e = "") {
  let t2 = (e.match(/{/g) || []).length, r = (e.match(/}/g) || []).length;
  return (t2 + r) % 2 !== 0;
}
function Y3(e, t2 = "", r = "", s4 = [], i3) {
  if (a(e)) {
    let a2 = e.trim();
    if (ht(a2)) return;
    if (G(a2, k3)) {
      let n2 = a2.replaceAll(k3, (l3) => {
        let c4 = l3.replace(/{|}/g, "").split(".").filter((m2) => !s4.some((d2) => G(m2, d2)));
        return `var(${ae(r, re(c4.join("-")))}${s2(i3) ? `, ${i3}` : ""})`;
      });
      return G(n2.replace(ie, "0"), ne) ? `calc(${n2})` : n2;
    }
    return a2;
  } else if (z2(e)) return e;
}
function Re(e, t2, r) {
  a(t2, false) && e.push(`${t2}:${r};`);
}
function C3(e, t2) {
  return e ? `${e}{${t2}}` : "";
}
function le(e, t2) {
  if (e.indexOf("dt(") === -1) return e;
  function r(n2, l3) {
    let o = [], c4 = 0, m2 = "", d2 = null, u2 = 0;
    for (; c4 <= n2.length; ) {
      let g3 = n2[c4];
      if ((g3 === '"' || g3 === "'" || g3 === "`") && n2[c4 - 1] !== "\\" && (d2 = d2 === g3 ? null : g3), !d2 && (g3 === "(" && u2++, g3 === ")" && u2--, (g3 === "," || c4 === n2.length) && u2 === 0)) {
        let f2 = m2.trim();
        f2.startsWith("dt(") ? o.push(le(f2, l3)) : o.push(s4(f2)), m2 = "", c4++;
        continue;
      }
      g3 !== void 0 && (m2 += g3), c4++;
    }
    return o;
  }
  function s4(n2) {
    let l3 = n2[0];
    if ((l3 === '"' || l3 === "'" || l3 === "`") && n2[n2.length - 1] === l3) return n2.slice(1, -1);
    let o = Number(n2);
    return isNaN(o) ? n2 : o;
  }
  let i3 = [], a2 = [];
  for (let n2 = 0; n2 < e.length; n2++) if (e[n2] === "d" && e.slice(n2, n2 + 3) === "dt(") a2.push(n2), n2 += 2;
  else if (e[n2] === ")" && a2.length > 0) {
    let l3 = a2.pop();
    a2.length === 0 && i3.push([l3, n2]);
  }
  if (!i3.length) return e;
  for (let n2 = i3.length - 1; n2 >= 0; n2--) {
    let [l3, o] = i3[n2], c4 = e.slice(l3 + 3, o), m2 = r(c4, t2), d2 = t2(...m2);
    e = e.slice(0, l3) + d2 + e.slice(o + 1);
  }
  return e;
}
function ar(e, ...t2) {
  if (e instanceof Array) {
    let r = e.reduce((s4, i3, a2) => {
      var n2;
      return s4 + i3 + ((n2 = m(t2[a2], { dt: E2 })) != null ? n2 : "");
    }, "");
    return le(r, E2);
  }
  return m(e, { dt: E2 });
}
function de(e, t2 = {}) {
  let r = S.defaults.variable, { prefix: s4 = r.prefix, selector: i3 = r.selector, excludedKeyRegex: a2 = r.excludedKeyRegex } = t2, n2 = [], l3 = [], o = [{ node: e, path: s4 }];
  for (; o.length; ) {
    let { node: m2, path: d2 } = o.pop();
    for (let u2 in m2) {
      let g3 = m2[u2], f2 = ve(g3), p3 = G(u2, a2) ? Q(d2) : Q(d2, re(u2));
      if (i2(f2)) o.push({ node: f2, path: p3 });
      else {
        let y3 = ae(p3), R2 = Y3(f2, p3, s4, [a2]);
        Re(l3, y3, R2);
        let T2 = p3;
        s4 && T2.startsWith(s4 + "-") && (T2 = T2.slice(s4.length + 1)), n2.push(T2.replace(/-/g, "."));
      }
    }
  }
  let c4 = l3.join("");
  return { value: l3, tokens: n2, declarations: c4, css: C3(i3, c4) };
}
var rt, st2, nt, F3, xe, be, _e, h2, $2, v2, at, N, k3, ne, ie, rr, E2, ue, b3, S;
var init_dist2 = __esm({
  "node_modules/@primeuix/styled/dist/index.mjs"() {
    "use strict";
    init_eventbus();
    init_object();
    init_object();
    init_dist();
    init_object();
    init_object();
    rt = Object.defineProperty;
    st2 = Object.defineProperties;
    nt = Object.getOwnPropertyDescriptors;
    F3 = Object.getOwnPropertySymbols;
    xe = Object.prototype.hasOwnProperty;
    be = Object.prototype.propertyIsEnumerable;
    _e = (e, t2, r) => t2 in e ? rt(e, t2, { enumerable: true, configurable: true, writable: true, value: r }) : e[t2] = r;
    h2 = (e, t2) => {
      for (var r in t2 || (t2 = {})) xe.call(t2, r) && _e(e, r, t2[r]);
      if (F3) for (var r of F3(t2)) be.call(t2, r) && _e(e, r, t2[r]);
      return e;
    };
    $2 = (e, t2) => st2(e, nt(t2));
    v2 = (e, t2) => {
      var r = {};
      for (var s4 in e) xe.call(e, s4) && t2.indexOf(s4) < 0 && (r[s4] = e[s4]);
      if (e != null && F3) for (var s4 of F3(e)) t2.indexOf(s4) < 0 && be.call(e, s4) && (r[s4] = e[s4]);
      return r;
    };
    at = s();
    N = at;
    k3 = /{([^}]*)}/g;
    ne = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
    ie = /var\([^)]+\)/g;
    rr = (e) => {
      var a2;
      let t2 = S.getTheme(), r = ue(t2, e, void 0, "variable"), s4 = (a2 = r == null ? void 0 : r.match(/--[\w-]+/g)) == null ? void 0 : a2[0], i3 = ue(t2, e, void 0, "value");
      return { name: s4, variable: r, value: i3 };
    };
    E2 = (...e) => ue(S.getTheme(), ...e);
    ue = (e = {}, t2, r, s4) => {
      if (t2) {
        let { variable: i3, options: a2 } = S.defaults || {}, { prefix: n2, transform: l3 } = (e == null ? void 0 : e.options) || a2 || {}, o = G(t2, k3) ? t2 : `{${t2}}`;
        return s4 === "value" || l2(s4) && l3 === "strict" ? S.getTokenValue(t2) : Y3(o, void 0, n2, [i3.excludedKeyRegex], r);
      }
      return "";
    };
    b3 = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) {
      return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
    } }, attr: { pattern: /^\[(.*)\]$/, resolve(e) {
      return { type: "attr", selector: `:root${e},:host${e}`, matched: this.pattern.test(e.trim()) };
    } }, media: { pattern: /^@media (.*)$/, resolve(e) {
      return { type: "media", selector: e, matched: this.pattern.test(e.trim()) };
    } }, system: { pattern: /^system$/, resolve(e) {
      return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) };
    } }, custom: { resolve(e) {
      return { type: "custom", selector: e, matched: true };
    } } }, resolve(e) {
      let t2 = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
      return [e].flat().map((r) => {
        var s4;
        return (s4 = t2.map((i3) => i3.resolve(r)).find((i3) => i3.matched)) != null ? s4 : this.rules.custom.resolve(r);
      });
    } }, _toVariables(e, t2) {
      return de(e, { prefix: t2 == null ? void 0 : t2.prefix });
    }, getCommon({ name: e = "", theme: t2 = {}, params: r, set: s4, defaults: i3 }) {
      var R2, T2, j2, O, M, z3, V2;
      let { preset: a2, options: n2 } = t2, l3, o, c4, m2, d2, u2, g3;
      if (s2(a2) && n2.transform !== "strict") {
        let { primitive: L, semantic: te, extend: re2 } = a2, f2 = te || {}, { colorScheme: K2 } = f2, A2 = v2(f2, ["colorScheme"]), x4 = re2 || {}, { colorScheme: X2 } = x4, G2 = v2(x4, ["colorScheme"]), p3 = K2 || {}, { dark: U2 } = p3, B = v2(p3, ["dark"]), y3 = X2 || {}, { dark: I } = y3, H2 = v2(y3, ["dark"]), W2 = s2(L) ? this._toVariables({ primitive: L }, n2) : {}, q = s2(A2) ? this._toVariables({ semantic: A2 }, n2) : {}, Z = s2(B) ? this._toVariables({ light: B }, n2) : {}, pe = s2(U2) ? this._toVariables({ dark: U2 }, n2) : {}, fe = s2(G2) ? this._toVariables({ semantic: G2 }, n2) : {}, ye = s2(H2) ? this._toVariables({ light: H2 }, n2) : {}, Se = s2(I) ? this._toVariables({ dark: I }, n2) : {}, [Me, ze] = [(R2 = W2.declarations) != null ? R2 : "", W2.tokens], [Ke, Xe] = [(T2 = q.declarations) != null ? T2 : "", q.tokens || []], [Ge, Ue] = [(j2 = Z.declarations) != null ? j2 : "", Z.tokens || []], [Be, Ie] = [(O = pe.declarations) != null ? O : "", pe.tokens || []], [He, We] = [(M = fe.declarations) != null ? M : "", fe.tokens || []], [qe, Ze] = [(z3 = ye.declarations) != null ? z3 : "", ye.tokens || []], [Fe, Je] = [(V2 = Se.declarations) != null ? V2 : "", Se.tokens || []];
        l3 = this.transformCSS(e, Me, "light", "variable", n2, s4, i3), o = ze;
        let Qe = this.transformCSS(e, `${Ke}${Ge}`, "light", "variable", n2, s4, i3), Ye = this.transformCSS(e, `${Be}`, "dark", "variable", n2, s4, i3);
        c4 = `${Qe}${Ye}`, m2 = [.../* @__PURE__ */ new Set([...Xe, ...Ue, ...Ie])];
        let et = this.transformCSS(e, `${He}${qe}color-scheme:light`, "light", "variable", n2, s4, i3), tt = this.transformCSS(e, `${Fe}color-scheme:dark`, "dark", "variable", n2, s4, i3);
        d2 = `${et}${tt}`, u2 = [.../* @__PURE__ */ new Set([...We, ...Ze, ...Je])], g3 = m(a2.css, { dt: E2 });
      }
      return { primitive: { css: l3, tokens: o }, semantic: { css: c4, tokens: m2 }, global: { css: d2, tokens: u2 }, style: g3 };
    }, getPreset({ name: e = "", preset: t2 = {}, options: r, params: s4, set: i3, defaults: a2, selector: n2 }) {
      var f2, x4, p3;
      let l3, o, c4;
      if (s2(t2) && r.transform !== "strict") {
        let y3 = e.replace("-directive", ""), m2 = t2, { colorScheme: R2, extend: T2, css: j2 } = m2, O = v2(m2, ["colorScheme", "extend", "css"]), d2 = T2 || {}, { colorScheme: M } = d2, z3 = v2(d2, ["colorScheme"]), u2 = R2 || {}, { dark: V2 } = u2, L = v2(u2, ["dark"]), g3 = M || {}, { dark: te } = g3, re2 = v2(g3, ["dark"]), K2 = s2(O) ? this._toVariables({ [y3]: h2(h2({}, O), z3) }, r) : {}, A2 = s2(L) ? this._toVariables({ [y3]: h2(h2({}, L), re2) }, r) : {}, X2 = s2(V2) ? this._toVariables({ [y3]: h2(h2({}, V2), te) }, r) : {}, [G2, U2] = [(f2 = K2.declarations) != null ? f2 : "", K2.tokens || []], [B, I] = [(x4 = A2.declarations) != null ? x4 : "", A2.tokens || []], [H2, W2] = [(p3 = X2.declarations) != null ? p3 : "", X2.tokens || []], q = this.transformCSS(y3, `${G2}${B}`, "light", "variable", r, i3, a2, n2), Z = this.transformCSS(y3, H2, "dark", "variable", r, i3, a2, n2);
        l3 = `${q}${Z}`, o = [.../* @__PURE__ */ new Set([...U2, ...I, ...W2])], c4 = m(j2, { dt: E2 });
      }
      return { css: l3, tokens: o, style: c4 };
    }, getPresetC({ name: e = "", theme: t2 = {}, params: r, set: s4, defaults: i3 }) {
      var o;
      let { preset: a2, options: n2 } = t2, l3 = (o = a2 == null ? void 0 : a2.components) == null ? void 0 : o[e];
      return this.getPreset({ name: e, preset: l3, options: n2, params: r, set: s4, defaults: i3 });
    }, getPresetD({ name: e = "", theme: t2 = {}, params: r, set: s4, defaults: i3 }) {
      var c4, m2;
      let a2 = e.replace("-directive", ""), { preset: n2, options: l3 } = t2, o = ((c4 = n2 == null ? void 0 : n2.components) == null ? void 0 : c4[a2]) || ((m2 = n2 == null ? void 0 : n2.directives) == null ? void 0 : m2[a2]);
      return this.getPreset({ name: a2, preset: o, options: l3, params: r, set: s4, defaults: i3 });
    }, applyDarkColorScheme(e) {
      return !(e.darkModeSelector === "none" || e.darkModeSelector === false);
    }, getColorSchemeOption(e, t2) {
      var r;
      return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === true ? t2.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : t2.options.darkModeSelector) : [];
    }, getLayerOrder(e, t2 = {}, r, s4) {
      let { cssLayer: i3 } = t2;
      return i3 ? `@layer ${m(i3.order || i3.name || "primeui", r)}` : "";
    }, getCommonStyleSheet({ name: e = "", theme: t2 = {}, params: r, props: s4 = {}, set: i3, defaults: a2 }) {
      let n2 = this.getCommon({ name: e, theme: t2, params: r, set: i3, defaults: a2 }), l3 = Object.entries(s4).reduce((o, [c4, m2]) => o.push(`${c4}="${m2}"`) && o, []).join(" ");
      return Object.entries(n2 || {}).reduce((o, [c4, m2]) => {
        if (i2(m2) && Object.hasOwn(m2, "css")) {
          let d2 = Y2(m2.css), u2 = `${c4}-variables`;
          o.push(`<style type="text/css" data-primevue-style-id="${u2}" ${l3}>${d2}</style>`);
        }
        return o;
      }, []).join("");
    }, getStyleSheet({ name: e = "", theme: t2 = {}, params: r, props: s4 = {}, set: i3, defaults: a2 }) {
      var c4;
      let n2 = { name: e, theme: t2, params: r, set: i3, defaults: a2 }, l3 = (c4 = e.includes("-directive") ? this.getPresetD(n2) : this.getPresetC(n2)) == null ? void 0 : c4.css, o = Object.entries(s4).reduce((m2, [d2, u2]) => m2.push(`${d2}="${u2}"`) && m2, []).join(" ");
      return l3 ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${o}>${Y2(l3)}</style>` : "";
    }, createTokens(e = {}, t2, r = "", s4 = "", i3 = {}) {
      let a2 = function(l3, o = {}, c4 = []) {
        if (c4.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: l3, path: this.path, paths: o, value: void 0 };
        c4.push(this.path), o.name = this.path, o.binding || (o.binding = {});
        let m2 = this.value;
        if (typeof this.value == "string" && k3.test(this.value)) {
          let u2 = this.value.trim().replace(k3, (g3) => {
            var y3;
            let f2 = g3.slice(1, -1), x4 = this.tokens[f2];
            if (!x4) return console.warn(`Token not found for path: ${f2}`), "__UNRESOLVED__";
            let p3 = x4.computed(l3, o, c4);
            return Array.isArray(p3) && p3.length === 2 ? `light-dark(${p3[0].value},${p3[1].value})` : (y3 = p3 == null ? void 0 : p3.value) != null ? y3 : "__UNRESOLVED__";
          });
          m2 = ne.test(u2.replace(ie, "0")) ? `calc(${u2})` : u2;
        }
        return l2(o.binding) && delete o.binding, c4.pop(), { colorScheme: l3, path: this.path, paths: o, value: m2.includes("__UNRESOLVED__") ? void 0 : m2 };
      }, n2 = (l3, o, c4) => {
        Object.entries(l3).forEach(([m2, d2]) => {
          let u2 = G(m2, t2.variable.excludedKeyRegex) ? o : o ? `${o}.${oe(m2)}` : oe(m2), g3 = c4 ? `${c4}.${m2}` : m2;
          i2(d2) ? n2(d2, u2, g3) : (i3[u2] || (i3[u2] = { paths: [], computed: (f2, x4 = {}, p3 = []) => {
            if (i3[u2].paths.length === 1) return i3[u2].paths[0].computed(i3[u2].paths[0].scheme, x4.binding, p3);
            if (f2 && f2 !== "none") for (let y3 = 0; y3 < i3[u2].paths.length; y3++) {
              let R2 = i3[u2].paths[y3];
              if (R2.scheme === f2) return R2.computed(f2, x4.binding, p3);
            }
            return i3[u2].paths.map((y3) => y3.computed(y3.scheme, x4[y3.scheme], p3));
          } }), i3[u2].paths.push({ path: g3, value: d2, scheme: g3.includes("colorScheme.light") ? "light" : g3.includes("colorScheme.dark") ? "dark" : "none", computed: a2, tokens: i3 }));
        });
      };
      return n2(e, r, s4), i3;
    }, getTokenValue(e, t2, r) {
      var l3;
      let i3 = ((o) => o.split(".").filter((m2) => !G(m2.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(t2), a2 = t2.includes("colorScheme.light") ? "light" : t2.includes("colorScheme.dark") ? "dark" : void 0, n2 = [(l3 = e[i3]) == null ? void 0 : l3.computed(a2)].flat().filter((o) => o);
      return n2.length === 1 ? n2[0].value : n2.reduce((o = {}, c4) => {
        let u2 = c4, { colorScheme: m2 } = u2, d2 = v2(u2, ["colorScheme"]);
        return o[m2] = d2, o;
      }, void 0);
    }, getSelectorRule(e, t2, r, s4) {
      return r === "class" || r === "attr" ? C3(s2(t2) ? `${e}${t2},${e} ${t2}` : e, s4) : C3(e, C3(t2 != null ? t2 : ":root,:host", s4));
    }, transformCSS(e, t2, r, s4, i3 = {}, a2, n2, l3) {
      if (s2(t2)) {
        let { cssLayer: o } = i3;
        if (s4 !== "style") {
          let c4 = this.getColorSchemeOption(i3, n2);
          t2 = r === "dark" ? c4.reduce((m2, { type: d2, selector: u2 }) => (s2(u2) && (m2 += u2.includes("[CSS]") ? u2.replace("[CSS]", t2) : this.getSelectorRule(u2, l3, d2, t2)), m2), "") : C3(l3 != null ? l3 : ":root,:host", t2);
        }
        if (o) {
          let c4 = { name: "primeui", order: "primeui" };
          i2(o) && (c4.name = m(o.name, { name: e, type: s4 })), s2(c4.name) && (t2 = C3(`@layer ${c4.name}`, t2), a2 == null || a2.layerNames(c4.name));
        }
        return t2;
      }
      return "";
    } };
    S = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e = {}) {
      let { theme: t2 } = e;
      t2 && (this._theme = $2(h2({}, t2), { options: h2(h2({}, this.defaults.options), t2.options) }), this._tokens = b3.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
    }, get theme() {
      return this._theme;
    }, get preset() {
      var e;
      return ((e = this.theme) == null ? void 0 : e.preset) || {};
    }, get options() {
      var e;
      return ((e = this.theme) == null ? void 0 : e.options) || {};
    }, get tokens() {
      return this._tokens;
    }, getTheme() {
      return this.theme;
    }, setTheme(e) {
      this.update({ theme: e }), N.emit("theme:change", e);
    }, getPreset() {
      return this.preset;
    }, setPreset(e) {
      this._theme = $2(h2({}, this.theme), { preset: e }), this._tokens = b3.createTokens(e, this.defaults), this.clearLoadedStyleNames(), N.emit("preset:change", e), N.emit("theme:change", this.theme);
    }, getOptions() {
      return this.options;
    }, setOptions(e) {
      this._theme = $2(h2({}, this.theme), { options: e }), this.clearLoadedStyleNames(), N.emit("options:change", e), N.emit("theme:change", this.theme);
    }, getLayerNames() {
      return [...this._layerNames];
    }, setLayerNames(e) {
      this._layerNames.add(e);
    }, getLoadedStyleNames() {
      return this._loadedStyleNames;
    }, isStyleNameLoaded(e) {
      return this._loadedStyleNames.has(e);
    }, setLoadedStyleName(e) {
      this._loadedStyleNames.add(e);
    }, deleteLoadedStyleName(e) {
      this._loadedStyleNames.delete(e);
    }, clearLoadedStyleNames() {
      this._loadedStyleNames.clear();
    }, getTokenValue(e) {
      return b3.getTokenValue(this.tokens, e, this.defaults);
    }, getCommon(e = "", t2) {
      return b3.getCommon({ name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    }, getComponent(e = "", t2) {
      let r = { name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
      return b3.getPresetC(r);
    }, getDirective(e = "", t2) {
      let r = { name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
      return b3.getPresetD(r);
    }, getCustomPreset(e = "", t2, r, s4) {
      let i3 = { name: e, preset: t2, options: this.options, selector: r, params: s4, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
      return b3.getPreset(i3);
    }, getLayerOrderCSS(e = "") {
      return b3.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
    }, transformCSS(e = "", t2, r = "style", s4) {
      return b3.transformCSS(e, t2, s4, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
    }, getCommonStyleSheet(e = "", t2, r = {}) {
      return b3.getCommonStyleSheet({ name: e, theme: this.theme, params: t2, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    }, getStyleSheet(e, t2, r = {}) {
      return b3.getStyleSheet({ name: e, theme: this.theme, params: t2, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
    }, onStyleMounted(e) {
      this._loadingStyles.add(e);
    }, onStyleUpdated(e) {
      this._loadingStyles.add(e);
    }, onStyleLoaded(e, { name: t2 }) {
      this._loadingStyles.size && (this._loadingStyles.delete(t2), N.emit(`theme:${t2}:load`, e), !this._loadingStyles.size && N.emit("theme:load"));
    } };
  }
});

// node_modules/@primeuix/styles/dist/base/index.mjs
var style2;
var init_base = __esm({
  "node_modules/@primeuix/styles/dist/base/index.mjs"() {
    "use strict";
    style2 = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    /* Non vue overlay animations */\n    .p-connected-overlay {\n        opacity: 0;\n        transform: scaleY(0.8);\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-visible {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n\n    .p-connected-overlay-hidden {\n        opacity: 0;\n        transform: scaleY(1);\n        transition: opacity 0.1s linear;\n    }\n\n    /* Vue based overlay animations */\n    .p-connected-overlay-enter-from {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-connected-overlay-leave-to {\n        opacity: 0;\n    }\n\n    .p-connected-overlay-enter-active {\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-leave-active {\n        transition: opacity 0.1s linear;\n    }\n\n    /* Toggleable Content */\n    .p-toggleable-content-enter-from,\n    .p-toggleable-content-leave-to {\n        max-height: 0;\n    }\n\n    .p-toggleable-content-enter-to,\n    .p-toggleable-content-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-toggleable-content-leave-active {\n        overflow: hidden;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n    }\n\n    .p-toggleable-content-enter-active {\n        overflow: hidden;\n        transition: max-height 1s ease-in-out;\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: dt('mask.background');\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter {\n        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave {\n        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-overlay-mask-enter-animation {\n        from {\n            background: transparent;\n        }\n        to {\n            background: dt('mask.background');\n        }\n    }\n    @keyframes p-overlay-mask-leave-animation {\n        from {\n            background: dt('mask.background');\n        }\n        to {\n            background: transparent;\n        }\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id, UseStyle;
var init_primeng_usestyle = __esm({
  "node_modules/primeng/fesm2022/primeng-usestyle.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dist();
    _id = 0;
    UseStyle = class _UseStyle {
      document = inject(DOCUMENT);
      use(css3, options = {}) {
        let isLoaded = false;
        let cssRef = css3;
        let styleRef = null;
        const { immediate = true, manual = false, name = `style_${++_id}`, id = void 0, media = void 0, nonce = void 0, first = false, props = {} } = options;
        if (!this.document)
          return;
        styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
        if (styleRef) {
          if (!styleRef.isConnected) {
            cssRef = css3;
            const HEAD = this.document.head;
            _t(styleRef, "nonce", nonce);
            first && HEAD.firstChild ? HEAD.insertBefore(styleRef, HEAD.firstChild) : HEAD.appendChild(styleRef);
            A(styleRef, {
              type: "text/css",
              media,
              nonce,
              "data-primeng-style-id": name
            });
          }
          if (styleRef.textContent !== cssRef) {
            styleRef.textContent = cssRef;
          }
        }
        return {
          id,
          name,
          el: styleRef,
          css: cssRef
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _UseStyle, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _UseStyle, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: UseStyle, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-base.mjs
var base, css, BaseStyle;
var init_primeng_base = __esm({
  "node_modules/primeng/fesm2022/primeng-base.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist2();
    init_base();
    init_dist();
    init_primeng_usestyle();
    base = {
      _loadedStyleNames: /* @__PURE__ */ new Set(),
      getLoadedStyleNames() {
        return this._loadedStyleNames;
      },
      isStyleNameLoaded(name) {
        return this._loadedStyleNames.has(name);
      },
      setLoadedStyleName(name) {
        this._loadedStyleNames.add(name);
      },
      deleteLoadedStyleName(name) {
        this._loadedStyleNames.delete(name);
      },
      clearLoadedStyleNames() {
        this._loadedStyleNames.clear();
      }
    };
    css = /*css*/
    `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`;
    BaseStyle = class _BaseStyle {
      name = "base";
      useStyle = inject(UseStyle);
      css = void 0;
      style = void 0;
      classes = {};
      inlineStyles = {};
      load = (style11, options = {}, transform = (cs) => cs) => {
        const computedStyle = transform(ar`${m(style11, { dt: E2 })}`);
        return computedStyle ? this.useStyle.use(Y2(computedStyle), __spreadValues({ name: this.name }, options)) : {};
      };
      loadCSS = (options = {}) => {
        return this.load(this.css, options);
      };
      loadStyle = (options = {}, style11 = "") => {
        return this.load(this.style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style11}`}`));
      };
      loadBaseCSS = (options = {}) => {
        return this.load(css, options);
      };
      loadBaseStyle = (options = {}, style$1 = "") => {
        return this.load(style2, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style$1}`}`));
      };
      getCommonTheme = (params) => {
        return S.getCommon(this.name, params);
      };
      getComponentTheme = (params) => {
        return S.getComponent(this.name, params);
      };
      getPresetTheme = (preset, selector, params) => {
        return S.getCustomPreset(this.name, preset, selector, params);
      };
      getLayerOrderThemeCSS = () => {
        return S.getLayerOrderCSS(this.name);
      };
      getStyleSheet = (extendedCSS = "", props = {}) => {
        if (this.css) {
          const _css = m(this.css, { dt: E2 });
          const _style = Y2(ar`${_css}${extendedCSS}`);
          const _props = Object.entries(props).reduce((acc, [k4, v3]) => acc.push(`${k4}="${v3}"`) && acc, []).join(" ");
          return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
        }
        return "";
      };
      getCommonThemeStyleSheet = (params, props = {}) => {
        return S.getCommonStyleSheet(this.name, params, props);
      };
      getThemeStyleSheet = (params, props = {}) => {
        let css3 = [S.getStyleSheet(this.name, params, props)];
        if (this.style) {
          const name = this.name === "base" ? "global-style" : `${this.name}-style`;
          const _css = ar`${m(this.style, { dt: E2 })}`;
          const _style = Y2(S.transformCSS(name, _css));
          const _props = Object.entries(props).reduce((acc, [k4, v3]) => acc.push(`${k4}="${v3}"`) && acc, []).join(" ");
          css3.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
        }
        return css3.join("");
      };
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BaseStyle, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BaseStyle, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BaseStyle, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider, PrimeNG, PRIME_NG_CONFIG;
var init_primeng_config = __esm({
  "node_modules/primeng/fesm2022/primeng-config.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_api();
    init_esm();
    init_common();
    init_dist2();
    init_primeng_base();
    ThemeProvider = class _ThemeProvider {
      // @todo define type for theme
      theme = signal(void 0, ...ngDevMode ? [{ debugName: "theme" }] : []);
      csp = signal({ nonce: void 0 }, ...ngDevMode ? [{ debugName: "csp" }] : []);
      isThemeChanged = false;
      document = inject(DOCUMENT);
      baseStyle = inject(BaseStyle);
      constructor() {
        effect(() => {
          N.on("theme:change", (newTheme) => {
            untracked(() => {
              this.isThemeChanged = true;
              this.theme.set(newTheme);
            });
          });
        });
        effect(() => {
          const themeValue = this.theme();
          if (this.document && themeValue) {
            if (!this.isThemeChanged) {
              this.onThemeChange(themeValue);
            }
            this.isThemeChanged = false;
          }
        });
      }
      ngOnDestroy() {
        S.clearLoadedStyleNames();
        N.clear();
      }
      onThemeChange(value) {
        S.setTheme(value);
        if (this.document) {
          this.loadCommonTheme();
        }
      }
      loadCommonTheme() {
        if (this.theme() === "none")
          return;
        if (!S.isStyleNameLoaded("common")) {
          const { primitive, semantic, global, style: style11 } = this.baseStyle.getCommonTheme?.() || {};
          const styleOptions = { nonce: this.csp?.()?.nonce };
          this.baseStyle.load(primitive?.css, __spreadValues({ name: "primitive-variables" }, styleOptions));
          this.baseStyle.load(semantic?.css, __spreadValues({ name: "semantic-variables" }, styleOptions));
          this.baseStyle.load(global?.css, __spreadValues({ name: "global-variables" }, styleOptions));
          this.baseStyle.loadBaseStyle(__spreadValues({ name: "global-style" }, styleOptions), style11);
          S.setLoadedStyleName("common");
        }
      }
      setThemeConfig(config) {
        const { theme, csp } = config || {};
        if (theme)
          this.theme.set(theme);
        if (csp)
          this.csp.set(csp);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ThemeProvider, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ThemeProvider, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ThemeProvider, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    PrimeNG = class _PrimeNG extends ThemeProvider {
      ripple = signal(false, ...ngDevMode ? [{ debugName: "ripple" }] : []);
      platformId = inject(PLATFORM_ID);
      /**
       * @deprecated Since v20. Use `inputVariant` instead.
       */
      inputStyle = signal(null, ...ngDevMode ? [{ debugName: "inputStyle" }] : []);
      inputVariant = signal(null, ...ngDevMode ? [{ debugName: "inputVariant" }] : []);
      overlayAppendTo = signal("self", ...ngDevMode ? [{ debugName: "overlayAppendTo" }] : []);
      overlayOptions = {};
      csp = signal({ nonce: void 0 }, ...ngDevMode ? [{ debugName: "csp" }] : []);
      /**
       * Indicates whether the component should be rendered without styles.
       *
       * @experimental
       * This property is not yet implemented. It will be available in a future release.
       */
      unstyled = signal(void 0, ...ngDevMode ? [{ debugName: "unstyled" }] : []);
      pt = signal(void 0, ...ngDevMode ? [{ debugName: "pt" }] : []);
      ptOptions = signal(void 0, ...ngDevMode ? [{ debugName: "ptOptions" }] : []);
      filterMatchModeOptions = {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
      };
      translation = {
        startsWith: "Starts with",
        contains: "Contains",
        notContains: "Not contains",
        endsWith: "Ends with",
        equals: "Equals",
        notEquals: "Not equals",
        noFilter: "No Filter",
        lt: "Less than",
        lte: "Less than or equal to",
        gt: "Greater than",
        gte: "Greater than or equal to",
        is: "Is",
        isNot: "Is not",
        before: "Before",
        after: "After",
        dateIs: "Date is",
        dateIsNot: "Date is not",
        dateBefore: "Date is before",
        dateAfter: "Date is after",
        clear: "Clear",
        apply: "Apply",
        matchAll: "Match All",
        matchAny: "Match Any",
        addRule: "Add Rule",
        removeRule: "Remove Rule",
        accept: "Yes",
        reject: "No",
        choose: "Choose",
        completed: "Completed",
        upload: "Upload",
        cancel: "Cancel",
        pending: "Pending",
        fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        chooseYear: "Choose Year",
        chooseMonth: "Choose Month",
        chooseDate: "Choose Date",
        prevDecade: "Previous Decade",
        nextDecade: "Next Decade",
        prevYear: "Previous Year",
        nextYear: "Next Year",
        prevMonth: "Previous Month",
        nextMonth: "Next Month",
        prevHour: "Previous Hour",
        nextHour: "Next Hour",
        prevMinute: "Previous Minute",
        nextMinute: "Next Minute",
        prevSecond: "Previous Second",
        nextSecond: "Next Second",
        am: "am",
        pm: "pm",
        dateFormat: "mm/dd/yy",
        firstDayOfWeek: 0,
        today: "Today",
        weekHeader: "Wk",
        weak: "Weak",
        medium: "Medium",
        strong: "Strong",
        passwordPrompt: "Enter a password",
        emptyMessage: "No results found",
        searchMessage: "Search results are available",
        selectionMessage: "{0} items selected",
        emptySelectionMessage: "No selected item",
        emptySearchMessage: "No results found",
        emptyFilterMessage: "No results found",
        fileChosenMessage: "Files",
        noFileChosenMessage: "No file chosen",
        aria: {
          trueLabel: "True",
          falseLabel: "False",
          nullLabel: "Not Selected",
          star: "1 star",
          stars: "{star} stars",
          selectAll: "All items selected",
          unselectAll: "All items unselected",
          close: "Close",
          previous: "Previous",
          next: "Next",
          navigation: "Navigation",
          scrollTop: "Scroll Top",
          moveTop: "Move Top",
          moveUp: "Move Up",
          moveDown: "Move Down",
          moveBottom: "Move Bottom",
          moveToTarget: "Move to Target",
          moveToSource: "Move to Source",
          moveAllToTarget: "Move All to Target",
          moveAllToSource: "Move All to Source",
          pageLabel: "{page}",
          firstPageLabel: "First Page",
          lastPageLabel: "Last Page",
          nextPageLabel: "Next Page",
          prevPageLabel: "Previous Page",
          rowsPerPageLabel: "Rows per page",
          previousPageLabel: "Previous Page",
          jumpToPageDropdownLabel: "Jump to Page Dropdown",
          jumpToPageInputLabel: "Jump to Page Input",
          selectRow: "Row Selected",
          unselectRow: "Row Unselected",
          expandRow: "Row Expanded",
          collapseRow: "Row Collapsed",
          showFilterMenu: "Show Filter Menu",
          hideFilterMenu: "Hide Filter Menu",
          filterOperator: "Filter Operator",
          filterConstraint: "Filter Constraint",
          editRow: "Row Edit",
          saveEdit: "Save Edit",
          cancelEdit: "Cancel Edit",
          listView: "List View",
          gridView: "Grid View",
          slide: "Slide",
          slideNumber: "{slideNumber}",
          zoomImage: "Zoom Image",
          zoomIn: "Zoom In",
          zoomOut: "Zoom Out",
          rotateRight: "Rotate Right",
          rotateLeft: "Rotate Left",
          listLabel: "Option List",
          selectColor: "Select a color",
          removeLabel: "Remove",
          browseFiles: "Browse Files",
          maximizeLabel: "Maximize",
          minimizeLabel: "Minimize"
        }
      };
      zIndex = {
        modal: 1100,
        overlay: 1e3,
        menu: 1e3,
        tooltip: 1100
      };
      translationSource = new Subject();
      translationObserver = this.translationSource.asObservable();
      getTranslation(key) {
        return this.translation[key];
      }
      setTranslation(value) {
        this.translation = __spreadValues(__spreadValues({}, this.translation), value);
        this.translationSource.next(this.translation);
      }
      setConfig(config) {
        const { csp, ripple, inputStyle, inputVariant, theme, overlayOptions, translation, filterMatchModeOptions, overlayAppendTo, zIndex, ptOptions, pt, unstyled } = config || {};
        if (csp)
          this.csp.set(csp);
        if (overlayAppendTo)
          this.overlayAppendTo.set(overlayAppendTo);
        if (ripple)
          this.ripple.set(ripple);
        if (inputStyle)
          this.inputStyle.set(inputStyle);
        if (inputVariant)
          this.inputVariant.set(inputVariant);
        if (overlayOptions)
          this.overlayOptions = overlayOptions;
        if (translation)
          this.setTranslation(translation);
        if (filterMatchModeOptions)
          this.filterMatchModeOptions = filterMatchModeOptions;
        if (zIndex)
          this.zIndex = zIndex;
        if (pt)
          this.pt.set(pt);
        if (ptOptions)
          this.ptOptions.set(ptOptions);
        if (unstyled)
          this.unstyled.set(unstyled);
        if (theme)
          this.setThemeConfig({
            theme,
            csp
          });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _PrimeNG, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _PrimeNG, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: PrimeNG, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");
  }
});

// node_modules/primeng/fesm2022/primeng-basecomponent.mjs
var BaseComponentStyle, PARENT_INSTANCE, BaseComponent;
var init_primeng_basecomponent = __esm({
  "node_modules/primeng/fesm2022/primeng-basecomponent.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dist2();
    init_dist();
    init_primeng_base();
    init_primeng_config();
    BaseComponentStyle = class _BaseComponentStyle extends BaseStyle {
      name = "common";
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BaseComponentStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BaseComponentStyle, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BaseComponentStyle, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    PARENT_INSTANCE = new InjectionToken("PARENT_INSTANCE");
    BaseComponent = class _BaseComponent {
      document = inject(DOCUMENT);
      platformId = inject(PLATFORM_ID);
      el = inject(ElementRef);
      injector = inject(Injector);
      cd = inject(ChangeDetectorRef);
      renderer = inject(Renderer2);
      config = inject(PrimeNG);
      $parentInstance = inject(PARENT_INSTANCE, { optional: true, skipSelf: true }) ?? void 0;
      baseComponentStyle = inject(BaseComponentStyle);
      baseStyle = inject(BaseStyle);
      scopedStyleEl;
      parent = this.$params.parent;
      cn = f;
      _themeScopedListener;
      /******************** Inputs ********************/
      /**
       * Defines scoped design tokens of the component.
       * @defaultValue undefined
       * @group Props
       */
      dt = input(...ngDevMode ? [void 0, { debugName: "dt" }] : []);
      /**
       * Indicates whether the component should be rendered without styles.
       *
       * @experimental
       * This property is not yet implemented. It will be available in a future release.
       */
      unstyled = input(...ngDevMode ? [void 0, { debugName: "unstyled" }] : []);
      /**
       * Used to pass attributes to DOM elements inside the component.
       * @defaultValue undefined
       * @group Props
       */
      pt = input(...ngDevMode ? [void 0, { debugName: "pt" }] : []);
      /**
       * Used to configure passthrough(pt) options of the component.
       * @group Props
       * @defaultValue undefined
       */
      ptOptions = input(...ngDevMode ? [void 0, { debugName: "ptOptions" }] : []);
      /******************** Computed ********************/
      $attrSelector = s3("pc");
      get $name() {
        return this["componentName"] || this.constructor?.name?.replace(/^_/, "") || "UnknownComponent";
      }
      get $hostName() {
        return this["hostName"];
      }
      $unstyled = computed(() => {
        return this.unstyled() !== void 0 ? this.unstyled() : this.config?.unstyled() || false;
      }, ...ngDevMode ? [{ debugName: "$unstyled" }] : []);
      $pt = computed(() => {
        return m(this.pt() || this.directivePT(), this.$params);
      }, ...ngDevMode ? [{ debugName: "$pt" }] : []);
      directivePT = signal(void 0, ...ngDevMode ? [{ debugName: "directivePT" }] : []);
      get $globalPT() {
        return this._getPT(this.config?.pt(), void 0, (value) => m(value, this.$params));
      }
      get $defaultPT() {
        return this._getPT(this.config?.pt(), void 0, (value) => this._getOptionValue(value, this.$hostName || this.$name, this.$params) || m(value, this.$params));
      }
      get $style() {
        return __spreadValues(__spreadValues({ theme: void 0, css: void 0, classes: void 0, inlineStyles: void 0 }, (this._getHostInstance(this) || {}).$style), this["_componentStyle"]);
      }
      get $styleOptions() {
        return { nonce: this.config?.csp().nonce };
      }
      get $params() {
        const parentInstance = this._getHostInstance(this) || this.$parentInstance;
        return {
          instance: this,
          parent: {
            instance: parentInstance
          }
        };
      }
      /******************** Lifecycle Hooks ********************/
      onInit() {
      }
      onChanges(changes) {
      }
      onDoCheck() {
      }
      onAfterContentInit() {
      }
      onAfterContentChecked() {
      }
      onAfterViewInit() {
      }
      onAfterViewChecked() {
      }
      onDestroy() {
      }
      /******************** Angular Lifecycle Hooks ********************/
      constructor() {
        effect((onCleanup) => {
          if (this.document && !isPlatformServer(this.platformId)) {
            N.off("theme:change", this._themeScopedListener);
            if (this.dt()) {
              this._loadScopedThemeStyles(this.dt());
              this._themeScopedListener = () => this._loadScopedThemeStyles(this.dt());
              this._themeChangeListener(this._themeScopedListener);
            } else {
              this._unloadScopedThemeStyles();
            }
          }
          onCleanup(() => {
            N.off("theme:change", this._themeScopedListener);
          });
        });
        effect((onCleanup) => {
          if (this.document && !isPlatformServer(this.platformId)) {
            N.off("theme:change", this._loadCoreStyles);
            if (!this.$unstyled()) {
              this._loadCoreStyles();
              this._themeChangeListener(this._loadCoreStyles);
            }
          }
          onCleanup(() => {
            N.off("theme:change", this._loadCoreStyles);
          });
        });
        this._hook("onBeforeInit");
      }
      /**
       * ⚠ Do not override ngOnInit!
       *
       * Use 'onInit()' in subclasses instead.
       */
      ngOnInit() {
        this._loadCoreStyles();
        this._loadStyles();
        this.onInit();
        this._hook("onInit");
      }
      /**
       * ⚠ Do not override ngOnChanges!
       *
       * Use 'onChanges(changes: SimpleChanges)' in subclasses instead.
       */
      ngOnChanges(changes) {
        this.onChanges(changes);
        this._hook("onChanges", changes);
      }
      /**
       * ⚠ Do not override ngDoCheck!
       *
       * Use 'onDoCheck()' in subclasses instead.
       */
      ngDoCheck() {
        this.onDoCheck();
        this._hook("onDoCheck");
      }
      /**
       * ⚠ Do not override ngAfterContentInit!
       *
       * Use 'onAfterContentInit()' in subclasses instead.
       */
      ngAfterContentInit() {
        this.onAfterContentInit();
        this._hook("onAfterContentInit");
      }
      /**
       * ⚠ Do not override ngAfterContentChecked!
       *
       * Use 'onAfterContentChecked()' in subclasses instead.
       */
      ngAfterContentChecked() {
        this.onAfterContentChecked();
        this._hook("onAfterContentChecked");
      }
      /**
       * ⚠ Do not override ngAfterViewInit!
       *
       * Use 'onAfterViewInit()' in subclasses instead.
       */
      ngAfterViewInit() {
        this.el?.nativeElement?.setAttribute(this.$attrSelector, "");
        this.onAfterViewInit();
        this._hook("onAfterViewInit");
      }
      /**
       * ⚠ Do not override ngAfterViewChecked!
       *
       * Use 'onAfterViewChecked()' in subclasses instead.
       */
      ngAfterViewChecked() {
        this.onAfterViewChecked();
        this._hook("onAfterViewChecked");
      }
      /**
       * ⚠ Do not override ngOnDestroy!
       *
       * Use 'onDestroy()' in subclasses instead.
       */
      ngOnDestroy() {
        this._removeThemeListeners();
        this._unloadScopedThemeStyles();
        this.onDestroy();
        this._hook("onDestroy");
      }
      /******************** Methods ********************/
      _mergeProps(fn, ...args) {
        return c3(fn) ? fn(...args) : w2(...args);
      }
      _getHostInstance(instance) {
        return instance ? this.$hostName ? this.$name === this.$hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
      }
      _getPropValue(name) {
        return this[name] || this._getHostInstance(this)?.[name];
      }
      _getOptionValue(options, key = "", params = {}) {
        return F2(options, key, params);
      }
      _hook(hookName, ...args) {
        if (!this.$hostName) {
          const selfHook = this._usePT(this._getPT(this.$pt(), this.$name), this._getOptionValue, `hooks.${hookName}`);
          const defaultHook = this._useDefaultPT(this._getOptionValue, `hooks.${hookName}`);
          selfHook?.(...args);
          defaultHook?.(...args);
        }
      }
      /********** Load Styles **********/
      _load() {
        if (!base.isStyleNameLoaded("base")) {
          this.baseStyle.loadBaseCSS(this.$styleOptions);
          this._loadGlobalStyles();
          base.setLoadedStyleName("base");
        }
        this._loadThemeStyles();
      }
      _loadStyles() {
        this._load();
        this._themeChangeListener(() => this._load());
      }
      _loadGlobalStyles() {
        const globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
        s2(globalCSS) && this.baseStyle.load(globalCSS, __spreadValues({ name: "global" }, this.$styleOptions));
      }
      _loadCoreStyles() {
        if (!base.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
          this.baseComponentStyle.loadCSS(this.$styleOptions);
          this.$style.loadCSS(this.$styleOptions);
          base.setLoadedStyleName(this.$style.name);
        }
      }
      _loadThemeStyles() {
        if (this.$unstyled() || this.config?.theme() === "none")
          return;
        if (!S.isStyleNameLoaded("common")) {
          const { primitive, semantic, global, style: style11 } = this.$style?.getCommonTheme?.() || {};
          this.baseStyle.load(primitive?.css, __spreadValues({ name: "primitive-variables" }, this.$styleOptions));
          this.baseStyle.load(semantic?.css, __spreadValues({ name: "semantic-variables" }, this.$styleOptions));
          this.baseStyle.load(global?.css, __spreadValues({ name: "global-variables" }, this.$styleOptions));
          this.baseStyle.loadBaseStyle(__spreadValues({ name: "global-style" }, this.$styleOptions), style11);
          S.setLoadedStyleName("common");
        }
        if (!S.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
          const { css: css3, style: style11 } = this.$style?.getComponentTheme?.() || {};
          this.$style?.load(css3, __spreadValues({ name: `${this.$style?.name}-variables` }, this.$styleOptions));
          this.$style?.loadStyle(__spreadValues({ name: `${this.$style?.name}-style` }, this.$styleOptions), style11);
          S.setLoadedStyleName(this.$style?.name);
        }
        if (!S.isStyleNameLoaded("layer-order")) {
          const layerOrder = this.$style?.getLayerOrderThemeCSS?.();
          this.baseStyle.load(layerOrder, __spreadValues({ name: "layer-order", first: true }, this.$styleOptions));
          S.setLoadedStyleName("layer-order");
        }
      }
      _loadScopedThemeStyles(preset) {
        const { css: css3 } = this.$style?.getPresetTheme?.(preset, `[${this.$attrSelector}]`) || {};
        const scopedStyle = this.$style?.load(css3, __spreadValues({ name: `${this.$attrSelector}-${this.$style?.name}` }, this.$styleOptions));
        this.scopedStyleEl = scopedStyle?.el;
      }
      _unloadScopedThemeStyles() {
        this.scopedStyleEl?.remove();
      }
      _themeChangeListener(callback = () => {
      }) {
        base.clearLoadedStyleNames();
        N.on("theme:change", callback.bind(this));
      }
      _removeThemeListeners() {
        N.off("theme:change", this._loadCoreStyles);
        N.off("theme:change", this._load);
        N.off("theme:change", this._themeScopedListener);
      }
      /********** Passthrough **********/
      _getPTValue(obj = {}, key = "", params = {}, searchInDefaultPT = true) {
        const searchOut = /./g.test(key) && !!params[key.split(".")[0]];
        const { mergeSections = true, mergeProps: useMergeProps = false } = this._getPropValue("ptOptions")?.() || this.config?.["ptOptions"]?.() || {};
        const global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
        const self = searchOut ? void 0 : this._usePT(this._getPT(obj, this.$hostName || this.$name), this._getPTClassValue, key, __spreadProps(__spreadValues({}, params), { global: global || {} }));
        const datasets = this._getPTDatasets(key);
        return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : __spreadValues(__spreadValues(__spreadValues({}, global), self), datasets) : __spreadValues(__spreadValues({}, self), datasets);
      }
      _getPTDatasets(key = "") {
        const datasetPrefix = "data-pc-";
        const isExtended = key === "root" && s2(this.$pt()?.["data-pc-section"]);
        return key !== "transition" && __spreadProps(__spreadValues({}, key === "root" && __spreadProps(__spreadValues({
          [`${datasetPrefix}name`]: g(isExtended ? this.$pt()?.["data-pc-section"] : this.$name)
        }, isExtended && { [`${datasetPrefix}extend`]: g(this.$name) }), {
          [`${this.$attrSelector}`]: ""
          // @todo - use `data-pc-id: this.$attrSelector` instead.
        })), {
          [`${datasetPrefix}section`]: g(key.includes(".") ? key.split(".").at(-1) ?? "" : key)
        });
      }
      _getPTClassValue(options, key, params) {
        const value = this._getOptionValue(options, key, params);
        return a(value) || C2(value) ? { class: value } : value;
      }
      _getPT(pt, key = "", callback) {
        const getValue = (value, checkSameKey = false) => {
          const computedValue = callback ? callback(value) : value;
          const _key = g(key);
          const _cKey = g(this.$hostName || this.$name);
          return (checkSameKey ? _key !== _cKey ? computedValue?.[_key] : void 0 : computedValue?.[_key]) ?? computedValue;
        };
        return pt?.hasOwnProperty("_usept") ? {
          _usept: pt["_usept"],
          originalValue: getValue(pt.originalValue),
          value: getValue(pt.value)
        } : getValue(pt, true);
      }
      _usePT(pt, callback, key, params) {
        const fn = (value) => callback?.call(this, value, key, params);
        if (pt?.hasOwnProperty("_usept")) {
          const { mergeSections = true, mergeProps: useMergeProps = false } = pt["_usept"] || this.config?.["ptOptions"]() || {};
          const originalValue = fn(pt.originalValue);
          const value = fn(pt.value);
          if (originalValue === void 0 && value === void 0)
            return void 0;
          else if (a(value))
            return value;
          else if (a(originalValue))
            return originalValue;
          return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : __spreadValues(__spreadValues({}, originalValue), value) : value;
        }
        return fn(pt);
      }
      _useGlobalPT(callback, key, params) {
        return this._usePT(this.$globalPT, callback, key, params);
      }
      _useDefaultPT(callback, key, params) {
        return this._usePT(this.$defaultPT, callback, key, params);
      }
      /******************** Exposed API ********************/
      ptm(key = "", params = {}) {
        return this._getPTValue(this.$pt(), key, __spreadValues(__spreadValues({}, this.$params), params));
      }
      ptms(keys, params = {}) {
        return keys.reduce((acc, arg) => {
          acc = w2(acc, this.ptm(arg, params)) || {};
          return acc;
        }, {});
      }
      ptmo(obj = {}, key = "", params = {}) {
        return this._getPTValue(obj, key, __spreadValues({ instance: this }, params), false);
      }
      cx(key, params = {}) {
        return !this.$unstyled() ? f(this._getOptionValue(this.$style.classes, key, __spreadValues(__spreadValues({}, this.$params), params))) : void 0;
      }
      sx(key = "", when = true, params = {}) {
        if (when) {
          const self = this._getOptionValue(this.$style.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
          const base2 = this._getOptionValue(this.baseComponentStyle.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
          return __spreadValues(__spreadValues({}, base2), self);
        }
        return void 0;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BaseComponent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.3.4", type: _BaseComponent, isStandalone: true, inputs: { dt: { classPropertyName: "dt", publicName: "dt", isSignal: true, isRequired: false, transformFunction: null }, unstyled: { classPropertyName: "unstyled", publicName: "unstyled", isSignal: true, isRequired: false, transformFunction: null }, pt: { classPropertyName: "pt", publicName: "pt", isSignal: true, isRequired: false, transformFunction: null }, ptOptions: { classPropertyName: "ptOptions", publicName: "ptOptions", isSignal: true, isRequired: false, transformFunction: null } }, providers: [BaseComponentStyle, BaseStyle], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BaseComponent, decorators: [{
      type: Directive,
      args: [{
        standalone: true,
        providers: [BaseComponentStyle, BaseStyle]
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/primeng/fesm2022/primeng-bind.mjs
var Bind, BindModule;
var init_primeng_bind = __esm({
  "node_modules/primeng/fesm2022/primeng-bind.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    Bind = class _Bind {
      el;
      renderer;
      /**
       * Dynamic attributes, properties, and event listeners to be applied to the host element.
       * @group Props
       */
      pBind = input(void 0, ...ngDevMode ? [{ debugName: "pBind" }] : []);
      _attrs = signal(void 0, ...ngDevMode ? [{ debugName: "_attrs" }] : []);
      attrs = computed(() => this._attrs() || this.pBind(), ...ngDevMode ? [{ debugName: "attrs" }] : []);
      styles = computed(() => this.attrs()?.style, ...ngDevMode ? [{ debugName: "styles" }] : []);
      classes = computed(() => f(this.attrs()?.class), ...ngDevMode ? [{ debugName: "classes" }] : []);
      listeners = [];
      constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        effect(() => {
          const _a = this.attrs() || {}, { style: style11, class: className } = _a, rest = __objRest(_a, ["style", "class"]);
          for (const [key, value] of Object.entries(rest)) {
            if (key.startsWith("on") && typeof value === "function") {
              const eventName = key.slice(2).toLowerCase();
              if (!this.listeners.some((l3) => l3.eventName === eventName)) {
                const unlisten = this.renderer.listen(this.el.nativeElement, eventName, value);
                this.listeners.push({ eventName, unlisten });
              }
            } else if (value === null || value === void 0) {
              this.renderer.removeAttribute(this.el.nativeElement, key);
            } else {
              this.renderer.setAttribute(this.el.nativeElement, key, value.toString());
              if (key in this.el.nativeElement) {
                this.el.nativeElement[key] = value;
              }
            }
          }
        });
      }
      ngOnDestroy() {
        this.clearListeners();
      }
      setAttrs(attrs) {
        if (!k2(this._attrs(), attrs)) {
          this._attrs.set(attrs);
        }
      }
      clearListeners() {
        this.listeners.forEach(({ unlisten }) => unlisten());
        this.listeners = [];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _Bind, deps: [{ token: ElementRef }, { token: Renderer2 }], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.3.4", type: _Bind, isStandalone: true, selector: "[pBind]", inputs: { pBind: { classPropertyName: "pBind", publicName: "pBind", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "style": "styles()", "class": "classes()" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: Bind, decorators: [{
      type: Directive,
      args: [{
        selector: "[pBind]",
        standalone: true,
        host: {
          "[style]": "styles()",
          "[class]": "classes()"
        }
      }]
    }], ctorParameters: () => [{ type: ElementRef }, { type: Renderer2 }] });
    BindModule = class _BindModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BindModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.4", ngImport: core_exports, type: _BindModule, imports: [Bind], exports: [Bind] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BindModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BindModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Bind],
        exports: [Bind]
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-types-button.mjs
var init_primeng_types_button = __esm({
  "node_modules/primeng/fesm2022/primeng-types-button.mjs"() {
    "use strict";
  }
});

// node_modules/primeng/fesm2022/primeng-dom.mjs
function blockBodyScroll() {
  st({ variableName: rr("scrollbar.width").name });
}
function unblockBodyScroll() {
  dt({ variableName: rr("scrollbar.width").name });
}
var DomHandler, ConnectedOverlayScrollHandler;
var init_primeng_dom = __esm({
  "node_modules/primeng/fesm2022/primeng-dom.mjs"() {
    "use strict";
    init_dist();
    init_dist();
    init_dist2();
    DomHandler = class _DomHandler {
      static zindex = 1e3;
      static calculatedScrollbarWidth = null;
      static calculatedScrollbarHeight = null;
      static browser;
      static addClass(element, className) {
        if (element && className) {
          if (element.classList)
            element.classList.add(className);
          else
            element.className += " " + className;
        }
      }
      static addMultipleClasses(element, className) {
        if (element && className) {
          if (element.classList) {
            let styles = className.trim().split(" ");
            for (let i3 = 0; i3 < styles.length; i3++) {
              element.classList.add(styles[i3]);
            }
          } else {
            let styles = className.split(" ");
            for (let i3 = 0; i3 < styles.length; i3++) {
              element.className += " " + styles[i3];
            }
          }
        }
      }
      static removeClass(element, className) {
        if (element && className) {
          if (element.classList)
            element.classList.remove(className);
          else
            element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
      }
      static removeMultipleClasses(element, classNames) {
        if (element && classNames) {
          [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
        }
      }
      static hasClass(element, className) {
        if (element && className) {
          if (element.classList)
            return element.classList.contains(className);
          else
            return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
        }
        return false;
      }
      static siblings(element) {
        return Array.prototype.filter.call(element.parentNode.children, function(child) {
          return child !== element;
        });
      }
      static find(element, selector) {
        return Array.from(element.querySelectorAll(selector));
      }
      static findSingle(element, selector) {
        return this.isElement(element) ? element.querySelector(selector) : null;
      }
      static index(element) {
        let children = element.parentNode.childNodes;
        let num = 0;
        for (var i3 = 0; i3 < children.length; i3++) {
          if (children[i3] == element)
            return num;
          if (children[i3].nodeType == 1)
            num++;
        }
        return -1;
      }
      static indexWithinGroup(element, attributeName) {
        let children = element.parentNode ? element.parentNode.childNodes : [];
        let num = 0;
        for (var i3 = 0; i3 < children.length; i3++) {
          if (children[i3] == element)
            return num;
          if (children[i3].attributes && children[i3].attributes[attributeName] && children[i3].nodeType == 1)
            num++;
        }
        return -1;
      }
      static appendOverlay(overlay, target, appendTo = "self") {
        if (appendTo !== "self" && overlay && target) {
          this.appendChild(overlay, target);
        }
      }
      static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
        if (overlay && target) {
          if (calculateMinWidth) {
            overlay.style.minWidth = `${_DomHandler.getOuterWidth(target)}px`;
          }
          if (appendTo === "self") {
            this.relativePosition(overlay, target);
          } else {
            this.absolutePosition(overlay, target);
          }
        }
      }
      static relativePosition(element, target, gutter = true) {
        const getClosestRelativeElement = (el) => {
          if (!el)
            return;
          return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
        };
        const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        const targetHeight = target.offsetHeight;
        const targetOffset = target.getBoundingClientRect();
        const windowScrollTop = this.getWindowScrollTop();
        const windowScrollLeft = this.getWindowScrollLeft();
        const viewport = this.getViewport();
        const relativeElement = getClosestRelativeElement(element);
        const relativeElementOffset = relativeElement?.getBoundingClientRect() || {
          top: -1 * windowScrollTop,
          left: -1 * windowScrollLeft
        };
        let top, left, origin2 = "top";
        if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
          top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
          origin2 = "bottom";
          if (targetOffset.top + top < 0) {
            top = -1 * targetOffset.top;
          }
        } else {
          top = targetHeight + targetOffset.top - relativeElementOffset.top;
          origin2 = "top";
        }
        const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
        const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
        if (elementDimensions.width > viewport.width) {
          left = (targetOffset.left - relativeElementOffset.left) * -1;
        } else if (horizontalOverflow > 0) {
          left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
        } else {
          left = targetOffset.left - relativeElementOffset.left;
        }
        element.style.top = top + "px";
        element.style.left = left + "px";
        element.style.transformOrigin = origin2;
        if (gutter) {
          const gutterValue = x(/-anchor-gutter$/)?.value;
          element.style.marginTop = origin2 === "bottom" ? `calc(${gutterValue ?? "2px"} * -1)` : gutterValue ?? "";
        }
      }
      static absolutePosition(element, target, gutter = true) {
        const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        const elementOuterHeight = elementDimensions.height;
        const elementOuterWidth = elementDimensions.width;
        const targetOuterHeight = target.offsetHeight;
        const targetOuterWidth = target.offsetWidth;
        const targetOffset = target.getBoundingClientRect();
        const windowScrollTop = this.getWindowScrollTop();
        const windowScrollLeft = this.getWindowScrollLeft();
        const viewport = this.getViewport();
        let top, left;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
          top = targetOffset.top + windowScrollTop - elementOuterHeight;
          element.style.transformOrigin = "bottom";
          if (top < 0) {
            top = windowScrollTop;
          }
        } else {
          top = targetOuterHeight + targetOffset.top + windowScrollTop;
          element.style.transformOrigin = "top";
        }
        if (targetOffset.left + elementOuterWidth > viewport.width)
          left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else
          left = targetOffset.left + windowScrollLeft;
        element.style.top = top + "px";
        element.style.left = left + "px";
        gutter && (element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
      }
      static getParents(element, parents = []) {
        return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
      }
      static getScrollableParents(element) {
        let scrollableParents = [];
        if (element) {
          let parents = this.getParents(element);
          const overflowRegex = /(auto|scroll)/;
          const overflowCheck = (node) => {
            let styleDeclaration = window["getComputedStyle"](node, null);
            return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
          };
          for (let parent of parents) {
            let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
            if (scrollSelectors) {
              let selectors = scrollSelectors.split(",");
              for (let selector of selectors) {
                let el = this.findSingle(parent, selector);
                if (el && overflowCheck(el)) {
                  scrollableParents.push(el);
                }
              }
            }
            if (parent.nodeType !== 9 && overflowCheck(parent)) {
              scrollableParents.push(parent);
            }
          }
        }
        return scrollableParents;
      }
      static getHiddenElementOuterHeight(element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        let elementHeight = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementHeight;
      }
      static getHiddenElementOuterWidth(element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        let elementWidth = element.offsetWidth;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementWidth;
      }
      static getHiddenElementDimensions(element) {
        let dimensions = {};
        element.style.visibility = "hidden";
        element.style.display = "block";
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";
        return dimensions;
      }
      static scrollInView(container, item) {
        let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
        let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
        let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        let scroll = container.scrollTop;
        let elementHeight = container.clientHeight;
        let itemHeight = this.getOuterHeight(item);
        if (offset < 0) {
          container.scrollTop = scroll + offset;
        } else if (offset + itemHeight > elementHeight) {
          container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
      }
      static fadeIn(element, duration) {
        element.style.opacity = 0;
        let last = +/* @__PURE__ */ new Date();
        let opacity = 0;
        let tick = function() {
          opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
          element.style.opacity = opacity;
          last = +/* @__PURE__ */ new Date();
          if (+opacity < 1) {
            if (window.requestAnimationFrame)
              window.requestAnimationFrame(tick);
            else
              setTimeout(tick, 16);
          }
        };
        tick();
      }
      static fadeOut(element, ms) {
        var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
        let fading = setInterval(() => {
          opacity = opacity - gap;
          if (opacity <= 0) {
            opacity = 0;
            clearInterval(fading);
          }
          element.style.opacity = opacity;
        }, interval);
      }
      static getWindowScrollTop() {
        let doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      }
      static getWindowScrollLeft() {
        let doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      }
      static matches(element, selector) {
        var p3 = Element.prototype;
        var f2 = p3["matches"] || p3.webkitMatchesSelector || p3["mozMatchesSelector"] || p3["msMatchesSelector"] || function(s4) {
          return [].indexOf.call(document.querySelectorAll(s4), this) !== -1;
        };
        return f2.call(element, selector);
      }
      static getOuterWidth(el, margin) {
        let width = el.offsetWidth;
        if (margin) {
          let style11 = getComputedStyle(el);
          width += parseFloat(style11.marginLeft) + parseFloat(style11.marginRight);
        }
        return width;
      }
      static getHorizontalPadding(el) {
        let style11 = getComputedStyle(el);
        return parseFloat(style11.paddingLeft) + parseFloat(style11.paddingRight);
      }
      static getHorizontalMargin(el) {
        let style11 = getComputedStyle(el);
        return parseFloat(style11.marginLeft) + parseFloat(style11.marginRight);
      }
      static innerWidth(el) {
        let width = el.offsetWidth;
        let style11 = getComputedStyle(el);
        width += parseFloat(style11.paddingLeft) + parseFloat(style11.paddingRight);
        return width;
      }
      static width(el) {
        let width = el.offsetWidth;
        let style11 = getComputedStyle(el);
        width -= parseFloat(style11.paddingLeft) + parseFloat(style11.paddingRight);
        return width;
      }
      static getInnerHeight(el) {
        let height = el.offsetHeight;
        let style11 = getComputedStyle(el);
        height += parseFloat(style11.paddingTop) + parseFloat(style11.paddingBottom);
        return height;
      }
      static getOuterHeight(el, margin) {
        let height = el.offsetHeight;
        if (margin) {
          let style11 = getComputedStyle(el);
          height += parseFloat(style11.marginTop) + parseFloat(style11.marginBottom);
        }
        return height;
      }
      static getHeight(el) {
        let height = el.offsetHeight;
        let style11 = getComputedStyle(el);
        height -= parseFloat(style11.paddingTop) + parseFloat(style11.paddingBottom) + parseFloat(style11.borderTopWidth) + parseFloat(style11.borderBottomWidth);
        return height;
      }
      static getWidth(el) {
        let width = el.offsetWidth;
        let style11 = getComputedStyle(el);
        width -= parseFloat(style11.paddingLeft) + parseFloat(style11.paddingRight) + parseFloat(style11.borderLeftWidth) + parseFloat(style11.borderRightWidth);
        return width;
      }
      static getViewport() {
        let win = window, d2 = document, e = d2.documentElement, g3 = d2.getElementsByTagName("body")[0], w3 = win.innerWidth || e.clientWidth || g3.clientWidth, h3 = win.innerHeight || e.clientHeight || g3.clientHeight;
        return { width: w3, height: h3 };
      }
      static getOffset(el) {
        var rect = el.getBoundingClientRect();
        return {
          top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
        };
      }
      static replaceElementWith(element, replacementElement) {
        let parentNode = element.parentNode;
        if (!parentNode)
          throw `Can't replace element`;
        return parentNode.replaceChild(replacementElement, element);
      }
      static getUserAgent() {
        if (navigator && this.isClient()) {
          return navigator.userAgent;
        }
      }
      static isIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0) {
          return true;
        }
        var trident = ua.indexOf("Trident/");
        if (trident > 0) {
          var rv = ua.indexOf("rv:");
          return true;
        }
        var edge = ua.indexOf("Edge/");
        if (edge > 0) {
          return true;
        }
        return false;
      }
      static isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
      }
      static isAndroid() {
        return /(android)/i.test(navigator.userAgent);
      }
      static isTouchDevice() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
      }
      static appendChild(element, target) {
        if (this.isElement(target))
          target.appendChild(element);
        else if (target && target.el && target.el.nativeElement)
          target.el.nativeElement.appendChild(element);
        else
          throw "Cannot append " + target + " to " + element;
      }
      static removeChild(element, target) {
        if (this.isElement(target))
          target.removeChild(element);
        else if (target.el && target.el.nativeElement)
          target.el.nativeElement.removeChild(element);
        else
          throw "Cannot remove " + element + " from " + target;
      }
      static removeElement(element) {
        if (!("remove" in Element.prototype))
          element.parentNode?.removeChild(element);
        else
          element.remove();
      }
      static isElement(obj) {
        return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
      }
      static calculateScrollbarWidth(el) {
        if (el) {
          let style11 = getComputedStyle(el);
          return el.offsetWidth - el.clientWidth - parseFloat(style11.borderLeftWidth) - parseFloat(style11.borderRightWidth);
        } else {
          if (this.calculatedScrollbarWidth !== null)
            return this.calculatedScrollbarWidth;
          let scrollDiv = document.createElement("div");
          scrollDiv.className = "p-scrollbar-measure";
          document.body.appendChild(scrollDiv);
          let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          this.calculatedScrollbarWidth = scrollbarWidth;
          return scrollbarWidth;
        }
      }
      static calculateScrollbarHeight() {
        if (this.calculatedScrollbarHeight !== null)
          return this.calculatedScrollbarHeight;
        let scrollDiv = document.createElement("div");
        scrollDiv.className = "p-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarHeight;
        return scrollbarHeight;
      }
      static invokeElementMethod(element, methodName, args) {
        element[methodName].apply(element, args);
      }
      static clearSelection() {
        if (window.getSelection && window.getSelection()) {
          if (window.getSelection()?.empty) {
            window.getSelection()?.empty();
          } else if (window.getSelection()?.removeAllRanges && (window.getSelection()?.rangeCount || 0) > 0 && (window.getSelection()?.getRangeAt(0)?.getClientRects()?.length || 0) > 0) {
            window.getSelection()?.removeAllRanges();
          }
        } else if (document["selection"] && document["selection"].empty) {
          try {
            document["selection"].empty();
          } catch (error) {
          }
        }
      }
      static getBrowser() {
        if (!this.browser) {
          let matched = this.resolveUserAgent();
          this.browser = {};
          if (matched.browser) {
            this.browser[matched.browser] = true;
            this.browser["version"] = matched.version;
          }
          if (this.browser["chrome"]) {
            this.browser["webkit"] = true;
          } else if (this.browser["webkit"]) {
            this.browser["safari"] = true;
          }
        }
        return this.browser;
      }
      static resolveUserAgent() {
        let ua = navigator.userAgent.toLowerCase();
        let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
        return {
          browser: match[1] || "",
          version: match[2] || "0"
        };
      }
      static isInteger(value) {
        if (Number.isInteger) {
          return Number.isInteger(value);
        } else {
          return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
        }
      }
      static isHidden(element) {
        return !element || element.offsetParent === null;
      }
      static isVisible(element) {
        return element && element.offsetParent != null;
      }
      static isExist(element) {
        return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
      }
      static focus(element, options) {
        element && document.activeElement !== element && element.focus(options);
      }
      static getFocusableSelectorString(selector = "") {
        return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`;
      }
      static getFocusableElements(element, selector = "") {
        let focusableElements = this.find(element, this.getFocusableSelectorString(selector));
        let visibleFocusableElements = [];
        for (let focusableElement of focusableElements) {
          const computedStyle = getComputedStyle(focusableElement);
          if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
            visibleFocusableElements.push(focusableElement);
        }
        return visibleFocusableElements;
      }
      static getFocusableElement(element, selector = "") {
        let focusableElement = this.findSingle(element, this.getFocusableSelectorString(selector));
        if (focusableElement) {
          const computedStyle = getComputedStyle(focusableElement);
          if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
            return focusableElement;
        }
        return null;
      }
      static getFirstFocusableElement(element, selector = "") {
        const focusableElements = this.getFocusableElements(element, selector);
        return focusableElements.length > 0 ? focusableElements[0] : null;
      }
      static getLastFocusableElement(element, selector) {
        const focusableElements = this.getFocusableElements(element, selector);
        return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
      }
      static getNextFocusableElement(element, reverse = false) {
        const focusableElements = _DomHandler.getFocusableElements(element);
        let index = 0;
        if (focusableElements && focusableElements.length > 0) {
          const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
          if (reverse) {
            if (focusedIndex == -1 || focusedIndex === 0) {
              index = focusableElements.length - 1;
            } else {
              index = focusedIndex - 1;
            }
          } else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) {
            index = focusedIndex + 1;
          }
        }
        return focusableElements[index];
      }
      static generateZIndex() {
        this.zindex = this.zindex || 999;
        return ++this.zindex;
      }
      static getSelection() {
        if (window.getSelection)
          return window.getSelection()?.toString();
        else if (document.getSelection)
          return document.getSelection()?.toString();
        else if (document["selection"])
          return document["selection"].createRange().text;
        return null;
      }
      static getTargetElement(target, el) {
        if (!target)
          return null;
        switch (target) {
          case "document":
            return document;
          case "window":
            return window;
          case "@next":
            return el?.nextElementSibling;
          case "@prev":
            return el?.previousElementSibling;
          case "@parent":
            return el?.parentElement;
          case "@grandparent":
            return el?.parentElement?.parentElement;
          default:
            const type = typeof target;
            if (type === "string") {
              return document.querySelector(target);
            } else if (type === "object" && target.hasOwnProperty("nativeElement")) {
              return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
            }
            const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
            const element = isFunction(target) ? target() : target;
            return element && element.nodeType === 9 || this.isExist(element) ? element : null;
        }
      }
      static isClient() {
        return !!(typeof window !== "undefined" && window.document && window.document.createElement);
      }
      static getAttribute(element, name) {
        if (element) {
          const value = element.getAttribute(name);
          if (!isNaN(value)) {
            return +value;
          }
          if (value === "true" || value === "false") {
            return value === "true";
          }
          return value;
        }
        return void 0;
      }
      static calculateBodyScrollbarWidth() {
        return window.innerWidth - document.documentElement.offsetWidth;
      }
      static blockBodyScroll(className = "p-overflow-hidden") {
        document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
        this.addClass(document.body, className);
      }
      static unblockBodyScroll(className = "p-overflow-hidden") {
        document.body.style.removeProperty("--scrollbar-width");
        this.removeClass(document.body, className);
      }
      static createElement(type, attributes = {}, ...children) {
        if (type) {
          const element = document.createElement(type);
          this.setAttributes(element, attributes);
          element.append(...children);
          return element;
        }
        return void 0;
      }
      static setAttribute(element, attribute = "", value) {
        if (this.isElement(element) && value !== null && value !== void 0) {
          element.setAttribute(attribute, value);
        }
      }
      static setAttributes(element, attributes = {}) {
        if (this.isElement(element)) {
          const computedStyles = (rule, value) => {
            const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];
            return [value].flat().reduce((cv, v3) => {
              if (v3 !== null && v3 !== void 0) {
                const type = typeof v3;
                if (type === "string" || type === "number") {
                  cv.push(v3);
                } else if (type === "object") {
                  const _cv = Array.isArray(v3) ? computedStyles(rule, v3) : Object.entries(v3).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : !!_v ? _k : void 0);
                  cv = _cv.length ? cv.concat(_cv.filter((c4) => !!c4)) : cv;
                }
              }
              return cv;
            }, styles);
          };
          Object.entries(attributes).forEach(([key, value]) => {
            if (value !== void 0 && value !== null) {
              const matchedEvent = key.match(/^on(.+)/);
              if (matchedEvent) {
                element.addEventListener(matchedEvent[1].toLowerCase(), value);
              } else if (key === "pBind") {
                this.setAttributes(element, value);
              } else {
                value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
                (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
                element.setAttribute(key, value);
              }
            }
          });
        }
      }
      static isFocusableElement(element, selector = "") {
        return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
      }
    };
    ConnectedOverlayScrollHandler = class {
      element;
      listener;
      scrollableParents;
      constructor(element, listener = () => {
      }) {
        this.element = element;
        this.listener = listener;
      }
      bindScrollListener() {
        this.scrollableParents = DomHandler.getScrollableParents(this.element);
        for (let i3 = 0; i3 < this.scrollableParents.length; i3++) {
          this.scrollableParents[i3].addEventListener("scroll", this.listener);
        }
      }
      unbindScrollListener() {
        if (this.scrollableParents) {
          for (let i3 = 0; i3 < this.scrollableParents.length; i3++) {
            this.scrollableParents[i3].removeEventListener("scroll", this.listener);
          }
        }
      }
      destroy() {
        this.unbindScrollListener();
        this.element = null;
        this.listener = null;
        this.scrollableParents = null;
      }
    };
  }
});

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus, AutoFocusModule;
var init_primeng_autofocus = __esm({
  "node_modules/primeng/fesm2022/primeng-autofocus.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_primeng_basecomponent();
    init_primeng_dom();
    AutoFocus = class _AutoFocus extends BaseComponent {
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      autofocus = false;
      focused = false;
      platformId = inject(PLATFORM_ID);
      document = inject(DOCUMENT);
      host = inject(ElementRef);
      onAfterContentChecked() {
        if (this.autofocus === false) {
          this.host.nativeElement.removeAttribute("autofocus");
        } else {
          this.host.nativeElement.setAttribute("autofocus", true);
        }
        if (!this.focused) {
          this.autoFocus();
        }
      }
      onAfterViewChecked() {
        if (!this.focused) {
          this.autoFocus();
        }
      }
      autoFocus() {
        if (isPlatformBrowser(this.platformId) && this.autofocus) {
          setTimeout(() => {
            const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
            if (focusableElements.length === 0) {
              this.host.nativeElement.focus();
            }
            if (focusableElements.length > 0) {
              focusableElements[0].focus();
            }
            this.focused = true;
          });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _AutoFocus, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.4", type: _AutoFocus, isStandalone: true, selector: "[pAutoFocus]", inputs: { autofocus: ["pAutoFocus", "autofocus"] }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: AutoFocus, decorators: [{
      type: Directive,
      args: [{
        selector: "[pAutoFocus]",
        standalone: true
      }]
    }], propDecorators: { autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }] } });
    AutoFocusModule = class _AutoFocusModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _AutoFocusModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.4", ngImport: core_exports, type: _AutoFocusModule, imports: [AutoFocus], exports: [AutoFocus] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _AutoFocusModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: AutoFocusModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [AutoFocus],
        exports: [AutoFocus]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/badge/index.mjs
var style3;
var init_badge = __esm({
  "node_modules/@primeuix/styles/dist/badge/index.mjs"() {
    "use strict";
    style3 = "\n    .p-badge {\n        display: inline-flex;\n        border-radius: dt('badge.border.radius');\n        align-items: center;\n        justify-content: center;\n        padding: dt('badge.padding');\n        background: dt('badge.primary.background');\n        color: dt('badge.primary.color');\n        font-size: dt('badge.font.size');\n        font-weight: dt('badge.font.weight');\n        min-width: dt('badge.min.width');\n        height: dt('badge.height');\n    }\n\n    .p-badge-dot {\n        width: dt('badge.dot.size');\n        min-width: dt('badge.dot.size');\n        height: dt('badge.dot.size');\n        border-radius: 50%;\n        padding: 0;\n    }\n\n    .p-badge-circle {\n        padding: 0;\n        border-radius: 50%;\n    }\n\n    .p-badge-secondary {\n        background: dt('badge.secondary.background');\n        color: dt('badge.secondary.color');\n    }\n\n    .p-badge-success {\n        background: dt('badge.success.background');\n        color: dt('badge.success.color');\n    }\n\n    .p-badge-info {\n        background: dt('badge.info.background');\n        color: dt('badge.info.color');\n    }\n\n    .p-badge-warn {\n        background: dt('badge.warn.background');\n        color: dt('badge.warn.color');\n    }\n\n    .p-badge-danger {\n        background: dt('badge.danger.background');\n        color: dt('badge.danger.color');\n    }\n\n    .p-badge-contrast {\n        background: dt('badge.contrast.background');\n        color: dt('badge.contrast.color');\n    }\n\n    .p-badge-sm {\n        font-size: dt('badge.sm.font.size');\n        min-width: dt('badge.sm.min.width');\n        height: dt('badge.sm.height');\n    }\n\n    .p-badge-lg {\n        font-size: dt('badge.lg.font.size');\n        min-width: dt('badge.lg.min.width');\n        height: dt('badge.lg.height');\n    }\n\n    .p-badge-xl {\n        font-size: dt('badge.xl.font.size');\n        min-width: dt('badge.xl.min.width');\n        height: dt('badge.xl.height');\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-badge.mjs
var style4, classes, BadgeStyle, BadgeClasses, BADGE_INSTANCE, BADGE_DIRECTIVE_INSTANCE, BadgeDirective, Badge, BadgeModule;
var init_primeng_badge = __esm({
  "node_modules/primeng/fesm2022/primeng-badge.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_basecomponent();
    init_primeng_bind();
    init_primeng_bind();
    init_badge();
    init_primeng_base();
    style4 = /*css*/
    `
    ${style3}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`;
    classes = {
      root: ({ instance }) => {
        const value = typeof instance.value === "function" ? instance.value() : instance.value;
        const size = typeof instance.size === "function" ? instance.size() : instance.size;
        const badgeSize = typeof instance.badgeSize === "function" ? instance.badgeSize() : instance.badgeSize;
        const severity = typeof instance.severity === "function" ? instance.severity() : instance.severity;
        return [
          "p-badge p-component",
          {
            "p-badge-circle": s2(value) && String(value).length === 1,
            "p-badge-dot": l2(value),
            "p-badge-sm": size === "small" || badgeSize === "small",
            "p-badge-lg": size === "large" || badgeSize === "large",
            "p-badge-xl": size === "xlarge" || badgeSize === "xlarge",
            "p-badge-info": severity === "info",
            "p-badge-success": severity === "success",
            "p-badge-warn": severity === "warn",
            "p-badge-danger": severity === "danger",
            "p-badge-secondary": severity === "secondary",
            "p-badge-contrast": severity === "contrast"
          }
        ];
      }
    };
    BadgeStyle = class _BadgeStyle extends BaseStyle {
      name = "badge";
      style = style4;
      classes = classes;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BadgeStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BadgeStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BadgeStyle, decorators: [{
      type: Injectable
    }] });
    (function(BadgeClasses2) {
      BadgeClasses2["root"] = "p-badge";
    })(BadgeClasses || (BadgeClasses = {}));
    BADGE_INSTANCE = new InjectionToken("BADGE_INSTANCE");
    BADGE_DIRECTIVE_INSTANCE = new InjectionToken("BADGE_DIRECTIVE_INSTANCE");
    BadgeDirective = class _BadgeDirective extends BaseComponent {
      $pcBadgeDirective = inject(BADGE_DIRECTIVE_INSTANCE, { optional: true, skipSelf: true }) ?? void 0;
      ptBadgeDirective = input(...ngDevMode ? [void 0, { debugName: "ptBadgeDirective" }] : []);
      /**
       * When specified, disables the component.
       * @group Props
       */
      disabled;
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       */
      badgeSize;
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       * @deprecated use badgeSize instead.
       */
      set size(value) {
        this._size = value;
        console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
      }
      get size() {
        return this._size;
      }
      _size;
      /**
       * Severity type of the badge.
       * @group Props
       */
      severity;
      /**
       * Value to display inside the badge.
       * @group Props
       */
      value;
      /**
       * Inline style of the element.
       * @group Props
       */
      badgeStyle;
      /**
       * Class of the element.
       * @group Props
       */
      badgeStyleClass;
      id;
      badgeEl;
      _componentStyle = inject(BadgeStyle);
      get activeElement() {
        return this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
      }
      get canUpdateBadge() {
        return s2(this.id) && !this.disabled;
      }
      constructor() {
        super();
        effect(() => {
          this.ptBadgeDirective() && this.directivePT.set(this.ptBadgeDirective());
        });
      }
      onChanges(changes) {
        const { value, size, severity, disabled, badgeStyle, badgeStyleClass } = changes;
        if (disabled) {
          this.toggleDisableState();
        }
        if (!this.canUpdateBadge) {
          return;
        }
        if (severity) {
          this.setSeverity(severity.previousValue);
        }
        if (size) {
          this.setSizeClasses();
        }
        if (value) {
          this.setValue();
        }
        if (badgeStyle || badgeStyleClass) {
          this.applyStyles();
        }
      }
      onAfterViewInit() {
        this.id = s3("pn_id_") + "_badge";
        this.renderBadgeContent();
      }
      setValue(element) {
        const badge = element ?? this.document.getElementById(this.id);
        if (!badge) {
          return;
        }
        if (this.value != null) {
          if (R(badge, "p-badge-dot")) {
            P(badge, "p-badge-dot");
          }
          if (this.value && String(this.value).length === 1) {
            W(badge, "p-badge-circle");
          } else {
            P(badge, "p-badge-circle");
          }
        } else {
          if (!R(badge, "p-badge-dot")) {
            W(badge, "p-badge-dot");
          }
          P(badge, "p-badge-circle");
        }
        badge.textContent = "";
        const badgeValue = this.value != null ? String(this.value) : "";
        this.renderer.appendChild(badge, this.document.createTextNode(badgeValue));
      }
      setSizeClasses(element) {
        const badge = element ?? this.document.getElementById(this.id);
        if (!badge) {
          return;
        }
        if (this.badgeSize) {
          if (this.badgeSize === "large") {
            W(badge, "p-badge-lg");
            P(badge, "p-badge-xl");
          }
          if (this.badgeSize === "xlarge") {
            W(badge, "p-badge-xl");
            P(badge, "p-badge-lg");
          }
        } else if (this.size && !this.badgeSize) {
          if (this.size === "large") {
            W(badge, "p-badge-lg");
            P(badge, "p-badge-xl");
          }
          if (this.size === "xlarge") {
            W(badge, "p-badge-xl");
            P(badge, "p-badge-lg");
          }
        } else {
          P(badge, "p-badge-lg");
          P(badge, "p-badge-xl");
        }
      }
      renderBadgeContent() {
        if (this.disabled) {
          return;
        }
        const el = this.activeElement;
        const badge = U("span", { class: this.cx("root"), id: this.id, "p-bind": this.ptm("root") });
        this.setSeverity(null, badge);
        this.setSizeClasses(badge);
        this.setValue(badge);
        W(el, "p-overlay-badge");
        this.renderer.appendChild(el, badge);
        this.badgeEl = badge;
        this.applyStyles();
      }
      applyStyles() {
        if (this.badgeEl && this.badgeStyle && typeof this.badgeStyle === "object") {
          for (const [key, value] of Object.entries(this.badgeStyle)) {
            this.renderer.setStyle(this.badgeEl, key, value);
          }
        }
        if (this.badgeEl && this.badgeStyleClass) {
          this.badgeEl.classList.add(...this.badgeStyleClass.split(" "));
        }
      }
      setSeverity(oldSeverity, element) {
        const badge = element ?? this.document.getElementById(this.id);
        if (!badge) {
          return;
        }
        if (this.severity) {
          W(badge, `p-badge-${this.severity}`);
        }
        if (oldSeverity) {
          P(badge, `p-badge-${oldSeverity}`);
        }
      }
      toggleDisableState() {
        if (!this.id) {
          return;
        }
        if (this.disabled) {
          const badge = this.activeElement?.querySelector(`#${this.id}`);
          if (badge) {
            this.renderer.removeChild(this.activeElement, badge);
          }
        } else {
          this.renderBadgeContent();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BadgeDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.3.4", type: _BadgeDirective, isStandalone: true, selector: "[pBadge]", inputs: { ptBadgeDirective: { classPropertyName: "ptBadgeDirective", publicName: "ptBadgeDirective", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "badgeDisabled", isSignal: false, isRequired: false, transformFunction: null }, badgeSize: { classPropertyName: "badgeSize", publicName: "badgeSize", isSignal: false, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: false, isRequired: false, transformFunction: null }, severity: { classPropertyName: "severity", publicName: "severity", isSignal: false, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: false, isRequired: false, transformFunction: null }, badgeStyle: { classPropertyName: "badgeStyle", publicName: "badgeStyle", isSignal: false, isRequired: false, transformFunction: null }, badgeStyleClass: { classPropertyName: "badgeStyleClass", publicName: "badgeStyleClass", isSignal: false, isRequired: false, transformFunction: null } }, providers: [BadgeStyle, { provide: BADGE_DIRECTIVE_INSTANCE, useExisting: _BadgeDirective }, { provide: PARENT_INSTANCE, useExisting: _BadgeDirective }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BadgeDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[pBadge]",
        providers: [BadgeStyle, { provide: BADGE_DIRECTIVE_INSTANCE, useExisting: BadgeDirective }, { provide: PARENT_INSTANCE, useExisting: BadgeDirective }],
        standalone: true
      }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input,
      args: ["badgeDisabled"]
    }], badgeSize: [{
      type: Input
    }], size: [{
      type: Input
    }], severity: [{
      type: Input
    }], value: [{
      type: Input
    }], badgeStyle: [{
      type: Input
    }], badgeStyleClass: [{
      type: Input
    }] } });
    Badge = class _Badge extends BaseComponent {
      $pcBadge = inject(BADGE_INSTANCE, { optional: true, skipSelf: true }) ?? void 0;
      bindDirectiveInstance = inject(Bind, { self: true });
      onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
      }
      /**
       * Class of the element.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass = input(...ngDevMode ? [void 0, { debugName: "styleClass" }] : []);
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       */
      badgeSize = input(...ngDevMode ? [void 0, { debugName: "badgeSize" }] : []);
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       */
      size = input(...ngDevMode ? [void 0, { debugName: "size" }] : []);
      /**
       * Severity type of the badge.
       * @group Props
       */
      severity = input(...ngDevMode ? [void 0, { debugName: "severity" }] : []);
      /**
       * Value to display inside the badge.
       * @group Props
       */
      value = input(...ngDevMode ? [void 0, { debugName: "value" }] : []);
      /**
       * When specified, disables the component.
       * @group Props
       */
      badgeDisabled = input(false, ...ngDevMode ? [{ debugName: "badgeDisabled", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      _componentStyle = inject(BadgeStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _Badge, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.3.4", type: _Badge, isStandalone: true, selector: "p-badge", inputs: { styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: true, isRequired: false, transformFunction: null }, badgeSize: { classPropertyName: "badgeSize", publicName: "badgeSize", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, severity: { classPropertyName: "severity", publicName: "severity", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, badgeDisabled: { classPropertyName: "badgeDisabled", publicName: "badgeDisabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class": "cn(cx('root'), styleClass())", "style.display": 'badgeDisabled() ? "none" : null' } }, providers: [BadgeStyle, { provide: BADGE_INSTANCE, useExisting: _Badge }, { provide: PARENT_INSTANCE, useExisting: _Badge }], usesInheritance: true, hostDirectives: [{ directive: Bind }], ngImport: core_exports, template: `{{ value() }}`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: SharedModule }, { kind: "ngmodule", type: BindModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: Badge, decorators: [{
      type: Component,
      args: [{
        selector: "p-badge",
        template: `{{ value() }}`,
        standalone: true,
        imports: [CommonModule, SharedModule, BindModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [BadgeStyle, { provide: BADGE_INSTANCE, useExisting: Badge }, { provide: PARENT_INSTANCE, useExisting: Badge }],
        host: {
          "[class]": "cn(cx('root'), styleClass())",
          "[style.display]": 'badgeDisabled() ? "none" : null'
        },
        hostDirectives: [Bind]
      }]
    }] });
    BadgeModule = class _BadgeModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BadgeModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.4", ngImport: core_exports, type: _BadgeModule, imports: [Badge, BadgeDirective, SharedModule], exports: [Badge, BadgeDirective, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BadgeModule, imports: [Badge, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BadgeModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Badge, BadgeDirective, SharedModule],
        exports: [Badge, BadgeDirective, SharedModule]
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-types-fluid.mjs
var init_primeng_types_fluid = __esm({
  "node_modules/primeng/fesm2022/primeng-types-fluid.mjs"() {
    "use strict";
  }
});

// node_modules/primeng/fesm2022/primeng-fluid.mjs
var classes2, FluidStyle, FluidClasses, FLUID_INSTANCE, Fluid, FluidModule;
var init_primeng_fluid = __esm({
  "node_modules/primeng/fesm2022/primeng-fluid.mjs"() {
    "use strict";
    init_primeng_types_fluid();
    init_common();
    init_core();
    init_core();
    init_primeng_basecomponent();
    init_primeng_bind();
    init_primeng_bind();
    init_primeng_base();
    classes2 = {
      root: "p-fluid"
    };
    FluidStyle = class _FluidStyle extends BaseStyle {
      name = "fluid";
      classes = classes2;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _FluidStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _FluidStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: FluidStyle, decorators: [{
      type: Injectable
    }] });
    (function(FluidClasses2) {
      FluidClasses2["root"] = "p-fluid";
    })(FluidClasses || (FluidClasses = {}));
    FLUID_INSTANCE = new InjectionToken("FLUID_INSTANCE");
    Fluid = class _Fluid extends BaseComponent {
      $pcFluid = inject(FLUID_INSTANCE, { optional: true, skipSelf: true }) ?? void 0;
      bindDirectiveInstance = inject(Bind, { self: true });
      onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
      }
      _componentStyle = inject(FluidStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _Fluid, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _Fluid, isStandalone: true, selector: "p-fluid", host: { properties: { "class": "cx('root')" } }, providers: [FluidStyle, { provide: FLUID_INSTANCE, useExisting: _Fluid }, { provide: PARENT_INSTANCE, useExisting: _Fluid }], usesInheritance: true, hostDirectives: [{ directive: Bind }], ngImport: core_exports, template: ` <ng-content></ng-content> `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: Fluid, decorators: [{
      type: Component,
      args: [{
        selector: "p-fluid",
        template: ` <ng-content></ng-content> `,
        standalone: true,
        imports: [CommonModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [FluidStyle, { provide: FLUID_INSTANCE, useExisting: Fluid }, { provide: PARENT_INSTANCE, useExisting: Fluid }],
        host: {
          "[class]": "cx('root')"
        },
        hostDirectives: [Bind]
      }]
    }] });
    FluidModule = class _FluidModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _FluidModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.4", ngImport: core_exports, type: _FluidModule, imports: [Fluid], exports: [Fluid] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _FluidModule, imports: [Fluid] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: FluidModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Fluid],
        exports: [Fluid]
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-baseicon.mjs
var css2, BaseIconStyle, BaseIconClasses, BaseIcon;
var init_primeng_icons_baseicon = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-baseicon.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_basecomponent();
    init_primeng_base();
    css2 = /*css*/
    `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`;
    BaseIconStyle = class _BaseIconStyle extends BaseStyle {
      name = "baseicon";
      css = css2;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BaseIconStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BaseIconStyle, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BaseIconStyle, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }] });
    (function(BaseIconClasses2) {
      BaseIconClasses2["root"] = "p-icon";
    })(BaseIconClasses || (BaseIconClasses = {}));
    BaseIcon = class _BaseIcon extends BaseComponent {
      spin = false;
      _componentStyle = inject(BaseIconStyle);
      getClassNames() {
        return f("p-icon", {
          "p-icon-spin": this.spin
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BaseIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.3.4", type: _BaseIcon, isStandalone: true, selector: "ng-component", inputs: { spin: ["spin", "spin", booleanAttribute] }, host: { attributes: { "width": "14", "height": "14", "viewBox": "0 0 14 14", "fill": "none", "xmlns": "http://www.w3.org/2000/svg" }, properties: { "class": "getClassNames()" } }, providers: [BaseIconStyle], usesInheritance: true, ngImport: core_exports, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BaseIcon, decorators: [{
      type: Component,
      args: [{
        template: ` <ng-content></ng-content> `,
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [BaseIconStyle],
        host: {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "[class]": "getClassNames()"
        }
      }]
    }], propDecorators: { spin: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-angledoubledown.mjs
var AngleDoubleDownIcon;
var init_primeng_icons_angledoubledown = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-angledoubledown.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    AngleDoubleDownIcon = class _AngleDoubleDownIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _AngleDoubleDownIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _AngleDoubleDownIcon, isStandalone: true, selector: '[data-p-icon="angle-double-down"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.70786 6.59831C6.80043 6.63674 6.89974 6.65629 6.99997 6.65581C7.19621 6.64081 7.37877 6.54953 7.50853 6.40153L11.0685 2.8416C11.1364 2.69925 11.1586 2.53932 11.132 2.38384C11.1053 2.22837 11.0311 2.08498 10.9195 1.97343C10.808 1.86188 10.6646 1.78766 10.5091 1.76099C10.3536 1.73431 10.1937 1.75649 10.0513 1.82448L6.99997 4.87585L3.9486 1.82448C3.80625 1.75649 3.64632 1.73431 3.49084 1.76099C3.33536 1.78766 3.19197 1.86188 3.08043 1.97343C2.96888 2.08498 2.89466 2.22837 2.86798 2.38384C2.84131 2.53932 2.86349 2.69925 2.93147 2.8416L6.46089 6.43205C6.53132 6.50336 6.61528 6.55989 6.70786 6.59831ZM6.70786 12.1925C6.80043 12.2309 6.89974 12.2505 6.99997 12.25C7.10241 12.2465 7.20306 12.2222 7.29575 12.1785C7.38845 12.1348 7.47124 12.0726 7.53905 11.9957L11.0685 8.46629C11.1614 8.32292 11.2036 8.15249 11.1881 7.98233C11.1727 7.81216 11.1005 7.6521 10.9833 7.52781C10.866 7.40353 10.7104 7.3222 10.5415 7.29688C10.3725 7.27155 10.1999 7.30369 10.0513 7.38814L6.99997 10.4395L3.9486 7.38814C3.80006 7.30369 3.62747 7.27155 3.45849 7.29688C3.28951 7.3222 3.13393 7.40353 3.01667 7.52781C2.89942 7.6521 2.82729 7.81216 2.81184 7.98233C2.79639 8.15249 2.83852 8.32292 2.93148 8.46629L6.4609 12.0262C6.53133 12.0975 6.61529 12.1541 6.70786 12.1925Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: AngleDoubleDownIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="angle-double-down"]',
        standalone: true,
        template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.70786 6.59831C6.80043 6.63674 6.89974 6.65629 6.99997 6.65581C7.19621 6.64081 7.37877 6.54953 7.50853 6.40153L11.0685 2.8416C11.1364 2.69925 11.1586 2.53932 11.132 2.38384C11.1053 2.22837 11.0311 2.08498 10.9195 1.97343C10.808 1.86188 10.6646 1.78766 10.5091 1.76099C10.3536 1.73431 10.1937 1.75649 10.0513 1.82448L6.99997 4.87585L3.9486 1.82448C3.80625 1.75649 3.64632 1.73431 3.49084 1.76099C3.33536 1.78766 3.19197 1.86188 3.08043 1.97343C2.96888 2.08498 2.89466 2.22837 2.86798 2.38384C2.84131 2.53932 2.86349 2.69925 2.93147 2.8416L6.46089 6.43205C6.53132 6.50336 6.61528 6.55989 6.70786 6.59831ZM6.70786 12.1925C6.80043 12.2309 6.89974 12.2505 6.99997 12.25C7.10241 12.2465 7.20306 12.2222 7.29575 12.1785C7.38845 12.1348 7.47124 12.0726 7.53905 11.9957L11.0685 8.46629C11.1614 8.32292 11.2036 8.15249 11.1881 7.98233C11.1727 7.81216 11.1005 7.6521 10.9833 7.52781C10.866 7.40353 10.7104 7.3222 10.5415 7.29688C10.3725 7.27155 10.1999 7.30369 10.0513 7.38814L6.99997 10.4395L3.9486 7.38814C3.80006 7.30369 3.62747 7.27155 3.45849 7.29688C3.28951 7.3222 3.13393 7.40353 3.01667 7.52781C2.89942 7.6521 2.82729 7.81216 2.81184 7.98233C2.79639 8.15249 2.83852 8.32292 2.93148 8.46629L6.4609 12.0262C6.53133 12.0975 6.61529 12.1541 6.70786 12.1925Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-angledoubleleft.mjs
var AngleDoubleLeftIcon;
var init_primeng_icons_angledoubleleft = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-angledoubleleft.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    AngleDoubleLeftIcon = class _AngleDoubleLeftIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _AngleDoubleLeftIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _AngleDoubleLeftIcon, isStandalone: true, selector: '[data-p-icon="angle-double-left"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: AngleDoubleLeftIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="angle-double-left"]',
        standalone: true,
        template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-angledoubleright.mjs
var AngleDoubleRightIcon;
var init_primeng_icons_angledoubleright = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-angledoubleright.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    AngleDoubleRightIcon = class _AngleDoubleRightIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _AngleDoubleRightIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _AngleDoubleRightIcon, isStandalone: true, selector: '[data-p-icon="angle-double-right"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: AngleDoubleRightIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="angle-double-right"]',
        standalone: true,
        template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-angledoubleup.mjs
var AngleDoubleUpIcon;
var init_primeng_icons_angledoubleup = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-angledoubleup.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    AngleDoubleUpIcon = class _AngleDoubleUpIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _AngleDoubleUpIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _AngleDoubleUpIcon, isStandalone: true, selector: '[data-p-icon="angle-double-up"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.1504 6.67719C10.2417 6.71508 10.3396 6.73436 10.4385 6.73389C10.6338 6.74289 10.8249 6.67441 10.97 6.54334C11.1109 6.4023 11.19 6.21112 11.19 6.01178C11.19 5.81245 11.1109 5.62127 10.97 5.48023L7.45977 1.96998C7.31873 1.82912 7.12755 1.75 6.92821 1.75C6.72888 1.75 6.5377 1.82912 6.39666 1.96998L2.9165 5.45014C2.83353 5.58905 2.79755 5.751 2.81392 5.91196C2.83028 6.07293 2.89811 6.22433 3.00734 6.34369C3.11656 6.46306 3.26137 6.54402 3.42025 6.57456C3.57914 6.60511 3.74364 6.5836 3.88934 6.51325L6.89813 3.50446L9.90691 6.51325C9.97636 6.58357 10.0592 6.6393 10.1504 6.67719ZM9.93702 11.9993C10.065 12.1452 10.245 12.2352 10.4385 12.25C10.632 12.2352 10.812 12.1452 10.9399 11.9993C11.0633 11.8614 11.1315 11.6828 11.1315 11.4978C11.1315 11.3128 11.0633 11.1342 10.9399 10.9963L7.48987 7.48609C7.34883 7.34523 7.15765 7.26611 6.95832 7.26611C6.75899 7.26611 6.5678 7.34523 6.42677 7.48609L2.91652 10.9963C2.84948 11.1367 2.82761 11.2944 2.85391 11.4477C2.88022 11.601 2.9534 11.7424 3.06339 11.8524C3.17338 11.9624 3.31477 12.0356 3.46808 12.0619C3.62139 12.0882 3.77908 12.0663 3.91945 11.9993L6.92823 8.99048L9.93702 11.9993Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: AngleDoubleUpIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="angle-double-up"]',
        standalone: true,
        template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.1504 6.67719C10.2417 6.71508 10.3396 6.73436 10.4385 6.73389C10.6338 6.74289 10.8249 6.67441 10.97 6.54334C11.1109 6.4023 11.19 6.21112 11.19 6.01178C11.19 5.81245 11.1109 5.62127 10.97 5.48023L7.45977 1.96998C7.31873 1.82912 7.12755 1.75 6.92821 1.75C6.72888 1.75 6.5377 1.82912 6.39666 1.96998L2.9165 5.45014C2.83353 5.58905 2.79755 5.751 2.81392 5.91196C2.83028 6.07293 2.89811 6.22433 3.00734 6.34369C3.11656 6.46306 3.26137 6.54402 3.42025 6.57456C3.57914 6.60511 3.74364 6.5836 3.88934 6.51325L6.89813 3.50446L9.90691 6.51325C9.97636 6.58357 10.0592 6.6393 10.1504 6.67719ZM9.93702 11.9993C10.065 12.1452 10.245 12.2352 10.4385 12.25C10.632 12.2352 10.812 12.1452 10.9399 11.9993C11.0633 11.8614 11.1315 11.6828 11.1315 11.4978C11.1315 11.3128 11.0633 11.1342 10.9399 10.9963L7.48987 7.48609C7.34883 7.34523 7.15765 7.26611 6.95832 7.26611C6.75899 7.26611 6.5678 7.34523 6.42677 7.48609L2.91652 10.9963C2.84948 11.1367 2.82761 11.2944 2.85391 11.4477C2.88022 11.601 2.9534 11.7424 3.06339 11.8524C3.17338 11.9624 3.31477 12.0356 3.46808 12.0619C3.62139 12.0882 3.77908 12.0663 3.91945 11.9993L6.92823 8.99048L9.93702 11.9993Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-angledown.mjs
var AngleDownIcon;
var init_primeng_icons_angledown = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-angledown.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    AngleDownIcon = class _AngleDownIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _AngleDownIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _AngleDownIcon, isStandalone: true, selector: '[data-p-icon="angle-down"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: AngleDownIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="angle-down"]',
        standalone: true,
        template: `
        <svg:path
            d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-angleleft.mjs
var AngleLeftIcon;
var init_primeng_icons_angleleft = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-angleleft.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    AngleLeftIcon = class _AngleLeftIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _AngleLeftIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _AngleLeftIcon, isStandalone: true, selector: '[data-p-icon="angle-left"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: AngleLeftIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="angle-left"]',
        standalone: true,
        template: `
        <svg:path
            d="M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-angleright.mjs
var AngleRightIcon;
var init_primeng_icons_angleright = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-angleright.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    AngleRightIcon = class _AngleRightIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _AngleRightIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _AngleRightIcon, isStandalone: true, selector: '[data-p-icon="angle-right"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: AngleRightIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="angle-right"]',
        standalone: true,
        template: `
        <svg:path
            d="M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-angleup.mjs
var AngleUpIcon;
var init_primeng_icons_angleup = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-angleup.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    AngleUpIcon = class _AngleUpIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _AngleUpIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _AngleUpIcon, isStandalone: true, selector: '[data-p-icon="angle-up"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: AngleUpIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="angle-up"]',
        standalone: true,
        template: `
        <svg:path
            d="M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-arrowdown.mjs
var ArrowDownIcon;
var init_primeng_icons_arrowdown = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-arrowdown.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    ArrowDownIcon = class _ArrowDownIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ArrowDownIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ArrowDownIcon, isStandalone: true, selector: '[data-p-icon="arrow-down"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.99994 14C6.91097 14.0004 6.82281 13.983 6.74064 13.9489C6.65843 13.9148 6.58387 13.8646 6.52133 13.8013L1.10198 8.38193C0.982318 8.25351 0.917175 8.08367 0.920272 7.90817C0.923368 7.73267 0.994462 7.56523 1.11858 7.44111C1.24269 7.317 1.41014 7.2459 1.58563 7.2428C1.76113 7.23971 1.93098 7.30485 2.0594 7.42451L6.32263 11.6877V0.677419C6.32263 0.497756 6.394 0.325452 6.52104 0.198411C6.64808 0.0713706 6.82039 0 7.00005 0C7.17971 0 7.35202 0.0713706 7.47906 0.198411C7.6061 0.325452 7.67747 0.497756 7.67747 0.677419V11.6877L11.9407 7.42451C12.0691 7.30485 12.2389 7.23971 12.4144 7.2428C12.5899 7.2459 12.7574 7.317 12.8815 7.44111C13.0056 7.56523 13.0767 7.73267 13.0798 7.90817C13.0829 8.08367 13.0178 8.25351 12.8981 8.38193L7.47875 13.8013C7.41621 13.8646 7.34164 13.9148 7.25944 13.9489C7.17727 13.983 7.08912 14.0004 7.00015 14C7.00012 14 7.00009 14 7.00005 14C7.00001 14 6.99998 14 6.99994 14Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ArrowDownIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="arrow-down"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.99994 14C6.91097 14.0004 6.82281 13.983 6.74064 13.9489C6.65843 13.9148 6.58387 13.8646 6.52133 13.8013L1.10198 8.38193C0.982318 8.25351 0.917175 8.08367 0.920272 7.90817C0.923368 7.73267 0.994462 7.56523 1.11858 7.44111C1.24269 7.317 1.41014 7.2459 1.58563 7.2428C1.76113 7.23971 1.93098 7.30485 2.0594 7.42451L6.32263 11.6877V0.677419C6.32263 0.497756 6.394 0.325452 6.52104 0.198411C6.64808 0.0713706 6.82039 0 7.00005 0C7.17971 0 7.35202 0.0713706 7.47906 0.198411C7.6061 0.325452 7.67747 0.497756 7.67747 0.677419V11.6877L11.9407 7.42451C12.0691 7.30485 12.2389 7.23971 12.4144 7.2428C12.5899 7.2459 12.7574 7.317 12.8815 7.44111C13.0056 7.56523 13.0767 7.73267 13.0798 7.90817C13.0829 8.08367 13.0178 8.25351 12.8981 8.38193L7.47875 13.8013C7.41621 13.8646 7.34164 13.9148 7.25944 13.9489C7.17727 13.983 7.08912 14.0004 7.00015 14C7.00012 14 7.00009 14 7.00005 14C7.00001 14 6.99998 14 6.99994 14Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-arrowdownleft.mjs
var ArrowDownLeftIcon;
var init_primeng_icons_arrowdownleft = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-arrowdownleft.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    ArrowDownLeftIcon = class _ArrowDownLeftIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ArrowDownLeftIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ArrowDownLeftIcon, isStandalone: true, selector: '[data-p-icon="arrow-down-left"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M10.092 11.9564C10.2662 11.9564 10.4332 11.8875 10.5564 11.7649C10.6796 11.6422 10.7488 11.4759 10.7488 11.3025C10.7488 11.129 10.6796 10.9627 10.5564 10.84C10.4332 10.7174 10.2662 10.6485 10.092 10.6485H4.24193L11.7909 3.13239C11.8555 3.07252 11.9072 3.00033 11.9431 2.92011C11.979 2.83989 11.9983 2.7533 11.9999 2.66549C12.0015 2.57768 11.9852 2.49046 11.9522 2.40904C11.9192 2.32761 11.87 2.25364 11.8076 2.19154C11.7453 2.12944 11.671 2.08049 11.5892 2.0476C11.5074 2.01471 11.4198 1.99855 11.3316 2.0001C11.2434 2.00165 11.1564 2.02087 11.0759 2.05661C10.9953 2.09236 10.9228 2.14389 10.8626 2.20814L3.31363 9.72424V3.8997C3.31363 3.72626 3.24443 3.55992 3.12126 3.43728C2.99808 3.31464 2.83102 3.24574 2.65682 3.24574C2.48262 3.24574 2.31555 3.31464 2.19238 3.43728C2.0692 3.55992 2 3.72626 2 3.8997V11.346C2.00046 11.433 2.01832 11.5189 2.05255 11.5989C2.10343 11.7169 2.18762 11.8175 2.29489 11.8887C2.40217 11.9599 2.5279 11.9986 2.65682 12L10.092 11.9564Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ArrowDownLeftIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="arrow-down-left"]',
        standalone: true,
        template: `
        <svg:path
            d="M10.092 11.9564C10.2662 11.9564 10.4332 11.8875 10.5564 11.7649C10.6796 11.6422 10.7488 11.4759 10.7488 11.3025C10.7488 11.129 10.6796 10.9627 10.5564 10.84C10.4332 10.7174 10.2662 10.6485 10.092 10.6485H4.24193L11.7909 3.13239C11.8555 3.07252 11.9072 3.00033 11.9431 2.92011C11.979 2.83989 11.9983 2.7533 11.9999 2.66549C12.0015 2.57768 11.9852 2.49046 11.9522 2.40904C11.9192 2.32761 11.87 2.25364 11.8076 2.19154C11.7453 2.12944 11.671 2.08049 11.5892 2.0476C11.5074 2.01471 11.4198 1.99855 11.3316 2.0001C11.2434 2.00165 11.1564 2.02087 11.0759 2.05661C10.9953 2.09236 10.9228 2.14389 10.8626 2.20814L3.31363 9.72424V3.8997C3.31363 3.72626 3.24443 3.55992 3.12126 3.43728C2.99808 3.31464 2.83102 3.24574 2.65682 3.24574C2.48262 3.24574 2.31555 3.31464 2.19238 3.43728C2.0692 3.55992 2 3.72626 2 3.8997V11.346C2.00046 11.433 2.01832 11.5189 2.05255 11.5989C2.10343 11.7169 2.18762 11.8175 2.29489 11.8887C2.40217 11.9599 2.5279 11.9986 2.65682 12L10.092 11.9564Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-arrowdownright.mjs
var ArrowDownRightIcon;
var init_primeng_icons_arrowdownright = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-arrowdownright.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    ArrowDownRightIcon = class _ArrowDownRightIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ArrowDownRightIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ArrowDownRightIcon, isStandalone: true, selector: '[data-p-icon="arrow-down-right"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M12 3.88141C12 3.70664 11.9306 3.53903 11.807 3.41545C11.6834 3.29187 11.5158 3.22244 11.341 3.22244C11.1662 3.22244 10.9986 3.29187 10.875 3.41545C10.7515 3.53903 10.682 3.70664 10.682 3.88141V9.75069L3.1082 2.17686C2.98328 2.06046 2.81806 1.99709 2.64734 2.0001C2.47662 2.00311 2.31373 2.07227 2.19299 2.19301C2.07226 2.31375 2.0031 2.47663 2.00009 2.64735C1.99708 2.81807 2.06045 2.9833 2.17685 3.10821L9.75068 10.682H3.8814C3.70663 10.682 3.53901 10.7515 3.41543 10.8751C3.29185 10.9986 3.22242 11.1663 3.22242 11.341C3.22242 11.5158 3.29185 11.6834 3.41543 11.807C3.53901 11.9306 3.70663 12 3.8814 12H11.3849C11.4725 11.9995 11.5592 11.9816 11.6397 11.9473C11.7439 11.8934 11.832 11.8131 11.8952 11.7144C11.9584 11.6157 11.9946 11.5021 12 11.385V3.88141Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ArrowDownRightIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="arrow-down-right"]',
        standalone: true,
        template: `
        <svg:path
            d="M12 3.88141C12 3.70664 11.9306 3.53903 11.807 3.41545C11.6834 3.29187 11.5158 3.22244 11.341 3.22244C11.1662 3.22244 10.9986 3.29187 10.875 3.41545C10.7515 3.53903 10.682 3.70664 10.682 3.88141V9.75069L3.1082 2.17686C2.98328 2.06046 2.81806 1.99709 2.64734 2.0001C2.47662 2.00311 2.31373 2.07227 2.19299 2.19301C2.07226 2.31375 2.0031 2.47663 2.00009 2.64735C1.99708 2.81807 2.06045 2.9833 2.17685 3.10821L9.75068 10.682H3.8814C3.70663 10.682 3.53901 10.7515 3.41543 10.8751C3.29185 10.9986 3.22242 11.1663 3.22242 11.341C3.22242 11.5158 3.29185 11.6834 3.41543 11.807C3.53901 11.9306 3.70663 12 3.8814 12H11.3849C11.4725 11.9995 11.5592 11.9816 11.6397 11.9473C11.7439 11.8934 11.832 11.8131 11.8952 11.7144C11.9584 11.6157 11.9946 11.5021 12 11.385V3.88141Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-arrowleft.mjs
var ArrowLeftIcon;
var init_primeng_icons_arrowleft = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-arrowleft.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    ArrowLeftIcon = class _ArrowLeftIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ArrowLeftIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ArrowLeftIcon, isStandalone: true, selector: '[data-p-icon="arrow-left"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.83743 13.0373C5.91964 13.0714 6.00783 13.0887 6.09683 13.0883C6.18584 13.0887 6.27403 13.0714 6.35623 13.0373C6.43844 13.0031 6.513 12.9529 6.57554 12.8896C6.7024 12.7626 6.77366 12.5904 6.77366 12.4109C6.77366 12.2314 6.7024 12.0592 6.57554 11.9322L2.31232 7.66896H13.3226C13.5022 7.66896 13.6745 7.59759 13.8016 7.47055C13.9286 7.34351 14 7.17121 14 6.99154C14 6.81188 13.9286 6.63958 13.8016 6.51254C13.6745 6.3855 13.5022 6.31413 13.3226 6.31413H2.31232L6.57554 2.0509C6.6952 1.92248 6.76035 1.75263 6.75725 1.57714C6.75415 1.40164 6.68306 1.23419 6.55894 1.11008C6.43483 0.985963 6.26738 0.914869 6.09189 0.911772C5.91639 0.908676 5.74654 0.973819 5.61812 1.09348L0.216461 6.49514C0.210349 6.50082 0.204331 6.50662 0.198411 6.51254C0.0713707 6.63958 0 6.81188 0 6.99154C0 7.17121 0.0713707 7.34351 0.198411 7.47055C0.20434 7.47648 0.210366 7.48229 0.216488 7.48797L5.61812 12.8896C5.68067 12.9529 5.75523 13.0031 5.83743 13.0373Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ArrowLeftIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="arrow-left"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.83743 13.0373C5.91964 13.0714 6.00783 13.0887 6.09683 13.0883C6.18584 13.0887 6.27403 13.0714 6.35623 13.0373C6.43844 13.0031 6.513 12.9529 6.57554 12.8896C6.7024 12.7626 6.77366 12.5904 6.77366 12.4109C6.77366 12.2314 6.7024 12.0592 6.57554 11.9322L2.31232 7.66896H13.3226C13.5022 7.66896 13.6745 7.59759 13.8016 7.47055C13.9286 7.34351 14 7.17121 14 6.99154C14 6.81188 13.9286 6.63958 13.8016 6.51254C13.6745 6.3855 13.5022 6.31413 13.3226 6.31413H2.31232L6.57554 2.0509C6.6952 1.92248 6.76035 1.75263 6.75725 1.57714C6.75415 1.40164 6.68306 1.23419 6.55894 1.11008C6.43483 0.985963 6.26738 0.914869 6.09189 0.911772C5.91639 0.908676 5.74654 0.973819 5.61812 1.09348L0.216461 6.49514C0.210349 6.50082 0.204331 6.50662 0.198411 6.51254C0.0713707 6.63958 0 6.81188 0 6.99154C0 7.17121 0.0713707 7.34351 0.198411 7.47055C0.20434 7.47648 0.210366 7.48229 0.216488 7.48797L5.61812 12.8896C5.68067 12.9529 5.75523 13.0031 5.83743 13.0373Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-arrowright.mjs
var ArrowRightIcon;
var init_primeng_icons_arrowright = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-arrowright.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    ArrowRightIcon = class _ArrowRightIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ArrowRightIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ArrowRightIcon, isStandalone: true, selector: '[data-p-icon="arrow-right"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.64383 13.1256C7.72604 13.1597 7.81423 13.1771 7.90323 13.1767C7.99224 13.1771 8.08043 13.1597 8.16263 13.1256C8.24484 13.0915 8.3194 13.0413 8.38194 12.9779L13.7845 7.57541C13.7903 7.57001 13.796 7.5645 13.8016 7.55889C13.9286 7.43184 14 7.25954 14 7.07988C14 6.90021 13.9286 6.72791 13.8016 6.60087C13.796 6.59526 13.7903 6.58976 13.7845 6.58438L8.38194 1.18181C8.25353 1.06215 8.08368 0.997009 7.90818 1.00011C7.73268 1.0032 7.56524 1.0743 7.44112 1.19841C7.31701 1.32253 7.24591 1.48997 7.24282 1.66547C7.23972 1.84097 7.30486 2.01082 7.42452 2.13923L11.6878 6.40246H0.677419C0.497757 6.40246 0.325452 6.47383 0.198411 6.60087C0.0713707 6.72791 0 6.90021 0 7.07988C0 7.25954 0.0713707 7.43184 0.198411 7.55889C0.325452 7.68593 0.497757 7.7573 0.677419 7.7573H11.6877L7.42452 12.0205C7.29767 12.1475 7.22641 12.3197 7.22641 12.4992C7.22641 12.6787 7.29767 12.8509 7.42452 12.9779C7.48707 13.0413 7.56163 13.0915 7.64383 13.1256Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ArrowRightIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="arrow-right"]',
        standalone: true,
        template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.64383 13.1256C7.72604 13.1597 7.81423 13.1771 7.90323 13.1767C7.99224 13.1771 8.08043 13.1597 8.16263 13.1256C8.24484 13.0915 8.3194 13.0413 8.38194 12.9779L13.7845 7.57541C13.7903 7.57001 13.796 7.5645 13.8016 7.55889C13.9286 7.43184 14 7.25954 14 7.07988C14 6.90021 13.9286 6.72791 13.8016 6.60087C13.796 6.59526 13.7903 6.58976 13.7845 6.58438L8.38194 1.18181C8.25353 1.06215 8.08368 0.997009 7.90818 1.00011C7.73268 1.0032 7.56524 1.0743 7.44112 1.19841C7.31701 1.32253 7.24591 1.48997 7.24282 1.66547C7.23972 1.84097 7.30486 2.01082 7.42452 2.13923L11.6878 6.40246H0.677419C0.497757 6.40246 0.325452 6.47383 0.198411 6.60087C0.0713707 6.72791 0 6.90021 0 7.07988C0 7.25954 0.0713707 7.43184 0.198411 7.55889C0.325452 7.68593 0.497757 7.7573 0.677419 7.7573H11.6877L7.42452 12.0205C7.29767 12.1475 7.22641 12.3197 7.22641 12.4992C7.22641 12.6787 7.29767 12.8509 7.42452 12.9779C7.48707 13.0413 7.56163 13.0915 7.64383 13.1256Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-arrowup.mjs
var ArrowUpIcon;
var init_primeng_icons_arrowup = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-arrowup.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    ArrowUpIcon = class _ArrowUpIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ArrowUpIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ArrowUpIcon, isStandalone: true, selector: '[data-p-icon="arrow-up"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.51551 13.799C6.64205 13.9255 6.813 13.9977 6.99193 14C7.17087 13.9977 7.34182 13.9255 7.46835 13.799C7.59489 13.6725 7.66701 13.5015 7.66935 13.3226V2.31233L11.9326 6.57554C11.9951 6.63887 12.0697 6.68907 12.1519 6.72319C12.2341 6.75731 12.3223 6.77467 12.4113 6.77425C12.5003 6.77467 12.5885 6.75731 12.6707 6.72319C12.7529 6.68907 12.8274 6.63887 12.89 6.57554C13.0168 6.44853 13.0881 6.27635 13.0881 6.09683C13.0881 5.91732 13.0168 5.74514 12.89 5.61812L7.48846 0.216594C7.48274 0.210436 7.4769 0.204374 7.47094 0.198411C7.3439 0.0713707 7.1716 0 6.99193 0C6.81227 0 6.63997 0.0713707 6.51293 0.198411C6.50704 0.204296 6.50128 0.210278 6.49563 0.216354L1.09386 5.61812C0.974201 5.74654 0.909057 5.91639 0.912154 6.09189C0.91525 6.26738 0.986345 6.43483 1.11046 6.55894C1.23457 6.68306 1.40202 6.75415 1.57752 6.75725C1.75302 6.76035 1.92286 6.6952 2.05128 6.57554L6.31451 2.31231V13.3226C6.31685 13.5015 6.38898 13.6725 6.51551 13.799Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ArrowUpIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="arrow-up"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.51551 13.799C6.64205 13.9255 6.813 13.9977 6.99193 14C7.17087 13.9977 7.34182 13.9255 7.46835 13.799C7.59489 13.6725 7.66701 13.5015 7.66935 13.3226V2.31233L11.9326 6.57554C11.9951 6.63887 12.0697 6.68907 12.1519 6.72319C12.2341 6.75731 12.3223 6.77467 12.4113 6.77425C12.5003 6.77467 12.5885 6.75731 12.6707 6.72319C12.7529 6.68907 12.8274 6.63887 12.89 6.57554C13.0168 6.44853 13.0881 6.27635 13.0881 6.09683C13.0881 5.91732 13.0168 5.74514 12.89 5.61812L7.48846 0.216594C7.48274 0.210436 7.4769 0.204374 7.47094 0.198411C7.3439 0.0713707 7.1716 0 6.99193 0C6.81227 0 6.63997 0.0713707 6.51293 0.198411C6.50704 0.204296 6.50128 0.210278 6.49563 0.216354L1.09386 5.61812C0.974201 5.74654 0.909057 5.91639 0.912154 6.09189C0.91525 6.26738 0.986345 6.43483 1.11046 6.55894C1.23457 6.68306 1.40202 6.75415 1.57752 6.75725C1.75302 6.76035 1.92286 6.6952 2.05128 6.57554L6.31451 2.31231V13.3226C6.31685 13.5015 6.38898 13.6725 6.51551 13.799Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-ban.mjs
var BanIcon;
var init_primeng_icons_ban = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-ban.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    BanIcon = class _BanIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BanIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _BanIcon, isStandalone: true, selector: '[data-p-icon="ban"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303296 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM1.16667 7C1.16549 5.65478 1.63303 4.35118 2.48889 3.31333L10.6867 11.5111C9.83309 12.2112 8.79816 12.6544 7.70243 12.789C6.60669 12.9236 5.49527 12.744 4.49764 12.2713C3.50001 11.7986 2.65724 11.0521 2.06751 10.1188C1.47778 9.18558 1.16537 8.10397 1.16667 7ZM11.5111 10.6867L3.31334 2.48889C4.43144 1.57388 5.84966 1.10701 7.29265 1.1789C8.73565 1.2508 10.1004 1.85633 11.1221 2.87795C12.1437 3.89956 12.7492 5.26435 12.8211 6.70735C12.893 8.15034 12.4261 9.56856 11.5111 10.6867Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BanIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="ban"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303296 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM1.16667 7C1.16549 5.65478 1.63303 4.35118 2.48889 3.31333L10.6867 11.5111C9.83309 12.2112 8.79816 12.6544 7.70243 12.789C6.60669 12.9236 5.49527 12.744 4.49764 12.2713C3.50001 11.7986 2.65724 11.0521 2.06751 10.1188C1.47778 9.18558 1.16537 8.10397 1.16667 7ZM11.5111 10.6867L3.31334 2.48889C4.43144 1.57388 5.84966 1.10701 7.29265 1.1789C8.73565 1.2508 10.1004 1.85633 11.1221 2.87795C12.1437 3.89956 12.7492 5.26435 12.8211 6.70735C12.893 8.15034 12.4261 9.56856 11.5111 10.6867Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-bars.mjs
var BarsIcon;
var init_primeng_icons_bars = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-bars.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    BarsIcon = class _BarsIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BarsIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _BarsIcon, isStandalone: true, selector: '[data-p-icon="bars"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BarsIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="bars"]',
        standalone: true,
        template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-blank.mjs
var BlankIcon;
var init_primeng_icons_blank = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-blank.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    BlankIcon = class _BlankIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _BlankIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _BlankIcon, isStandalone: true, selector: '[data-p-icon="blank"]', usesInheritance: true, ngImport: core_exports, template: ` <svg:rect width="1" height="1" fill="currentColor" fill-opacity="0" /> `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: BlankIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="blank"]',
        standalone: true,
        template: ` <svg:rect width="1" height="1" fill="currentColor" fill-opacity="0" /> `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-calendar.mjs
var CalendarIcon;
var init_primeng_icons_calendar = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-calendar.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    CalendarIcon = class _CalendarIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _CalendarIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _CalendarIcon, isStandalone: true, selector: '[data-p-icon="calendar"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: CalendarIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="calendar"]',
        standalone: true,
        template: `
        <svg:path
            d="M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-caretleft.mjs
var CaretLeftIcon;
var init_primeng_icons_caretleft = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-caretleft.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    CaretLeftIcon = class _CaretLeftIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _CaretLeftIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _CaretLeftIcon, isStandalone: true, selector: '[data-p-icon="caret-left"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M10.5553 13C10.411 13.0006 10.2704 12.9538 10.1554 12.8667L3.04473 7.53369C2.96193 7.4716 2.89474 7.39108 2.84845 7.29852C2.80217 7.20595 2.77808 7.10388 2.77808 7.00039C2.77808 6.8969 2.80217 6.79484 2.84845 6.70227C2.89474 6.60971 2.96193 6.52919 3.04473 6.4671L10.1554 1.13412C10.2549 1.05916 10.3734 1.0136 10.4976 1.0026C10.6217 0.991605 10.7464 1.01561 10.8575 1.0719C10.9668 1.12856 11.0584 1.21398 11.1226 1.31893C11.1869 1.42388 11.2212 1.54438 11.222 1.66742V12.3334C11.2212 12.4564 11.1869 12.5769 11.1226 12.6819C11.0584 12.7868 10.9668 12.8722 10.8575 12.9289C10.7629 12.9735 10.6599 12.9977 10.5553 13ZM4.55574 7.00039L9.88871 11.0001V3.00066L4.55574 7.00039Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: CaretLeftIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="caret-left"]',
        standalone: true,
        template: `
        <svg:path
            d="M10.5553 13C10.411 13.0006 10.2704 12.9538 10.1554 12.8667L3.04473 7.53369C2.96193 7.4716 2.89474 7.39108 2.84845 7.29852C2.80217 7.20595 2.77808 7.10388 2.77808 7.00039C2.77808 6.8969 2.80217 6.79484 2.84845 6.70227C2.89474 6.60971 2.96193 6.52919 3.04473 6.4671L10.1554 1.13412C10.2549 1.05916 10.3734 1.0136 10.4976 1.0026C10.6217 0.991605 10.7464 1.01561 10.8575 1.0719C10.9668 1.12856 11.0584 1.21398 11.1226 1.31893C11.1869 1.42388 11.2212 1.54438 11.222 1.66742V12.3334C11.2212 12.4564 11.1869 12.5769 11.1226 12.6819C11.0584 12.7868 10.9668 12.8722 10.8575 12.9289C10.7629 12.9735 10.6599 12.9977 10.5553 13ZM4.55574 7.00039L9.88871 11.0001V3.00066L4.55574 7.00039Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-caretright.mjs
var CaretRightIcon;
var init_primeng_icons_caretright = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-caretright.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    CaretRightIcon = class _CaretRightIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _CaretRightIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _CaretRightIcon, isStandalone: true, selector: '[data-p-icon="caret-right"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M3.44433 13C3.34244 12.9987 3.24216 12.9744 3.15099 12.9289C3.03947 12.8742 2.94542 12.7895 2.87945 12.6843C2.81349 12.5791 2.77823 12.4575 2.77765 12.3333V1.66633C2.77823 1.54214 2.81349 1.42057 2.87945 1.31534C2.94542 1.21011 3.03947 1.1254 3.15099 1.07076C3.26082 1.01524 3.38401 0.991634 3.50658 1.00263C3.62914 1.01363 3.74617 1.05879 3.84435 1.13298L10.9557 6.46647C11.0385 6.52857 11.1057 6.6091 11.152 6.70167C11.1982 6.79424 11.2223 6.89632 11.2223 6.99982C11.2223 7.10332 11.1982 7.2054 11.152 7.29797C11.1057 7.39054 11.0385 7.47107 10.9557 7.53317L3.84435 12.8667C3.72925 12.9538 3.58869 13.0006 3.44433 13ZM4.11102 2.9997V10.9999L9.44451 6.99982L4.11102 2.9997Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: CaretRightIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="caret-right"]',
        standalone: true,
        template: `
        <svg:path
            d="M3.44433 13C3.34244 12.9987 3.24216 12.9744 3.15099 12.9289C3.03947 12.8742 2.94542 12.7895 2.87945 12.6843C2.81349 12.5791 2.77823 12.4575 2.77765 12.3333V1.66633C2.77823 1.54214 2.81349 1.42057 2.87945 1.31534C2.94542 1.21011 3.03947 1.1254 3.15099 1.07076C3.26082 1.01524 3.38401 0.991634 3.50658 1.00263C3.62914 1.01363 3.74617 1.05879 3.84435 1.13298L10.9557 6.46647C11.0385 6.52857 11.1057 6.6091 11.152 6.70167C11.1982 6.79424 11.2223 6.89632 11.2223 6.99982C11.2223 7.10332 11.1982 7.2054 11.152 7.29797C11.1057 7.39054 11.0385 7.47107 10.9557 7.53317L3.84435 12.8667C3.72925 12.9538 3.58869 13.0006 3.44433 13ZM4.11102 2.9997V10.9999L9.44451 6.99982L4.11102 2.9997Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-check.mjs
var CheckIcon;
var init_primeng_icons_check = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-check.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    CheckIcon = class _CheckIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _CheckIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _CheckIcon, isStandalone: true, selector: '[data-p-icon="check"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: CheckIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="check"]',
        standalone: true,
        template: `
        <svg:path
            d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-chevrondown.mjs
var ChevronDownIcon;
var init_primeng_icons_chevrondown = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-chevrondown.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    ChevronDownIcon = class _ChevronDownIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ChevronDownIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ChevronDownIcon, isStandalone: true, selector: '[data-p-icon="chevron-down"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ChevronDownIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="chevron-down"]',
        standalone: true,
        template: `
        <svg:path
            d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-chevronleft.mjs
var ChevronLeftIcon;
var init_primeng_icons_chevronleft = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-chevronleft.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    ChevronLeftIcon = class _ChevronLeftIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ChevronLeftIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ChevronLeftIcon, isStandalone: true, selector: '[data-p-icon="chevron-left"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ChevronLeftIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="chevron-left"]',
        standalone: true,
        template: `
        <svg:path
            d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs
var ChevronRightIcon;
var init_primeng_icons_chevronright = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    ChevronRightIcon = class _ChevronRightIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ChevronRightIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ChevronRightIcon, isStandalone: true, selector: '[data-p-icon="chevron-right"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ChevronRightIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="chevron-right"]',
        standalone: true,
        template: `
        <svg:path
            d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-chevronup.mjs
var ChevronUpIcon;
var init_primeng_icons_chevronup = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-chevronup.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    ChevronUpIcon = class _ChevronUpIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ChevronUpIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ChevronUpIcon, isStandalone: true, selector: '[data-p-icon="chevron-up"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ChevronUpIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="chevron-up"]',
        standalone: true,
        template: `
        <svg:path
            d="M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-exclamationtriangle.mjs
var ExclamationTriangleIcon;
var init_primeng_icons_exclamationtriangle = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-exclamationtriangle.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    ExclamationTriangleIcon = class _ExclamationTriangleIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ExclamationTriangleIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ExclamationTriangleIcon, isStandalone: true, selector: '[data-p-icon="exclamation-triangle"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ExclamationTriangleIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="exclamation-triangle"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z"
                fill="currentColor"
            />
            <svg:path
                d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-eye.mjs
var EyeIcon;
var init_primeng_icons_eye = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-eye.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    EyeIcon = class _EyeIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _EyeIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _EyeIcon, isStandalone: true, selector: '[data-p-icon="eye"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: EyeIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="eye"]',
        standalone: true,
        template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-eyeslash.mjs
var EyeSlashIcon;
var init_primeng_icons_eyeslash = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-eyeslash.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    EyeSlashIcon = class _EyeSlashIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _EyeSlashIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _EyeSlashIcon, isStandalone: true, selector: '[data-p-icon="eyeslash"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: EyeSlashIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="eyeslash"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-filter.mjs
var FilterIcon;
var init_primeng_icons_filter = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-filter.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    FilterIcon = class _FilterIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _FilterIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _FilterIcon, isStandalone: true, selector: '[data-p-icon="filter"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: FilterIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="filter"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-filterslash.mjs
var FilterSlashIcon;
var init_primeng_icons_filterslash = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-filterslash.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    FilterSlashIcon = class _FilterSlashIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _FilterSlashIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _FilterSlashIcon, isStandalone: true, selector: '[data-p-icon="filter-slash"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4994 0.0920138C13.5967 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7827 0.780968 13.7403 0.889466 13.6707 0.98L11.406 4.06823C11.3099 4.19928 11.1656 4.28679 11.005 4.3115C10.8444 4.33621 10.6805 4.2961 10.5495 4.2C10.4184 4.1039 10.3309 3.95967 10.3062 3.79905C10.2815 3.63843 10.3216 3.47458 10.4177 3.34353L11.9412 1.23529H7.41184C7.24803 1.23529 7.09093 1.17022 6.97509 1.05439C6.85926 0.938558 6.79419 0.781457 6.79419 0.617647C6.79419 0.453837 6.85926 0.296736 6.97509 0.180905C7.09093 0.0650733 7.24803 0 7.41184 0H13.1765C13.2905 0.000692754 13.4022 0.0325088 13.4994 0.0920138ZM4.20008 0.181168H4.24126L13.2013 9.03411C13.3169 9.14992 13.3819 9.3069 13.3819 9.47058C13.3819 9.63426 13.3169 9.79124 13.2013 9.90705C13.1445 9.96517 13.0766 10.0112 13.0016 10.0423C12.9266 10.0735 12.846 10.0891 12.7648 10.0882C12.6836 10.0886 12.6032 10.0728 12.5283 10.0417C12.4533 10.0106 12.3853 9.96479 12.3283 9.90705L9.3142 6.92587L9.26479 6.99999V13.3823C9.26265 13.5455 9.19689 13.7014 9.08152 13.8167C8.96615 13.9321 8.81029 13.9979 8.64714 14H5.35302C5.18987 13.9979 5.03401 13.9321 4.91864 13.8167C4.80327 13.7014 4.73751 13.5455 4.73537 13.3823V6.99999L0.329492 1.02117C0.259855 0.930634 0.21745 0.822137 0.207241 0.708376C0.197031 0.594616 0.21944 0.480301 0.271844 0.378815C0.324343 0.277621 0.403484 0.192687 0.500724 0.133182C0.597964 0.073677 0.709609 0.041861 0.823609 0.0411682H3.86243C3.92448 0.0461551 3.9855 0.060022 4.04361 0.0823446C4.10037 0.10735 4.15311 0.140655 4.20008 0.181168ZM8.02949 6.79411C8.02884 6.66289 8.07235 6.53526 8.15302 6.43176L8.42478 6.05293L3.55773 1.23529H2.0589L5.84714 6.43176C5.92781 6.53526 5.97132 6.66289 5.97067 6.79411V12.7647H8.02949V6.79411Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: FilterSlashIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="filter-slash"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4994 0.0920138C13.5967 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7827 0.780968 13.7403 0.889466 13.6707 0.98L11.406 4.06823C11.3099 4.19928 11.1656 4.28679 11.005 4.3115C10.8444 4.33621 10.6805 4.2961 10.5495 4.2C10.4184 4.1039 10.3309 3.95967 10.3062 3.79905C10.2815 3.63843 10.3216 3.47458 10.4177 3.34353L11.9412 1.23529H7.41184C7.24803 1.23529 7.09093 1.17022 6.97509 1.05439C6.85926 0.938558 6.79419 0.781457 6.79419 0.617647C6.79419 0.453837 6.85926 0.296736 6.97509 0.180905C7.09093 0.0650733 7.24803 0 7.41184 0H13.1765C13.2905 0.000692754 13.4022 0.0325088 13.4994 0.0920138ZM4.20008 0.181168H4.24126L13.2013 9.03411C13.3169 9.14992 13.3819 9.3069 13.3819 9.47058C13.3819 9.63426 13.3169 9.79124 13.2013 9.90705C13.1445 9.96517 13.0766 10.0112 13.0016 10.0423C12.9266 10.0735 12.846 10.0891 12.7648 10.0882C12.6836 10.0886 12.6032 10.0728 12.5283 10.0417C12.4533 10.0106 12.3853 9.96479 12.3283 9.90705L9.3142 6.92587L9.26479 6.99999V13.3823C9.26265 13.5455 9.19689 13.7014 9.08152 13.8167C8.96615 13.9321 8.81029 13.9979 8.64714 14H5.35302C5.18987 13.9979 5.03401 13.9321 4.91864 13.8167C4.80327 13.7014 4.73751 13.5455 4.73537 13.3823V6.99999L0.329492 1.02117C0.259855 0.930634 0.21745 0.822137 0.207241 0.708376C0.197031 0.594616 0.21944 0.480301 0.271844 0.378815C0.324343 0.277621 0.403484 0.192687 0.500724 0.133182C0.597964 0.073677 0.709609 0.041861 0.823609 0.0411682H3.86243C3.92448 0.0461551 3.9855 0.060022 4.04361 0.0823446C4.10037 0.10735 4.15311 0.140655 4.20008 0.181168ZM8.02949 6.79411C8.02884 6.66289 8.07235 6.53526 8.15302 6.43176L8.42478 6.05293L3.55773 1.23529H2.0589L5.84714 6.43176C5.92781 6.53526 5.97132 6.66289 5.97067 6.79411V12.7647H8.02949V6.79411Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-home.mjs
var HomeIcon;
var init_primeng_icons_home = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-home.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    HomeIcon = class _HomeIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _HomeIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _HomeIcon, isStandalone: true, selector: '[data-p-icon="home"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4175 6.79971C13.2874 6.80029 13.1608 6.75807 13.057 6.67955L12.4162 6.19913V12.6073C12.4141 12.7659 12.3502 12.9176 12.2379 13.0298C12.1257 13.142 11.9741 13.206 11.8154 13.208H8.61206C8.61179 13.208 8.61151 13.208 8.61123 13.2081C8.61095 13.208 8.61068 13.208 8.6104 13.208H5.41076C5.40952 13.208 5.40829 13.2081 5.40705 13.2081C5.40581 13.2081 5.40458 13.208 5.40334 13.208H2.20287C2.04418 13.206 1.89257 13.142 1.78035 13.0298C1.66813 12.9176 1.60416 12.7659 1.60209 12.6073V6.19914L0.961256 6.67955C0.833786 6.77515 0.673559 6.8162 0.515823 6.79367C0.358086 6.77114 0.215762 6.68686 0.120159 6.55939C0.0245566 6.43192 -0.0164931 6.2717 0.00604063 6.11396C0.0285744 5.95622 0.112846 5.8139 0.240316 5.7183L1.83796 4.52007L1.84689 4.51337L6.64868 0.912027C6.75267 0.834032 6.87915 0.79187 7.00915 0.79187C7.13914 0.79187 7.26562 0.834032 7.36962 0.912027L12.1719 4.51372L12.1799 4.51971L13.778 5.7183C13.8943 5.81278 13.9711 5.94732 13.9934 6.09553C14.0156 6.24373 13.9816 6.39489 13.8981 6.51934C13.8471 6.60184 13.7766 6.67054 13.6928 6.71942C13.609 6.76831 13.5144 6.79587 13.4175 6.79971ZM6.00783 12.0065H8.01045V7.60074H6.00783V12.0065ZM9.21201 12.0065V6.99995C9.20994 6.84126 9.14598 6.68965 9.03375 6.57743C8.92153 6.46521 8.76992 6.40124 8.61123 6.39917H5.40705C5.24836 6.40124 5.09675 6.46521 4.98453 6.57743C4.8723 6.68965 4.80834 6.84126 4.80627 6.99995V12.0065H2.80366V5.29836L7.00915 2.14564L11.2146 5.29836V12.0065H9.21201Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: HomeIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="home"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4175 6.79971C13.2874 6.80029 13.1608 6.75807 13.057 6.67955L12.4162 6.19913V12.6073C12.4141 12.7659 12.3502 12.9176 12.2379 13.0298C12.1257 13.142 11.9741 13.206 11.8154 13.208H8.61206C8.61179 13.208 8.61151 13.208 8.61123 13.2081C8.61095 13.208 8.61068 13.208 8.6104 13.208H5.41076C5.40952 13.208 5.40829 13.2081 5.40705 13.2081C5.40581 13.2081 5.40458 13.208 5.40334 13.208H2.20287C2.04418 13.206 1.89257 13.142 1.78035 13.0298C1.66813 12.9176 1.60416 12.7659 1.60209 12.6073V6.19914L0.961256 6.67955C0.833786 6.77515 0.673559 6.8162 0.515823 6.79367C0.358086 6.77114 0.215762 6.68686 0.120159 6.55939C0.0245566 6.43192 -0.0164931 6.2717 0.00604063 6.11396C0.0285744 5.95622 0.112846 5.8139 0.240316 5.7183L1.83796 4.52007L1.84689 4.51337L6.64868 0.912027C6.75267 0.834032 6.87915 0.79187 7.00915 0.79187C7.13914 0.79187 7.26562 0.834032 7.36962 0.912027L12.1719 4.51372L12.1799 4.51971L13.778 5.7183C13.8943 5.81278 13.9711 5.94732 13.9934 6.09553C14.0156 6.24373 13.9816 6.39489 13.8981 6.51934C13.8471 6.60184 13.7766 6.67054 13.6928 6.71942C13.609 6.76831 13.5144 6.79587 13.4175 6.79971ZM6.00783 12.0065H8.01045V7.60074H6.00783V12.0065ZM9.21201 12.0065V6.99995C9.20994 6.84126 9.14598 6.68965 9.03375 6.57743C8.92153 6.46521 8.76992 6.40124 8.61123 6.39917H5.40705C5.24836 6.40124 5.09675 6.46521 4.98453 6.57743C4.8723 6.68965 4.80834 6.84126 4.80627 6.99995V12.0065H2.80366V5.29836L7.00915 2.14564L11.2146 5.29836V12.0065H9.21201Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-infocircle.mjs
var InfoCircleIcon;
var init_primeng_icons_infocircle = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-infocircle.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    InfoCircleIcon = class _InfoCircleIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _InfoCircleIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _InfoCircleIcon, isStandalone: true, selector: '[data-p-icon="info-circle"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: InfoCircleIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="info-circle"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-minus.mjs
var MinusIcon;
var init_primeng_icons_minus = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-minus.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    MinusIcon = class _MinusIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _MinusIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _MinusIcon, isStandalone: true, selector: '[data-p-icon="minus"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: MinusIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="minus"]',
        standalone: true,
        template: `
        <svg:path
            d="M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-pencil.mjs
var PencilIcon;
var init_primeng_icons_pencil = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-pencil.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    PencilIcon = class _PencilIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _PencilIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _PencilIcon, isStandalone: true, selector: '[data-p-icon="pencil"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M0.609628 13.959C0.530658 13.9599 0.452305 13.9451 0.379077 13.9156C0.305849 13.8861 0.239191 13.8424 0.18294 13.787C0.118447 13.7234 0.0688234 13.6464 0.0376166 13.5614C0.00640987 13.4765 -0.00560954 13.3857 0.00241768 13.2956L0.25679 10.1501C0.267698 10.0041 0.331934 9.86709 0.437312 9.76516L9.51265 0.705715C10.0183 0.233014 10.6911 -0.0203041 11.3835 0.00127367C12.0714 0.00660201 12.7315 0.27311 13.2298 0.746671C13.7076 1.23651 13.9824 1.88848 13.9992 2.57201C14.0159 3.25554 13.7733 3.92015 13.32 4.4327L4.23648 13.5331C4.13482 13.6342 4.0017 13.6978 3.85903 13.7133L0.667067 14L0.609628 13.959ZM1.43018 10.4696L1.25787 12.714L3.50619 12.5092L12.4502 3.56444C12.6246 3.35841 12.7361 3.10674 12.7714 2.83933C12.8067 2.57193 12.7644 2.30002 12.6495 2.05591C12.5346 1.8118 12.3519 1.60575 12.1231 1.46224C11.8943 1.31873 11.6291 1.2438 11.3589 1.24633C11.1813 1.23508 11.0033 1.25975 10.8355 1.31887C10.6677 1.37798 10.5136 1.47033 10.3824 1.59036L1.43018 10.4696Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: PencilIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="pencil"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M0.609628 13.959C0.530658 13.9599 0.452305 13.9451 0.379077 13.9156C0.305849 13.8861 0.239191 13.8424 0.18294 13.787C0.118447 13.7234 0.0688234 13.6464 0.0376166 13.5614C0.00640987 13.4765 -0.00560954 13.3857 0.00241768 13.2956L0.25679 10.1501C0.267698 10.0041 0.331934 9.86709 0.437312 9.76516L9.51265 0.705715C10.0183 0.233014 10.6911 -0.0203041 11.3835 0.00127367C12.0714 0.00660201 12.7315 0.27311 13.2298 0.746671C13.7076 1.23651 13.9824 1.88848 13.9992 2.57201C14.0159 3.25554 13.7733 3.92015 13.32 4.4327L4.23648 13.5331C4.13482 13.6342 4.0017 13.6978 3.85903 13.7133L0.667067 14L0.609628 13.959ZM1.43018 10.4696L1.25787 12.714L3.50619 12.5092L12.4502 3.56444C12.6246 3.35841 12.7361 3.10674 12.7714 2.83933C12.8067 2.57193 12.7644 2.30002 12.6495 2.05591C12.5346 1.8118 12.3519 1.60575 12.1231 1.46224C11.8943 1.31873 11.6291 1.2438 11.3589 1.24633C11.1813 1.23508 11.0033 1.25975 10.8355 1.31887C10.6677 1.37798 10.5136 1.47033 10.3824 1.59036L1.43018 10.4696Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-plus.mjs
var PlusIcon;
var init_primeng_icons_plus = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-plus.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    PlusIcon = class _PlusIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _PlusIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _PlusIcon, isStandalone: true, selector: '[data-p-icon="plus"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: PlusIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="plus"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-refresh.mjs
var RefreshIcon;
var init_primeng_icons_refresh = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-refresh.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    RefreshIcon = class _RefreshIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _RefreshIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _RefreshIcon, isStandalone: true, selector: '[data-p-icon="refresh"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: RefreshIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="refresh"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-search.mjs
var SearchIcon;
var init_primeng_icons_search = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-search.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    SearchIcon = class _SearchIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _SearchIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _SearchIcon, isStandalone: true, selector: '[data-p-icon="search"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: SearchIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="search"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-searchminus.mjs
var SearchMinusIcon;
var init_primeng_icons_searchminus = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-searchminus.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    SearchMinusIcon = class _SearchMinusIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _SearchMinusIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _SearchMinusIcon, isStandalone: true, selector: '[data-p-icon="search-minus"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: SearchMinusIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="search-minus"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-searchplus.mjs
var SearchPlusIcon;
var init_primeng_icons_searchplus = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-searchplus.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    SearchPlusIcon = class _SearchPlusIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _SearchPlusIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _SearchPlusIcon, isStandalone: true, selector: '[data-p-icon="search-plus"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: SearchPlusIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="search-plus"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-sortalt.mjs
var SortAltIcon;
var init_primeng_icons_sortalt = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-sortalt.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    SortAltIcon = class _SortAltIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _SortAltIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _SortAltIcon, isStandalone: true, selector: '[data-p-icon="sort-alt"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M5.64515 3.61291C5.47353 3.61291 5.30192 3.54968 5.16644 3.4142L3.38708 1.63484L1.60773 3.4142C1.34579 3.67613 0.912244 3.67613 0.650309 3.4142C0.388374 3.15226 0.388374 2.71871 0.650309 2.45678L2.90837 0.198712C3.17031 -0.0632236 3.60386 -0.0632236 3.86579 0.198712L6.12386 2.45678C6.38579 2.71871 6.38579 3.15226 6.12386 3.4142C5.98837 3.54968 5.81676 3.61291 5.64515 3.61291Z"
                fill="currentColor"
            />
            <svg:path d="M3.38714 14C3.01681 14 2.70972 13.6929 2.70972 13.3226V0.677419C2.70972 0.307097 3.01681 0 3.38714 0C3.75746 0 4.06456 0.307097 4.06456 0.677419V13.3226C4.06456 13.6929 3.75746 14 3.38714 14Z" fill="currentColor" />
            <svg:path
                d="M10.6129 14C10.4413 14 10.2697 13.9368 10.1342 13.8013L7.87611 11.5432C7.61418 11.2813 7.61418 10.8477 7.87611 10.5858C8.13805 10.3239 8.5716 10.3239 8.83353 10.5858L10.6129 12.3652L12.3922 10.5858C12.6542 10.3239 13.0877 10.3239 13.3497 10.5858C13.6116 10.8477 13.6116 11.2813 13.3497 11.5432L11.0916 13.8013C10.9561 13.9368 10.7845 14 10.6129 14Z"
                fill="currentColor"
            />
            <svg:path d="M10.6129 14C10.2426 14 9.93552 13.6929 9.93552 13.3226V0.677419C9.93552 0.307097 10.2426 0 10.6129 0C10.9833 0 11.2904 0.307097 11.2904 0.677419V13.3226C11.2904 13.6929 10.9832 14 10.6129 14Z" fill="currentColor" />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: SortAltIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="sort-alt"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M5.64515 3.61291C5.47353 3.61291 5.30192 3.54968 5.16644 3.4142L3.38708 1.63484L1.60773 3.4142C1.34579 3.67613 0.912244 3.67613 0.650309 3.4142C0.388374 3.15226 0.388374 2.71871 0.650309 2.45678L2.90837 0.198712C3.17031 -0.0632236 3.60386 -0.0632236 3.86579 0.198712L6.12386 2.45678C6.38579 2.71871 6.38579 3.15226 6.12386 3.4142C5.98837 3.54968 5.81676 3.61291 5.64515 3.61291Z"
                fill="currentColor"
            />
            <svg:path d="M3.38714 14C3.01681 14 2.70972 13.6929 2.70972 13.3226V0.677419C2.70972 0.307097 3.01681 0 3.38714 0C3.75746 0 4.06456 0.307097 4.06456 0.677419V13.3226C4.06456 13.6929 3.75746 14 3.38714 14Z" fill="currentColor" />
            <svg:path
                d="M10.6129 14C10.4413 14 10.2697 13.9368 10.1342 13.8013L7.87611 11.5432C7.61418 11.2813 7.61418 10.8477 7.87611 10.5858C8.13805 10.3239 8.5716 10.3239 8.83353 10.5858L10.6129 12.3652L12.3922 10.5858C12.6542 10.3239 13.0877 10.3239 13.3497 10.5858C13.6116 10.8477 13.6116 11.2813 13.3497 11.5432L11.0916 13.8013C10.9561 13.9368 10.7845 14 10.6129 14Z"
                fill="currentColor"
            />
            <svg:path d="M10.6129 14C10.2426 14 9.93552 13.6929 9.93552 13.3226V0.677419C9.93552 0.307097 10.2426 0 10.6129 0C10.9833 0 11.2904 0.307097 11.2904 0.677419V13.3226C11.2904 13.6929 10.9832 14 10.6129 14Z" fill="currentColor" />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-sortamountdown.mjs
var SortAmountDownIcon;
var init_primeng_icons_sortamountdown = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-sortamountdown.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    SortAmountDownIcon = class _SortAmountDownIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _SortAmountDownIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _SortAmountDownIcon, isStandalone: true, selector: '[data-p-icon="sort-amount-down"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M4.93953 10.5858L3.83759 11.6877V0.677419C3.83759 0.307097 3.53049 0 3.16017 0C2.78985 0 2.48275 0.307097 2.48275 0.677419V11.6877L1.38082 10.5858C1.11888 10.3239 0.685331 10.3239 0.423396 10.5858C0.16146 10.8477 0.16146 11.2813 0.423396 11.5432L2.68146 13.8013C2.74469 13.8645 2.81694 13.9097 2.89823 13.9458C2.97952 13.9819 3.06985 14 3.16017 14C3.25049 14 3.33178 13.9819 3.42211 13.9458C3.5034 13.9097 3.57565 13.8645 3.63888 13.8013L5.89694 11.5432C6.15888 11.2813 6.15888 10.8477 5.89694 10.5858C5.63501 10.3239 5.20146 10.3239 4.93953 10.5858ZM13.0957 0H7.22468C6.85436 0 6.54726 0.307097 6.54726 0.677419C6.54726 1.04774 6.85436 1.35484 7.22468 1.35484H13.0957C13.466 1.35484 13.7731 1.04774 13.7731 0.677419C13.7731 0.307097 13.466 0 13.0957 0ZM7.22468 5.41935H9.48275C9.85307 5.41935 10.1602 5.72645 10.1602 6.09677C10.1602 6.4671 9.85307 6.77419 9.48275 6.77419H7.22468C6.85436 6.77419 6.54726 6.4671 6.54726 6.09677C6.54726 5.72645 6.85436 5.41935 7.22468 5.41935ZM7.6763 8.12903H7.22468C6.85436 8.12903 6.54726 8.43613 6.54726 8.80645C6.54726 9.17677 6.85436 9.48387 7.22468 9.48387H7.6763C8.04662 9.48387 8.35372 9.17677 8.35372 8.80645C8.35372 8.43613 8.04662 8.12903 7.6763 8.12903ZM7.22468 2.70968H11.2892C11.6595 2.70968 11.9666 3.01677 11.9666 3.3871C11.9666 3.75742 11.6595 4.06452 11.2892 4.06452H7.22468C6.85436 4.06452 6.54726 3.75742 6.54726 3.3871C6.54726 3.01677 6.85436 2.70968 7.22468 2.70968Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: SortAmountDownIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="sort-amount-down"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M4.93953 10.5858L3.83759 11.6877V0.677419C3.83759 0.307097 3.53049 0 3.16017 0C2.78985 0 2.48275 0.307097 2.48275 0.677419V11.6877L1.38082 10.5858C1.11888 10.3239 0.685331 10.3239 0.423396 10.5858C0.16146 10.8477 0.16146 11.2813 0.423396 11.5432L2.68146 13.8013C2.74469 13.8645 2.81694 13.9097 2.89823 13.9458C2.97952 13.9819 3.06985 14 3.16017 14C3.25049 14 3.33178 13.9819 3.42211 13.9458C3.5034 13.9097 3.57565 13.8645 3.63888 13.8013L5.89694 11.5432C6.15888 11.2813 6.15888 10.8477 5.89694 10.5858C5.63501 10.3239 5.20146 10.3239 4.93953 10.5858ZM13.0957 0H7.22468C6.85436 0 6.54726 0.307097 6.54726 0.677419C6.54726 1.04774 6.85436 1.35484 7.22468 1.35484H13.0957C13.466 1.35484 13.7731 1.04774 13.7731 0.677419C13.7731 0.307097 13.466 0 13.0957 0ZM7.22468 5.41935H9.48275C9.85307 5.41935 10.1602 5.72645 10.1602 6.09677C10.1602 6.4671 9.85307 6.77419 9.48275 6.77419H7.22468C6.85436 6.77419 6.54726 6.4671 6.54726 6.09677C6.54726 5.72645 6.85436 5.41935 7.22468 5.41935ZM7.6763 8.12903H7.22468C6.85436 8.12903 6.54726 8.43613 6.54726 8.80645C6.54726 9.17677 6.85436 9.48387 7.22468 9.48387H7.6763C8.04662 9.48387 8.35372 9.17677 8.35372 8.80645C8.35372 8.43613 8.04662 8.12903 7.6763 8.12903ZM7.22468 2.70968H11.2892C11.6595 2.70968 11.9666 3.01677 11.9666 3.3871C11.9666 3.75742 11.6595 4.06452 11.2892 4.06452H7.22468C6.85436 4.06452 6.54726 3.75742 6.54726 3.3871C6.54726 3.01677 6.85436 2.70968 7.22468 2.70968Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-sortamountupalt.mjs
var SortAmountUpAltIcon;
var init_primeng_icons_sortamountupalt = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-sortamountupalt.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    SortAmountUpAltIcon = class _SortAmountUpAltIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _SortAmountUpAltIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _SortAmountUpAltIcon, isStandalone: true, selector: '[data-p-icon="sort-amount-up-alt"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M3.63435 0.19871C3.57113 0.135484 3.49887 0.0903226 3.41758 0.0541935C3.255 -0.0180645 3.06532 -0.0180645 2.90274 0.0541935C2.82145 0.0903226 2.74919 0.135484 2.68597 0.19871L0.427901 2.45677C0.165965 2.71871 0.165965 3.15226 0.427901 3.41419C0.689836 3.67613 1.12338 3.67613 1.38532 3.41419L2.48726 2.31226V13.3226C2.48726 13.6929 2.79435 14 3.16467 14C3.535 14 3.84209 13.6929 3.84209 13.3226V2.31226L4.94403 3.41419C5.07951 3.54968 5.25113 3.6129 5.42274 3.6129C5.59435 3.6129 5.76597 3.54968 5.90145 3.41419C6.16338 3.15226 6.16338 2.71871 5.90145 2.45677L3.64338 0.19871H3.63435ZM13.7685 13.3226C13.7685 12.9523 13.4615 12.6452 13.0911 12.6452H7.22016C6.84984 12.6452 6.54274 12.9523 6.54274 13.3226C6.54274 13.6929 6.84984 14 7.22016 14H13.0911C13.4615 14 13.7685 13.6929 13.7685 13.3226ZM7.22016 8.58064C6.84984 8.58064 6.54274 8.27355 6.54274 7.90323C6.54274 7.5329 6.84984 7.22581 7.22016 7.22581H9.47823C9.84855 7.22581 10.1556 7.5329 10.1556 7.90323C10.1556 8.27355 9.84855 8.58064 9.47823 8.58064H7.22016ZM7.22016 5.87097H7.67177C8.0421 5.87097 8.34919 5.56387 8.34919 5.19355C8.34919 4.82323 8.0421 4.51613 7.67177 4.51613H7.22016C6.84984 4.51613 6.54274 4.82323 6.54274 5.19355C6.54274 5.56387 6.84984 5.87097 7.22016 5.87097ZM11.2847 11.2903H7.22016C6.84984 11.2903 6.54274 10.9832 6.54274 10.6129C6.54274 10.2426 6.84984 9.93548 7.22016 9.93548H11.2847C11.655 9.93548 11.9621 10.2426 11.9621 10.6129C11.9621 10.9832 11.655 11.2903 11.2847 11.2903Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: SortAmountUpAltIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="sort-amount-up-alt"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M3.63435 0.19871C3.57113 0.135484 3.49887 0.0903226 3.41758 0.0541935C3.255 -0.0180645 3.06532 -0.0180645 2.90274 0.0541935C2.82145 0.0903226 2.74919 0.135484 2.68597 0.19871L0.427901 2.45677C0.165965 2.71871 0.165965 3.15226 0.427901 3.41419C0.689836 3.67613 1.12338 3.67613 1.38532 3.41419L2.48726 2.31226V13.3226C2.48726 13.6929 2.79435 14 3.16467 14C3.535 14 3.84209 13.6929 3.84209 13.3226V2.31226L4.94403 3.41419C5.07951 3.54968 5.25113 3.6129 5.42274 3.6129C5.59435 3.6129 5.76597 3.54968 5.90145 3.41419C6.16338 3.15226 6.16338 2.71871 5.90145 2.45677L3.64338 0.19871H3.63435ZM13.7685 13.3226C13.7685 12.9523 13.4615 12.6452 13.0911 12.6452H7.22016C6.84984 12.6452 6.54274 12.9523 6.54274 13.3226C6.54274 13.6929 6.84984 14 7.22016 14H13.0911C13.4615 14 13.7685 13.6929 13.7685 13.3226ZM7.22016 8.58064C6.84984 8.58064 6.54274 8.27355 6.54274 7.90323C6.54274 7.5329 6.84984 7.22581 7.22016 7.22581H9.47823C9.84855 7.22581 10.1556 7.5329 10.1556 7.90323C10.1556 8.27355 9.84855 8.58064 9.47823 8.58064H7.22016ZM7.22016 5.87097H7.67177C8.0421 5.87097 8.34919 5.56387 8.34919 5.19355C8.34919 4.82323 8.0421 4.51613 7.67177 4.51613H7.22016C6.84984 4.51613 6.54274 4.82323 6.54274 5.19355C6.54274 5.56387 6.84984 5.87097 7.22016 5.87097ZM11.2847 11.2903H7.22016C6.84984 11.2903 6.54274 10.9832 6.54274 10.6129C6.54274 10.2426 6.84984 9.93548 7.22016 9.93548H11.2847C11.655 9.93548 11.9621 10.2426 11.9621 10.6129C11.9621 10.9832 11.655 11.2903 11.2847 11.2903Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-spinner.mjs
var SpinnerIcon;
var init_primeng_icons_spinner = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-spinner.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    SpinnerIcon = class _SpinnerIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _SpinnerIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _SpinnerIcon, isStandalone: true, selector: '[data-p-icon="spinner"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: SpinnerIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="spinner"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-star.mjs
var StarIcon;
var init_primeng_icons_star = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-star.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    StarIcon = class _StarIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _StarIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _StarIcon, isStandalone: true, selector: '[data-p-icon="star"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: StarIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="star"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-starfill.mjs
var StarFillIcon;
var init_primeng_icons_starfill = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-starfill.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    StarFillIcon = class _StarFillIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _StarFillIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _StarFillIcon, isStandalone: true, selector: '[data-p-icon="star-fill"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: StarFillIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="star-fill"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-thlarge.mjs
var ThLargeIcon;
var init_primeng_icons_thlarge = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-thlarge.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    ThLargeIcon = class _ThLargeIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ThLargeIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _ThLargeIcon, isStandalone: true, selector: '[data-p-icon="th-large"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.90909 6.36364H4.45455C4.96087 6.36364 5.44645 6.1625 5.80448 5.80448C6.1625 5.44645 6.36364 4.96087 6.36364 4.45455V1.90909C6.36364 1.40277 6.1625 0.917184 5.80448 0.55916C5.44645 0.201136 4.96087 0 4.45455 0H1.90909C1.40277 0 0.917184 0.201136 0.55916 0.55916C0.201136 0.917184 0 1.40277 0 1.90909V4.45455C0 4.96087 0.201136 5.44645 0.55916 5.80448C0.917184 6.1625 1.40277 6.36364 1.90909 6.36364ZM1.46154 1.46154C1.58041 1.34268 1.741 1.27492 1.90909 1.27273H4.45455C4.62264 1.27492 4.78322 1.34268 4.90209 1.46154C5.02096 1.58041 5.08871 1.741 5.09091 1.90909V4.45455C5.08871 4.62264 5.02096 4.78322 4.90209 4.90209C4.78322 5.02096 4.62264 5.08871 4.45455 5.09091H1.90909C1.741 5.08871 1.58041 5.02096 1.46154 4.90209C1.34268 4.78322 1.27492 4.62264 1.27273 4.45455V1.90909C1.27492 1.741 1.34268 1.58041 1.46154 1.46154ZM1.90909 14H4.45455C4.96087 14 5.44645 13.7989 5.80448 13.4408C6.1625 13.0828 6.36364 12.5972 6.36364 12.0909V9.54544C6.36364 9.03912 6.1625 8.55354 5.80448 8.19551C5.44645 7.83749 4.96087 7.63635 4.45455 7.63635H1.90909C1.40277 7.63635 0.917184 7.83749 0.55916 8.19551C0.201136 8.55354 0 9.03912 0 9.54544V12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14ZM1.46154 9.0979C1.58041 8.97903 1.741 8.91128 1.90909 8.90908H4.45455C4.62264 8.91128 4.78322 8.97903 4.90209 9.0979C5.02096 9.21677 5.08871 9.37735 5.09091 9.54544V12.0909C5.08871 12.259 5.02096 12.4196 4.90209 12.5384C4.78322 12.6573 4.62264 12.7251 4.45455 12.7273H1.90909C1.741 12.7251 1.58041 12.6573 1.46154 12.5384C1.34268 12.4196 1.27492 12.259 1.27273 12.0909V9.54544C1.27492 9.37735 1.34268 9.21677 1.46154 9.0979ZM12.0909 6.36364H9.54544C9.03912 6.36364 8.55354 6.1625 8.19551 5.80448C7.83749 5.44645 7.63635 4.96087 7.63635 4.45455V1.90909C7.63635 1.40277 7.83749 0.917184 8.19551 0.55916C8.55354 0.201136 9.03912 0 9.54544 0H12.0909C12.5972 0 13.0828 0.201136 13.4408 0.55916C13.7989 0.917184 14 1.40277 14 1.90909V4.45455C14 4.96087 13.7989 5.44645 13.4408 5.80448C13.0828 6.1625 12.5972 6.36364 12.0909 6.36364ZM9.54544 1.27273C9.37735 1.27492 9.21677 1.34268 9.0979 1.46154C8.97903 1.58041 8.91128 1.741 8.90908 1.90909V4.45455C8.91128 4.62264 8.97903 4.78322 9.0979 4.90209C9.21677 5.02096 9.37735 5.08871 9.54544 5.09091H12.0909C12.259 5.08871 12.4196 5.02096 12.5384 4.90209C12.6573 4.78322 12.7251 4.62264 12.7273 4.45455V1.90909C12.7251 1.741 12.6573 1.58041 12.5384 1.46154C12.4196 1.34268 12.259 1.27492 12.0909 1.27273H9.54544ZM9.54544 14H12.0909C12.5972 14 13.0828 13.7989 13.4408 13.4408C13.7989 13.0828 14 12.5972 14 12.0909V9.54544C14 9.03912 13.7989 8.55354 13.4408 8.19551C13.0828 7.83749 12.5972 7.63635 12.0909 7.63635H9.54544C9.03912 7.63635 8.55354 7.83749 8.19551 8.19551C7.83749 8.55354 7.63635 9.03912 7.63635 9.54544V12.0909C7.63635 12.5972 7.83749 13.0828 8.19551 13.4408C8.55354 13.7989 9.03912 14 9.54544 14ZM9.0979 9.0979C9.21677 8.97903 9.37735 8.91128 9.54544 8.90908H12.0909C12.259 8.91128 12.4196 8.97903 12.5384 9.0979C12.6573 9.21677 12.7251 9.37735 12.7273 9.54544V12.0909C12.7251 12.259 12.6573 12.4196 12.5384 12.5384C12.4196 12.6573 12.259 12.7251 12.0909 12.7273H9.54544C9.37735 12.7251 9.21677 12.6573 9.0979 12.5384C8.97903 12.4196 8.91128 12.259 8.90908 12.0909V9.54544C8.91128 9.37735 8.97903 9.21677 9.0979 9.0979Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ThLargeIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="th-large"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.90909 6.36364H4.45455C4.96087 6.36364 5.44645 6.1625 5.80448 5.80448C6.1625 5.44645 6.36364 4.96087 6.36364 4.45455V1.90909C6.36364 1.40277 6.1625 0.917184 5.80448 0.55916C5.44645 0.201136 4.96087 0 4.45455 0H1.90909C1.40277 0 0.917184 0.201136 0.55916 0.55916C0.201136 0.917184 0 1.40277 0 1.90909V4.45455C0 4.96087 0.201136 5.44645 0.55916 5.80448C0.917184 6.1625 1.40277 6.36364 1.90909 6.36364ZM1.46154 1.46154C1.58041 1.34268 1.741 1.27492 1.90909 1.27273H4.45455C4.62264 1.27492 4.78322 1.34268 4.90209 1.46154C5.02096 1.58041 5.08871 1.741 5.09091 1.90909V4.45455C5.08871 4.62264 5.02096 4.78322 4.90209 4.90209C4.78322 5.02096 4.62264 5.08871 4.45455 5.09091H1.90909C1.741 5.08871 1.58041 5.02096 1.46154 4.90209C1.34268 4.78322 1.27492 4.62264 1.27273 4.45455V1.90909C1.27492 1.741 1.34268 1.58041 1.46154 1.46154ZM1.90909 14H4.45455C4.96087 14 5.44645 13.7989 5.80448 13.4408C6.1625 13.0828 6.36364 12.5972 6.36364 12.0909V9.54544C6.36364 9.03912 6.1625 8.55354 5.80448 8.19551C5.44645 7.83749 4.96087 7.63635 4.45455 7.63635H1.90909C1.40277 7.63635 0.917184 7.83749 0.55916 8.19551C0.201136 8.55354 0 9.03912 0 9.54544V12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14ZM1.46154 9.0979C1.58041 8.97903 1.741 8.91128 1.90909 8.90908H4.45455C4.62264 8.91128 4.78322 8.97903 4.90209 9.0979C5.02096 9.21677 5.08871 9.37735 5.09091 9.54544V12.0909C5.08871 12.259 5.02096 12.4196 4.90209 12.5384C4.78322 12.6573 4.62264 12.7251 4.45455 12.7273H1.90909C1.741 12.7251 1.58041 12.6573 1.46154 12.5384C1.34268 12.4196 1.27492 12.259 1.27273 12.0909V9.54544C1.27492 9.37735 1.34268 9.21677 1.46154 9.0979ZM12.0909 6.36364H9.54544C9.03912 6.36364 8.55354 6.1625 8.19551 5.80448C7.83749 5.44645 7.63635 4.96087 7.63635 4.45455V1.90909C7.63635 1.40277 7.83749 0.917184 8.19551 0.55916C8.55354 0.201136 9.03912 0 9.54544 0H12.0909C12.5972 0 13.0828 0.201136 13.4408 0.55916C13.7989 0.917184 14 1.40277 14 1.90909V4.45455C14 4.96087 13.7989 5.44645 13.4408 5.80448C13.0828 6.1625 12.5972 6.36364 12.0909 6.36364ZM9.54544 1.27273C9.37735 1.27492 9.21677 1.34268 9.0979 1.46154C8.97903 1.58041 8.91128 1.741 8.90908 1.90909V4.45455C8.91128 4.62264 8.97903 4.78322 9.0979 4.90209C9.21677 5.02096 9.37735 5.08871 9.54544 5.09091H12.0909C12.259 5.08871 12.4196 5.02096 12.5384 4.90209C12.6573 4.78322 12.7251 4.62264 12.7273 4.45455V1.90909C12.7251 1.741 12.6573 1.58041 12.5384 1.46154C12.4196 1.34268 12.259 1.27492 12.0909 1.27273H9.54544ZM9.54544 14H12.0909C12.5972 14 13.0828 13.7989 13.4408 13.4408C13.7989 13.0828 14 12.5972 14 12.0909V9.54544C14 9.03912 13.7989 8.55354 13.4408 8.19551C13.0828 7.83749 12.5972 7.63635 12.0909 7.63635H9.54544C9.03912 7.63635 8.55354 7.83749 8.19551 8.19551C7.83749 8.55354 7.63635 9.03912 7.63635 9.54544V12.0909C7.63635 12.5972 7.83749 13.0828 8.19551 13.4408C8.55354 13.7989 9.03912 14 9.54544 14ZM9.0979 9.0979C9.21677 8.97903 9.37735 8.91128 9.54544 8.90908H12.0909C12.259 8.91128 12.4196 8.97903 12.5384 9.0979C12.6573 9.21677 12.7251 9.37735 12.7273 9.54544V12.0909C12.7251 12.259 12.6573 12.4196 12.5384 12.5384C12.4196 12.6573 12.259 12.7251 12.0909 12.7273H9.54544C9.37735 12.7251 9.21677 12.6573 9.0979 12.5384C8.97903 12.4196 8.91128 12.259 8.90908 12.0909V9.54544C8.91128 9.37735 8.97903 9.21677 9.0979 9.0979Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-times.mjs
var TimesIcon;
var init_primeng_icons_times = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-times.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_icons_baseicon();
    TimesIcon = class _TimesIcon extends BaseIcon {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _TimesIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _TimesIcon, isStandalone: true, selector: '[data-p-icon="times"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:path
            d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
            fill="currentColor"
        />
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: TimesIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="times"]',
        standalone: true,
        template: `
        <svg:path
            d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
            fill="currentColor"
        />
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs
var TimesCircleIcon;
var init_primeng_icons_timescircle = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    TimesCircleIcon = class _TimesCircleIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _TimesCircleIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _TimesCircleIcon, isStandalone: true, selector: '[data-p-icon="times-circle"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: TimesCircleIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="times-circle"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-trash.mjs
var TrashIcon;
var init_primeng_icons_trash = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-trash.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    TrashIcon = class _TrashIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _TrashIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _TrashIcon, isStandalone: true, selector: '[data-p-icon="trash"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.44802 13.9955H10.552C10.8056 14.0129 11.06 13.9797 11.3006 13.898C11.5412 13.8163 11.7632 13.6877 11.9537 13.5196C12.1442 13.3515 12.2995 13.1473 12.4104 12.9188C12.5213 12.6903 12.5858 12.442 12.6 12.1884V4.36041H13.4C13.5591 4.36041 13.7117 4.29722 13.8243 4.18476C13.9368 4.07229 14 3.91976 14 3.76071C14 3.60166 13.9368 3.44912 13.8243 3.33666C13.7117 3.22419 13.5591 3.16101 13.4 3.16101H12.0537C12.0203 3.1557 11.9863 3.15299 11.952 3.15299C11.9178 3.15299 11.8838 3.1557 11.8503 3.16101H11.2285C11.2421 3.10893 11.2487 3.05513 11.248 3.00106V1.80966C11.2171 1.30262 10.9871 0.828306 10.608 0.48989C10.229 0.151475 9.73159 -0.0236625 9.22402 0.00257442H4.77602C4.27251 -0.0171866 3.78126 0.160868 3.40746 0.498617C3.03365 0.836366 2.807 1.30697 2.77602 1.80966V3.00106C2.77602 3.0556 2.78346 3.10936 2.79776 3.16101H0.6C0.521207 3.16101 0.443185 3.17652 0.37039 3.20666C0.297595 3.2368 0.231451 3.28097 0.175736 3.33666C0.120021 3.39235 0.0758251 3.45846 0.0456722 3.53121C0.0155194 3.60397 0 3.68196 0 3.76071C0 3.83946 0.0155194 3.91744 0.0456722 3.9902C0.0758251 4.06296 0.120021 4.12907 0.175736 4.18476C0.231451 4.24045 0.297595 4.28462 0.37039 4.31476C0.443185 4.3449 0.521207 4.36041 0.6 4.36041H1.40002V12.1884C1.41426 12.442 1.47871 12.6903 1.58965 12.9188C1.7006 13.1473 1.85582 13.3515 2.04633 13.5196C2.23683 13.6877 2.45882 13.8163 2.69944 13.898C2.94005 13.9797 3.1945 14.0129 3.44802 13.9955ZM2.60002 4.36041H11.304V12.1884C11.304 12.5163 10.952 12.7961 10.504 12.7961H3.40002C2.97602 12.7961 2.60002 12.5163 2.60002 12.1884V4.36041ZM3.95429 3.16101C3.96859 3.10936 3.97602 3.0556 3.97602 3.00106V1.80966C3.97602 1.48183 4.33602 1.20197 4.77602 1.20197H9.24802C9.66403 1.20197 10.048 1.48183 10.048 1.80966V3.00106C10.0473 3.05515 10.054 3.10896 10.0678 3.16101H3.95429ZM5.57571 10.997C5.41731 10.995 5.26597 10.9311 5.15395 10.8191C5.04193 10.7071 4.97808 10.5558 4.97601 10.3973V6.77517C4.97601 6.61612 5.0392 6.46359 5.15166 6.35112C5.26413 6.23866 5.41666 6.17548 5.57571 6.17548C5.73476 6.17548 5.8873 6.23866 5.99976 6.35112C6.11223 6.46359 6.17541 6.61612 6.17541 6.77517V10.3894C6.17647 10.4688 6.16174 10.5476 6.13208 10.6213C6.10241 10.695 6.05841 10.762 6.00261 10.8186C5.94682 10.8751 5.88035 10.92 5.80707 10.9506C5.73378 10.9813 5.65514 10.9971 5.57571 10.997ZM7.99968 10.8214C8.11215 10.9339 8.26468 10.997 8.42373 10.997C8.58351 10.9949 8.73604 10.93 8.84828 10.8163C8.96052 10.7025 9.02345 10.5491 9.02343 10.3894V6.77517C9.02343 6.61612 8.96025 6.46359 8.84778 6.35112C8.73532 6.23866 8.58278 6.17548 8.42373 6.17548C8.26468 6.17548 8.11215 6.23866 7.99968 6.35112C7.88722 6.46359 7.82404 6.61612 7.82404 6.77517V10.3973C7.82404 10.5564 7.88722 10.7089 7.99968 10.8214Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: TrashIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="trash"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.44802 13.9955H10.552C10.8056 14.0129 11.06 13.9797 11.3006 13.898C11.5412 13.8163 11.7632 13.6877 11.9537 13.5196C12.1442 13.3515 12.2995 13.1473 12.4104 12.9188C12.5213 12.6903 12.5858 12.442 12.6 12.1884V4.36041H13.4C13.5591 4.36041 13.7117 4.29722 13.8243 4.18476C13.9368 4.07229 14 3.91976 14 3.76071C14 3.60166 13.9368 3.44912 13.8243 3.33666C13.7117 3.22419 13.5591 3.16101 13.4 3.16101H12.0537C12.0203 3.1557 11.9863 3.15299 11.952 3.15299C11.9178 3.15299 11.8838 3.1557 11.8503 3.16101H11.2285C11.2421 3.10893 11.2487 3.05513 11.248 3.00106V1.80966C11.2171 1.30262 10.9871 0.828306 10.608 0.48989C10.229 0.151475 9.73159 -0.0236625 9.22402 0.00257442H4.77602C4.27251 -0.0171866 3.78126 0.160868 3.40746 0.498617C3.03365 0.836366 2.807 1.30697 2.77602 1.80966V3.00106C2.77602 3.0556 2.78346 3.10936 2.79776 3.16101H0.6C0.521207 3.16101 0.443185 3.17652 0.37039 3.20666C0.297595 3.2368 0.231451 3.28097 0.175736 3.33666C0.120021 3.39235 0.0758251 3.45846 0.0456722 3.53121C0.0155194 3.60397 0 3.68196 0 3.76071C0 3.83946 0.0155194 3.91744 0.0456722 3.9902C0.0758251 4.06296 0.120021 4.12907 0.175736 4.18476C0.231451 4.24045 0.297595 4.28462 0.37039 4.31476C0.443185 4.3449 0.521207 4.36041 0.6 4.36041H1.40002V12.1884C1.41426 12.442 1.47871 12.6903 1.58965 12.9188C1.7006 13.1473 1.85582 13.3515 2.04633 13.5196C2.23683 13.6877 2.45882 13.8163 2.69944 13.898C2.94005 13.9797 3.1945 14.0129 3.44802 13.9955ZM2.60002 4.36041H11.304V12.1884C11.304 12.5163 10.952 12.7961 10.504 12.7961H3.40002C2.97602 12.7961 2.60002 12.5163 2.60002 12.1884V4.36041ZM3.95429 3.16101C3.96859 3.10936 3.97602 3.0556 3.97602 3.00106V1.80966C3.97602 1.48183 4.33602 1.20197 4.77602 1.20197H9.24802C9.66403 1.20197 10.048 1.48183 10.048 1.80966V3.00106C10.0473 3.05515 10.054 3.10896 10.0678 3.16101H3.95429ZM5.57571 10.997C5.41731 10.995 5.26597 10.9311 5.15395 10.8191C5.04193 10.7071 4.97808 10.5558 4.97601 10.3973V6.77517C4.97601 6.61612 5.0392 6.46359 5.15166 6.35112C5.26413 6.23866 5.41666 6.17548 5.57571 6.17548C5.73476 6.17548 5.8873 6.23866 5.99976 6.35112C6.11223 6.46359 6.17541 6.61612 6.17541 6.77517V10.3894C6.17647 10.4688 6.16174 10.5476 6.13208 10.6213C6.10241 10.695 6.05841 10.762 6.00261 10.8186C5.94682 10.8751 5.88035 10.92 5.80707 10.9506C5.73378 10.9813 5.65514 10.9971 5.57571 10.997ZM7.99968 10.8214C8.11215 10.9339 8.26468 10.997 8.42373 10.997C8.58351 10.9949 8.73604 10.93 8.84828 10.8163C8.96052 10.7025 9.02345 10.5491 9.02343 10.3894V6.77517C9.02343 6.61612 8.96025 6.46359 8.84778 6.35112C8.73532 6.23866 8.58278 6.17548 8.42373 6.17548C8.26468 6.17548 8.11215 6.23866 7.99968 6.35112C7.88722 6.46359 7.82404 6.61612 7.82404 6.77517V10.3973C7.82404 10.5564 7.88722 10.7089 7.99968 10.8214Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-undo.mjs
var UndoIcon;
var init_primeng_icons_undo = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-undo.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    UndoIcon = class _UndoIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _UndoIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _UndoIcon, isStandalone: true, selector: '[data-p-icon="undo"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: UndoIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="undo"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-upload.mjs
var UploadIcon;
var init_primeng_icons_upload = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-upload.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    UploadIcon = class _UploadIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _UploadIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _UploadIcon, isStandalone: true, selector: '[data-p-icon="upload"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: UploadIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="upload"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-windowmaximize.mjs
var WindowMaximizeIcon;
var init_primeng_icons_windowmaximize = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-windowmaximize.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    WindowMaximizeIcon = class _WindowMaximizeIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _WindowMaximizeIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _WindowMaximizeIcon, isStandalone: true, selector: '[data-p-icon="window-maximize"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: WindowMaximizeIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="window-maximize"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons-windowminimize.mjs
var WindowMinimizeIcon;
var init_primeng_icons_windowminimize = __esm({
  "node_modules/primeng/fesm2022/primeng-icons-windowminimize.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_dist();
    init_primeng_icons_baseicon();
    WindowMinimizeIcon = class _WindowMinimizeIcon extends BaseIcon {
      pathId;
      onInit() {
        this.pathId = "url(#" + s3() + ")";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _WindowMinimizeIcon, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.3.4", type: _WindowMinimizeIcon, isStandalone: true, selector: '[data-p-icon="window-minimize"]', usesInheritance: true, ngImport: core_exports, template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `, isInline: true });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: WindowMinimizeIcon, decorators: [{
      type: Component,
      args: [{
        selector: '[data-p-icon="window-minimize"]',
        standalone: true,
        template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-icons.mjs
var init_primeng_icons = __esm({
  "node_modules/primeng/fesm2022/primeng-icons.mjs"() {
    "use strict";
    init_primeng_icons_angledoubledown();
    init_primeng_icons_angledoubleleft();
    init_primeng_icons_angledoubleright();
    init_primeng_icons_angledoubleup();
    init_primeng_icons_angledown();
    init_primeng_icons_angleleft();
    init_primeng_icons_angleright();
    init_primeng_icons_angleup();
    init_primeng_icons_arrowdown();
    init_primeng_icons_arrowdownleft();
    init_primeng_icons_arrowdownright();
    init_primeng_icons_arrowleft();
    init_primeng_icons_arrowright();
    init_primeng_icons_arrowup();
    init_primeng_icons_ban();
    init_primeng_icons_bars();
    init_primeng_icons_blank();
    init_primeng_icons_calendar();
    init_primeng_icons_caretleft();
    init_primeng_icons_caretright();
    init_primeng_icons_check();
    init_primeng_icons_chevrondown();
    init_primeng_icons_chevronleft();
    init_primeng_icons_chevronright();
    init_primeng_icons_chevronup();
    init_primeng_icons_exclamationtriangle();
    init_primeng_icons_eye();
    init_primeng_icons_eyeslash();
    init_primeng_icons_filter();
    init_primeng_icons_filterslash();
    init_primeng_icons_home();
    init_primeng_icons_infocircle();
    init_primeng_icons_minus();
    init_primeng_icons_pencil();
    init_primeng_icons_plus();
    init_primeng_icons_refresh();
    init_primeng_icons_search();
    init_primeng_icons_searchminus();
    init_primeng_icons_searchplus();
    init_primeng_icons_sortalt();
    init_primeng_icons_sortamountdown();
    init_primeng_icons_sortamountupalt();
    init_primeng_icons_spinner();
    init_primeng_icons_star();
    init_primeng_icons_starfill();
    init_primeng_icons_thlarge();
    init_primeng_icons_times();
    init_primeng_icons_timescircle();
    init_primeng_icons_trash();
    init_primeng_icons_undo();
    init_primeng_icons_upload();
    init_primeng_icons_windowmaximize();
    init_primeng_icons_windowminimize();
  }
});

// node_modules/@primeuix/styles/dist/ripple/index.mjs
var style5;
var init_ripple = __esm({
  "node_modules/@primeuix/styles/dist/ripple/index.mjs"() {
    "use strict";
    style5 = "\n    .p-ink {\n        display: block;\n        position: absolute;\n        background: dt('ripple.background');\n        border-radius: 100%;\n        transform: scale(0);\n        pointer-events: none;\n    }\n\n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n\n    @keyframes ripple {\n        100% {\n            opacity: 0;\n            transform: scale(2.5);\n        }\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-ripple.mjs
var style6, classes3, RippleStyle, RippleClasses, Ripple, RippleModule;
var init_primeng_ripple = __esm({
  "node_modules/primeng/fesm2022/primeng-ripple.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_basecomponent();
    init_ripple();
    init_primeng_base();
    style6 = /*css*/
    `
    ${style5}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;
    classes3 = {
      root: "p-ink"
    };
    RippleStyle = class _RippleStyle extends BaseStyle {
      name = "ripple";
      style = style6;
      classes = classes3;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _RippleStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _RippleStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: RippleStyle, decorators: [{
      type: Injectable
    }] });
    (function(RippleClasses2) {
      RippleClasses2["root"] = "p-ink";
    })(RippleClasses || (RippleClasses = {}));
    Ripple = class _Ripple extends BaseComponent {
      zone = inject(NgZone);
      _componentStyle = inject(RippleStyle);
      animationListener;
      mouseDownListener;
      timeout;
      constructor() {
        super();
        effect(() => {
          if (isPlatformBrowser(this.platformId)) {
            if (this.config.ripple()) {
              this.zone.runOutsideAngular(() => {
                this.create();
                this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
              });
            } else {
              this.remove();
            }
          }
        });
      }
      onAfterViewInit() {
      }
      onMouseDown(event) {
        let ink = this.getInk();
        if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") {
          return;
        }
        P(ink, "p-ink-active");
        if (!Tt(ink) && !Rt(ink)) {
          let d2 = Math.max(v(this.el.nativeElement), C(this.el.nativeElement));
          ink.style.height = d2 + "px";
          ink.style.width = d2 + "px";
        }
        let offset = K(this.el.nativeElement);
        let x4 = event.pageX - offset.left + this.document.body.scrollTop - Rt(ink) / 2;
        let y3 = event.pageY - offset.top + this.document.body.scrollLeft - Tt(ink) / 2;
        this.renderer.setStyle(ink, "top", y3 + "px");
        this.renderer.setStyle(ink, "left", x4 + "px");
        W(ink, "p-ink-active");
        this.timeout = setTimeout(() => {
          let ink2 = this.getInk();
          if (ink2) {
            P(ink2, "p-ink-active");
          }
        }, 401);
      }
      getInk() {
        const children = this.el.nativeElement.children;
        for (let i3 = 0; i3 < children.length; i3++) {
          if (typeof children[i3].className === "string" && children[i3].className.indexOf("p-ink") !== -1) {
            return children[i3];
          }
        }
        return null;
      }
      resetInk() {
        let ink = this.getInk();
        if (ink) {
          P(ink, "p-ink-active");
        }
      }
      onAnimationEnd(event) {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        P(event.currentTarget, "p-ink-active");
      }
      create() {
        let ink = this.renderer.createElement("span");
        this.renderer.addClass(ink, "p-ink");
        this.renderer.appendChild(this.el.nativeElement, ink);
        this.renderer.setAttribute(ink, "aria-hidden", "true");
        this.renderer.setAttribute(ink, "role", "presentation");
        if (!this.animationListener) {
          this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
        }
      }
      remove() {
        let ink = this.getInk();
        if (ink) {
          this.mouseDownListener && this.mouseDownListener();
          this.animationListener && this.animationListener();
          this.mouseDownListener = null;
          this.animationListener = null;
          Zt(ink);
        }
      }
      onDestroy() {
        if (this.config && this.config.ripple()) {
          this.remove();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _Ripple, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.3.4", type: _Ripple, isStandalone: true, selector: "[pRipple]", host: { classAttribute: "p-ripple" }, providers: [RippleStyle], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: Ripple, decorators: [{
      type: Directive,
      args: [{
        selector: "[pRipple]",
        host: {
          class: "p-ripple"
        },
        standalone: true,
        providers: [RippleStyle]
      }]
    }], ctorParameters: () => [] });
    RippleModule = class _RippleModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _RippleModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.4", ngImport: core_exports, type: _RippleModule, imports: [Ripple], exports: [Ripple] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _RippleModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: RippleModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Ripple],
        exports: [Ripple]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/button/index.mjs
var style7;
var init_button = __esm({
  "node_modules/@primeuix/styles/dist/button/index.mjs"() {
    "use strict";
    style7 = `
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;
  }
});

// node_modules/primeng/fesm2022/primeng-button.mjs
var classes4, ButtonStyle, ButtonClasses, BUTTON_INSTANCE, BUTTON_DIRECTIVE_INSTANCE, BUTTON_LABEL_INSTANCE, BUTTON_ICON_INSTANCE, INTERNAL_BUTTON_CLASSES, ButtonLabel, ButtonIcon, ButtonDirective, Button, ButtonModule;
var init_primeng_button = __esm({
  "node_modules/primeng/fesm2022/primeng-button.mjs"() {
    "use strict";
    init_primeng_types_button();
    init_common();
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_autofocus();
    init_primeng_badge();
    init_primeng_badge();
    init_primeng_basecomponent();
    init_primeng_bind();
    init_primeng_bind();
    init_primeng_fluid();
    init_primeng_icons();
    init_primeng_ripple();
    init_button();
    init_primeng_base();
    classes4 = {
      root: ({ instance }) => [
        "p-button p-component",
        {
          "p-button-icon-only": (instance.icon || instance.buttonProps?.icon || instance.iconTemplate || instance._iconTemplate || instance.loadingIcon || instance.loadingIconTemplate || instance._loadingIconTemplate) && !instance.label && !instance.buttonProps?.label,
          "p-button-vertical": (instance.iconPos === "top" || instance.iconPos === "bottom") && instance.label,
          "p-button-loading": instance.loading || instance.buttonProps?.loading,
          "p-button-link": instance.link || instance.buttonProps?.link,
          [`p-button-${instance.severity || instance.buttonProps?.severity}`]: instance.severity || instance.buttonProps?.severity,
          "p-button-raised": instance.raised || instance.buttonProps?.raised,
          "p-button-rounded": instance.rounded || instance.buttonProps?.rounded,
          "p-button-text": instance.text || instance.variant === "text" || instance.buttonProps?.text || instance.buttonProps?.variant === "text",
          "p-button-outlined": instance.outlined || instance.variant === "outlined" || instance.buttonProps?.outlined || instance.buttonProps?.variant === "outlined",
          "p-button-sm": instance.size === "small" || instance.buttonProps?.size === "small",
          "p-button-lg": instance.size === "large" || instance.buttonProps?.size === "large",
          "p-button-plain": instance.plain || instance.buttonProps?.plain,
          "p-button-fluid": instance.hasFluid
        }
      ],
      loadingIcon: "p-button-loading-icon",
      icon: ({ instance }) => [
        "p-button-icon",
        {
          [`p-button-icon-${instance.iconPos || instance.buttonProps?.iconPos}`]: instance.label || instance.buttonProps?.label,
          "p-button-icon-left": (instance.iconPos === "left" || instance.buttonProps?.iconPos === "left") && instance.label || instance.buttonProps?.label,
          "p-button-icon-right": (instance.iconPos === "right" || instance.buttonProps?.iconPos === "right") && instance.label || instance.buttonProps?.label
        },
        instance.icon,
        instance.buttonProps?.icon
      ],
      spinnerIcon: ({ instance }) => {
        return Object.entries(instance.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
      },
      label: "p-button-label"
    };
    ButtonStyle = class _ButtonStyle extends BaseStyle {
      name = "button";
      style = style7;
      classes = classes4;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ButtonStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ButtonStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ButtonStyle, decorators: [{
      type: Injectable
    }] });
    (function(ButtonClasses2) {
      ButtonClasses2["root"] = "p-button";
      ButtonClasses2["loadingIcon"] = "p-button-loading-icon";
      ButtonClasses2["icon"] = "p-button-icon";
      ButtonClasses2["label"] = "p-button-label";
    })(ButtonClasses || (ButtonClasses = {}));
    BUTTON_INSTANCE = new InjectionToken("BUTTON_INSTANCE");
    BUTTON_DIRECTIVE_INSTANCE = new InjectionToken("BUTTON_DIRECTIVE_INSTANCE");
    BUTTON_LABEL_INSTANCE = new InjectionToken("BUTTON_LABEL_INSTANCE");
    BUTTON_ICON_INSTANCE = new InjectionToken("BUTTON_ICON_INSTANCE");
    INTERNAL_BUTTON_CLASSES = {
      button: "p-button",
      component: "p-component",
      iconOnly: "p-button-icon-only",
      disabled: "p-disabled",
      loading: "p-button-loading",
      labelOnly: "p-button-loading-label-only"
    };
    ButtonLabel = class _ButtonLabel extends BaseComponent {
      ptButtonLabel = input(...ngDevMode ? [void 0, { debugName: "ptButtonLabel" }] : []);
      $pcButtonLabel = inject(BUTTON_LABEL_INSTANCE, { optional: true, skipSelf: true }) ?? void 0;
      bindDirectiveInstance = inject(Bind, { self: true });
      constructor() {
        super();
        effect(() => {
          this.ptButtonLabel() && this.directivePT.set(this.ptButtonLabel());
        });
      }
      onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ButtonLabel, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.3.4", type: _ButtonLabel, isStandalone: true, selector: "[pButtonLabel]", inputs: { ptButtonLabel: { classPropertyName: "ptButtonLabel", publicName: "ptButtonLabel", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.p-button-label": "true" } }, providers: [ButtonStyle, { provide: BUTTON_LABEL_INSTANCE, useExisting: _ButtonLabel }, { provide: PARENT_INSTANCE, useExisting: _ButtonLabel }], usesInheritance: true, hostDirectives: [{ directive: Bind }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ButtonLabel, decorators: [{
      type: Directive,
      args: [{
        selector: "[pButtonLabel]",
        providers: [ButtonStyle, { provide: BUTTON_LABEL_INSTANCE, useExisting: ButtonLabel }, { provide: PARENT_INSTANCE, useExisting: ButtonLabel }],
        standalone: true,
        host: {
          "[class.p-button-label]": "true"
        },
        hostDirectives: [Bind]
      }]
    }], ctorParameters: () => [] });
    ButtonIcon = class _ButtonIcon extends BaseComponent {
      ptButtonIcon = input(...ngDevMode ? [void 0, { debugName: "ptButtonIcon" }] : []);
      $pcButtonIcon = inject(BUTTON_ICON_INSTANCE, { optional: true, skipSelf: true }) ?? void 0;
      bindDirectiveInstance = inject(Bind, { self: true });
      constructor() {
        super();
        effect(() => {
          this.ptButtonIcon() && this.directivePT.set(this.ptButtonIcon());
        });
      }
      onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ButtonIcon, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.3.4", type: _ButtonIcon, isStandalone: true, selector: "[pButtonIcon]", inputs: { ptButtonIcon: { classPropertyName: "ptButtonIcon", publicName: "ptButtonIcon", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.p-button-icon": "true" } }, providers: [ButtonStyle, { provide: BUTTON_ICON_INSTANCE, useExisting: _ButtonIcon }, { provide: PARENT_INSTANCE, useExisting: _ButtonIcon }], usesInheritance: true, hostDirectives: [{ directive: Bind }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ButtonIcon, decorators: [{
      type: Directive,
      args: [{
        selector: "[pButtonIcon]",
        providers: [ButtonStyle, { provide: BUTTON_ICON_INSTANCE, useExisting: ButtonIcon }, { provide: PARENT_INSTANCE, useExisting: ButtonIcon }],
        standalone: true,
        host: {
          "[class.p-button-icon]": "true"
        },
        hostDirectives: [Bind]
      }]
    }], ctorParameters: () => [] });
    ButtonDirective = class _ButtonDirective extends BaseComponent {
      $pcButtonDirective = inject(BUTTON_DIRECTIVE_INSTANCE, { optional: true, skipSelf: true }) ?? void 0;
      bindDirectiveInstance = inject(Bind, { self: true });
      _componentStyle = inject(ButtonStyle);
      ptButtonDirective = input(...ngDevMode ? [void 0, { debugName: "ptButtonDirective" }] : []);
      hostName = "";
      onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptm("root"));
      }
      constructor() {
        super();
        effect(() => {
          this.ptButtonDirective() && this.directivePT.set(this.ptButtonDirective());
        });
      }
      /**
       * Add a textual class to the button without a background initially.
       * @group Props
       */
      text = false;
      /**
       * Add a plain textual class to the button without a background initially.
       * @group Props
       */
      plain = false;
      /**
       * Add a shadow to indicate elevation.
       * @group Props
       */
      raised = false;
      /**
       * Defines the size of the button.
       * @group Props
       */
      size;
      /**
       * Add a border class without a background initially.
       * @group Props
       */
      outlined = false;
      /**
       * Add a circular border radius to the button.
       * @group Props
       */
      rounded = false;
      /**
       * Position of the icon.
       * @group Props
       */
      iconPos = "left";
      /**
       * Icon to display in loading state.
       * @group Props
       */
      loadingIcon;
      /**
       * Spans 100% width of the container when enabled.
       * @defaultValue undefined
       * @group Props
       */
      fluid = input(void 0, ...ngDevMode ? [{ debugName: "fluid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      iconSignal = contentChild(ButtonIcon, ...ngDevMode ? [{ debugName: "iconSignal" }] : []);
      labelSignal = contentChild(ButtonLabel, ...ngDevMode ? [{ debugName: "labelSignal" }] : []);
      isIconOnly = computed(() => !!(!this.labelSignal() && this.iconSignal()), ...ngDevMode ? [{ debugName: "isIconOnly" }] : []);
      _label;
      _icon;
      _loading = false;
      _severity;
      _buttonProps;
      initialized;
      get htmlElement() {
        return this.el.nativeElement;
      }
      _internalClasses = Object.values(INTERNAL_BUTTON_CLASSES);
      pcFluid = inject(Fluid, { optional: true, host: true, skipSelf: true });
      isTextButton = computed(() => !!(!this.iconSignal() && this.labelSignal() && this.text), ...ngDevMode ? [{ debugName: "isTextButton" }] : []);
      /**
       * Text of the button.
       * @deprecated use pButtonLabel directive instead.
       * @group Props
       */
      get label() {
        return this._label;
      }
      set label(val) {
        this._label = val;
        if (this.initialized) {
          this.updateLabel();
          this.updateIcon();
          this.setStyleClass();
        }
      }
      /**
       * Name of the icon.
       * @deprecated use pButtonIcon directive instead
       * @group Props
       */
      get icon() {
        return this._icon;
      }
      set icon(val) {
        this._icon = val;
        if (this.initialized) {
          this.updateIcon();
          this.setStyleClass();
        }
      }
      /**
       * Whether the button is in loading state.
       * @group Props
       */
      get loading() {
        return this._loading;
      }
      set loading(val) {
        this._loading = val;
        if (this.initialized) {
          this.updateIcon();
          this.setStyleClass();
        }
      }
      /**
       * Used to pass all properties of the ButtonProps to the Button component.
       * @deprecated assign props directly to the button element.
       * @group Props
       */
      get buttonProps() {
        return this._buttonProps;
      }
      set buttonProps(val) {
        this._buttonProps = val;
        if (val && typeof val === "object") {
          Object.entries(val).forEach(([k4, v3]) => this[`_${k4}`] !== v3 && (this[`_${k4}`] = v3));
        }
      }
      /**
       * Defines the style of the button.
       * @group Props
       */
      get severity() {
        return this._severity;
      }
      set severity(value) {
        this._severity = value;
        if (this.initialized) {
          this.setStyleClass();
        }
      }
      spinnerIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;
      onAfterViewInit() {
        W(this.htmlElement, this.getStyleClass().join(" "));
        this.createIcon();
        this.createLabel();
        this.initialized = true;
      }
      getStyleClass() {
        const styleClass = [INTERNAL_BUTTON_CLASSES.button, INTERNAL_BUTTON_CLASSES.component];
        if (this.icon && !this.label && l2(this.htmlElement.textContent)) {
          styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
        }
        if (this.loading) {
          styleClass.push(INTERNAL_BUTTON_CLASSES.disabled, INTERNAL_BUTTON_CLASSES.loading);
          if (!this.icon && this.label) {
            styleClass.push(INTERNAL_BUTTON_CLASSES.labelOnly);
          }
          if (this.icon && !this.label && !l2(this.htmlElement.textContent)) {
            styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
          }
        }
        if (this.text) {
          styleClass.push("p-button-text");
        }
        if (this.severity) {
          styleClass.push(`p-button-${this.severity}`);
        }
        if (this.plain) {
          styleClass.push("p-button-plain");
        }
        if (this.raised) {
          styleClass.push("p-button-raised");
        }
        if (this.size) {
          styleClass.push(`p-button-${this.size}`);
        }
        if (this.outlined) {
          styleClass.push("p-button-outlined");
        }
        if (this.rounded) {
          styleClass.push("p-button-rounded");
        }
        if (this.size === "small") {
          styleClass.push("p-button-sm");
        }
        if (this.size === "large") {
          styleClass.push("p-button-lg");
        }
        if (this.hasFluid) {
          styleClass.push("p-button-fluid");
        }
        return styleClass;
      }
      get hasFluid() {
        return this.fluid() ?? !!this.pcFluid;
      }
      setStyleClass() {
        const styleClass = this.getStyleClass();
        this.removeExistingSeverityClass();
        this.htmlElement.classList.remove(...this._internalClasses);
        this.htmlElement.classList.add(...styleClass);
      }
      removeExistingSeverityClass() {
        const severityArray = ["success", "info", "warn", "danger", "help", "primary", "secondary", "contrast"];
        const existingSeverityClass = this.htmlElement.classList.value.split(" ").find((cls) => severityArray.some((severity) => cls === `p-button-${severity}`));
        if (existingSeverityClass) {
          this.htmlElement.classList.remove(existingSeverityClass);
        }
      }
      createLabel() {
        const created = z(this.htmlElement, ".p-button-label");
        if (!created && this.label) {
          let labelElement = U("span", { class: this.cx("label"), "p-bind": this.ptm("label"), "aria-hidden": this.icon && !this.label ? "true" : null });
          labelElement.appendChild(this.document.createTextNode(this.label));
          this.htmlElement.appendChild(labelElement);
        }
      }
      createIcon() {
        const created = z(this.htmlElement, ".p-button-icon");
        if (!created && (this.icon || this.loading)) {
          let iconPosClass = this.label ? "p-button-icon-" + this.iconPos : null;
          let iconClass = this.getIconClass();
          let iconElement = U("span", { class: this.cn(this.cx("icon"), iconPosClass, iconClass), "aria-hidden": "true", "p-bind": this.ptm("icon") });
          if (!this.loadingIcon && this.loading) {
            iconElement.innerHTML = this.spinnerIcon;
          }
          this.htmlElement.insertBefore(iconElement, this.htmlElement.firstChild);
        }
      }
      updateLabel() {
        let labelElement = z(this.htmlElement, ".p-button-label");
        if (!this.label) {
          labelElement && this.htmlElement.removeChild(labelElement);
          return;
        }
        labelElement ? labelElement.textContent = this.label : this.createLabel();
      }
      updateIcon() {
        let iconElement = z(this.htmlElement, ".p-button-icon");
        let labelElement = z(this.htmlElement, ".p-button-label");
        if (this.loading && !this.loadingIcon && iconElement) {
          iconElement.innerHTML = this.spinnerIcon;
        } else if (iconElement?.innerHTML) {
          iconElement.innerHTML = "";
        }
        if (iconElement) {
          if (this.iconPos) {
            iconElement.className = "p-button-icon " + (labelElement ? "p-button-icon-" + this.iconPos : "") + " " + this.getIconClass();
          } else {
            iconElement.className = "p-button-icon " + this.getIconClass();
          }
        } else {
          this.createIcon();
        }
      }
      getIconClass() {
        return this.loading ? "p-button-loading-icon " + (this.loadingIcon ? this.loadingIcon : "p-icon") : this.icon || "p-hidden";
      }
      onDestroy() {
        this.initialized = false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ButtonDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.2.0", version: "20.3.4", type: _ButtonDirective, isStandalone: true, selector: "[pButton]", inputs: { ptButtonDirective: { classPropertyName: "ptButtonDirective", publicName: "ptButtonDirective", isSignal: true, isRequired: false, transformFunction: null }, hostName: { classPropertyName: "hostName", publicName: "hostName", isSignal: false, isRequired: false, transformFunction: null }, text: { classPropertyName: "text", publicName: "text", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, plain: { classPropertyName: "plain", publicName: "plain", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, raised: { classPropertyName: "raised", publicName: "raised", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, size: { classPropertyName: "size", publicName: "size", isSignal: false, isRequired: false, transformFunction: null }, outlined: { classPropertyName: "outlined", publicName: "outlined", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, rounded: { classPropertyName: "rounded", publicName: "rounded", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, iconPos: { classPropertyName: "iconPos", publicName: "iconPos", isSignal: false, isRequired: false, transformFunction: null }, loadingIcon: { classPropertyName: "loadingIcon", publicName: "loadingIcon", isSignal: false, isRequired: false, transformFunction: null }, fluid: { classPropertyName: "fluid", publicName: "fluid", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: false, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: false, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: false, isRequired: false, transformFunction: null }, buttonProps: { classPropertyName: "buttonProps", publicName: "buttonProps", isSignal: false, isRequired: false, transformFunction: null }, severity: { classPropertyName: "severity", publicName: "severity", isSignal: false, isRequired: false, transformFunction: null } }, host: { properties: { "class.p-button-icon-only": "isIconOnly()", "class.p-button-text": "isTextButton()" } }, providers: [ButtonStyle, { provide: BUTTON_DIRECTIVE_INSTANCE, useExisting: _ButtonDirective }, { provide: PARENT_INSTANCE, useExisting: _ButtonDirective }], queries: [{ propertyName: "iconSignal", first: true, predicate: ButtonIcon, descendants: true, isSignal: true }, { propertyName: "labelSignal", first: true, predicate: ButtonLabel, descendants: true, isSignal: true }], usesInheritance: true, hostDirectives: [{ directive: Bind }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ButtonDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[pButton]",
        standalone: true,
        providers: [ButtonStyle, { provide: BUTTON_DIRECTIVE_INSTANCE, useExisting: ButtonDirective }, { provide: PARENT_INSTANCE, useExisting: ButtonDirective }],
        host: {
          "[class.p-button-icon-only]": "isIconOnly()",
          "[class.p-button-text]": "isTextButton()"
        },
        hostDirectives: [Bind]
      }]
    }], ctorParameters: () => [], propDecorators: { hostName: [{
      type: Input
    }], text: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], plain: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], raised: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], size: [{
      type: Input
    }], outlined: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], rounded: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], iconPos: [{
      type: Input
    }], loadingIcon: [{
      type: Input
    }], label: [{
      type: Input
    }], icon: [{
      type: Input
    }], loading: [{
      type: Input
    }], buttonProps: [{
      type: Input
    }], severity: [{
      type: Input
    }] } });
    Button = class _Button extends BaseComponent {
      hostName = "";
      $pcButton = inject(BUTTON_INSTANCE, { optional: true, skipSelf: true }) ?? void 0;
      bindDirectiveInstance = inject(Bind, { self: true });
      _componentStyle = inject(ButtonStyle);
      onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptm("host"));
      }
      /**
       * Type of the button.
       * @group Props
       */
      type = "button";
      /**
       * Value of the badge.
       * @group Props
       */
      badge;
      /**
       * When present, it specifies that the component should be disabled.
       * @group Props
       */
      disabled;
      /**
       * Add a shadow to indicate elevation.
       * @group Props
       */
      raised = false;
      /**
       * Add a circular border radius to the button.
       * @group Props
       */
      rounded = false;
      /**
       * Add a textual class to the button without a background initially.
       * @group Props
       */
      text = false;
      /**
       * Add a plain textual class to the button without a background initially.
       * @group Props
       */
      plain = false;
      /**
       * Add a border class without a background initially.
       * @group Props
       */
      outlined = false;
      /**
       * Add a link style to the button.
       * @group Props
       */
      link = false;
      /**
       * Add a tabindex to the button.
       * @group Props
       */
      tabindex;
      /**
       * Defines the size of the button.
       * @group Props
       */
      size;
      /**
       * Specifies the variant of the component.
       * @group Props
       */
      variant;
      /**
       * Inline style of the element.
       * @group Props
       */
      style;
      /**
       * Class of the element.
       * @group Props
       */
      styleClass;
      /**
       * Style class of the badge.
       * @group Props
       * @deprecated use badgeSeverity instead.
       */
      badgeClass;
      /**
       * Severity type of the badge.
       * @group Props
       * @defaultValue secondary
       */
      badgeSeverity = "secondary";
      /**
       * Used to define a string that autocomplete attribute the current element.
       * @group Props
       */
      ariaLabel;
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      autofocus;
      /**
       * Position of the icon.
       * @group Props
       */
      iconPos = "left";
      /**
       * Name of the icon.
       * @group Props
       */
      icon;
      /**
       * Text of the button.
       * @group Props
       */
      label;
      /**
       * Whether the button is in loading state.
       * @group Props
       */
      loading = false;
      /**
       * Icon to display in loading state.
       * @group Props
       */
      loadingIcon;
      /**
       * Defines the style of the button.
       * @group Props
       */
      severity;
      /**
       * Used to pass all properties of the ButtonProps to the Button component.
       * @group Props
       */
      buttonProps;
      /**
       * Spans 100% width of the container when enabled.
       * @defaultValue undefined
       * @group Props
       */
      fluid = input(void 0, ...ngDevMode ? [{ debugName: "fluid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * Callback to execute when button is clicked.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
       * @param {MouseEvent} event - Mouse event.
       * @group Emits
       */
      onClick = new EventEmitter();
      /**
       * Callback to execute when button is focused.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
       * @param {FocusEvent} event - Focus event.
       * @group Emits
       */
      onFocus = new EventEmitter();
      /**
       * Callback to execute when button loses focus.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
       * @param {FocusEvent} event - Focus event.
       * @group Emits
       */
      onBlur = new EventEmitter();
      /**
       * Template of the content.
       * @group Templates
       **/
      contentTemplate;
      /**
       * Template of the loading.
       * @group Templates
       **/
      loadingIconTemplate;
      /**
       * Template of the icon.
       * @group Templates
       **/
      iconTemplate;
      templates;
      pcFluid = inject(Fluid, { optional: true, host: true, skipSelf: true });
      get hasFluid() {
        return this.fluid() ?? !!this.pcFluid;
      }
      _contentTemplate;
      _iconTemplate;
      _loadingIconTemplate;
      onAfterContentInit() {
        this.templates?.forEach((item) => {
          switch (item.getType()) {
            case "content":
              this._contentTemplate = item.template;
              break;
            case "icon":
              this._iconTemplate = item.template;
              break;
            case "loadingicon":
              this._loadingIconTemplate = item.template;
              break;
            default:
              this._contentTemplate = item.template;
              break;
          }
        });
      }
      spinnerIconClass() {
        return Object.entries(this.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
      }
      iconClass() {
        return {
          [`p-button-loading-icon pi-spin ${this.loadingIcon ?? ""}`]: this.loading,
          "p-button-icon": true,
          [this.icon]: true,
          "p-button-icon-left": this.iconPos === "left" && this.label,
          "p-button-icon-right": this.iconPos === "right" && this.label,
          "p-button-icon-top": this.iconPos === "top" && this.label,
          "p-button-icon-bottom": this.iconPos === "bottom" && this.label
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _Button, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.3.4", type: _Button, isStandalone: true, selector: "p-button", inputs: { hostName: { classPropertyName: "hostName", publicName: "hostName", isSignal: false, isRequired: false, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: false, isRequired: false, transformFunction: null }, badge: { classPropertyName: "badge", publicName: "badge", isSignal: false, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, raised: { classPropertyName: "raised", publicName: "raised", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, rounded: { classPropertyName: "rounded", publicName: "rounded", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, text: { classPropertyName: "text", publicName: "text", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, plain: { classPropertyName: "plain", publicName: "plain", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, outlined: { classPropertyName: "outlined", publicName: "outlined", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, link: { classPropertyName: "link", publicName: "link", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, tabindex: { classPropertyName: "tabindex", publicName: "tabindex", isSignal: false, isRequired: false, transformFunction: numberAttribute }, size: { classPropertyName: "size", publicName: "size", isSignal: false, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: false, isRequired: false, transformFunction: null }, style: { classPropertyName: "style", publicName: "style", isSignal: false, isRequired: false, transformFunction: null }, styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: false, isRequired: false, transformFunction: null }, badgeClass: { classPropertyName: "badgeClass", publicName: "badgeClass", isSignal: false, isRequired: false, transformFunction: null }, badgeSeverity: { classPropertyName: "badgeSeverity", publicName: "badgeSeverity", isSignal: false, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: false, isRequired: false, transformFunction: null }, autofocus: { classPropertyName: "autofocus", publicName: "autofocus", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, iconPos: { classPropertyName: "iconPos", publicName: "iconPos", isSignal: false, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: false, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: false, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, loadingIcon: { classPropertyName: "loadingIcon", publicName: "loadingIcon", isSignal: false, isRequired: false, transformFunction: null }, severity: { classPropertyName: "severity", publicName: "severity", isSignal: false, isRequired: false, transformFunction: null }, buttonProps: { classPropertyName: "buttonProps", publicName: "buttonProps", isSignal: false, isRequired: false, transformFunction: null }, fluid: { classPropertyName: "fluid", publicName: "fluid", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onClick: "onClick", onFocus: "onFocus", onBlur: "onBlur" }, providers: [ButtonStyle, { provide: BUTTON_INSTANCE, useExisting: _Button }, { provide: PARENT_INSTANCE, useExisting: _Button }], queries: [{ propertyName: "contentTemplate", first: true, predicate: ["content"], descendants: true }, { propertyName: "loadingIconTemplate", first: true, predicate: ["loadingicon"], descendants: true }, { propertyName: "iconTemplate", first: true, predicate: ["icon"], descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, hostDirectives: [{ directive: Bind }], ngImport: core_exports, template: `
        <button
            [attr.type]="type || buttonProps?.type"
            [attr.aria-label]="ariaLabel || buttonProps?.ariaLabel"
            [ngStyle]="style || buttonProps?.style"
            [disabled]="disabled || loading || buttonProps?.disabled"
            [class]="cn(cx('root'), styleClass, buttonProps?.styleClass)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.tabindex]="tabindex || buttonProps?.tabindex"
            [pAutoFocus]="autofocus || buttonProps?.autofocus"
            [pBind]="ptm('root')"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [class]="cn(cx('loadingIcon'), 'pi-spin', loadingIcon)" [pBind]="ptm('loadingIcon')" [attr.aria-hidden]="true"></span>
                    <svg data-p-icon="spinner" *ngIf="!loadingIcon" [class]="cn(cx('loadingIcon'), spinnerIconClass())" [pBind]="ptm('loadingIcon')" [spin]="true" [attr.aria-hidden]="true" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: cx('loadingIcon'), pt: ptm('loadingIcon') }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!loading">
                <span *ngIf="icon && !iconTemplate && !_iconTemplate" [class]="cn('icon', iconClass())" [pBind]="ptm('icon')"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: cx('icon'), pt: ptm('icon') }"></ng-template>
            </ng-container>
            <span [class]="cx('label')" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate && !_contentTemplate && label" [pBind]="ptm('label')">{{ label }}</span>
            <p-badge *ngIf="!contentTemplate && !_contentTemplate && badge" [value]="badge" [severity]="badgeSeverity" [pt]="ptm('pcBadge')"></p-badge>
        </button>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: Ripple, selector: "[pRipple]" }, { kind: "directive", type: AutoFocus, selector: "[pAutoFocus]", inputs: ["pAutoFocus"] }, { kind: "component", type: SpinnerIcon, selector: '[data-p-icon="spinner"]' }, { kind: "ngmodule", type: BadgeModule }, { kind: "component", type: Badge, selector: "p-badge", inputs: ["styleClass", "badgeSize", "size", "severity", "value", "badgeDisabled"] }, { kind: "ngmodule", type: SharedModule }, { kind: "directive", type: Bind, selector: "[pBind]", inputs: ["pBind"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: Button, decorators: [{
      type: Component,
      args: [{
        selector: "p-button",
        standalone: true,
        imports: [CommonModule, Ripple, AutoFocus, SpinnerIcon, BadgeModule, SharedModule, Bind],
        template: `
        <button
            [attr.type]="type || buttonProps?.type"
            [attr.aria-label]="ariaLabel || buttonProps?.ariaLabel"
            [ngStyle]="style || buttonProps?.style"
            [disabled]="disabled || loading || buttonProps?.disabled"
            [class]="cn(cx('root'), styleClass, buttonProps?.styleClass)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.tabindex]="tabindex || buttonProps?.tabindex"
            [pAutoFocus]="autofocus || buttonProps?.autofocus"
            [pBind]="ptm('root')"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [class]="cn(cx('loadingIcon'), 'pi-spin', loadingIcon)" [pBind]="ptm('loadingIcon')" [attr.aria-hidden]="true"></span>
                    <svg data-p-icon="spinner" *ngIf="!loadingIcon" [class]="cn(cx('loadingIcon'), spinnerIconClass())" [pBind]="ptm('loadingIcon')" [spin]="true" [attr.aria-hidden]="true" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: cx('loadingIcon'), pt: ptm('loadingIcon') }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!loading">
                <span *ngIf="icon && !iconTemplate && !_iconTemplate" [class]="cn('icon', iconClass())" [pBind]="ptm('icon')"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: cx('icon'), pt: ptm('icon') }"></ng-template>
            </ng-container>
            <span [class]="cx('label')" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate && !_contentTemplate && label" [pBind]="ptm('label')">{{ label }}</span>
            <p-badge *ngIf="!contentTemplate && !_contentTemplate && badge" [value]="badge" [severity]="badgeSeverity" [pt]="ptm('pcBadge')"></p-badge>
        </button>
    `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [ButtonStyle, { provide: BUTTON_INSTANCE, useExisting: Button }, { provide: PARENT_INSTANCE, useExisting: Button }],
        hostDirectives: [Bind]
      }]
    }], propDecorators: { hostName: [{
      type: Input
    }], type: [{
      type: Input
    }], badge: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], raised: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], rounded: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], text: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], plain: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], outlined: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], link: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabindex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], size: [{
      type: Input
    }], variant: [{
      type: Input
    }], style: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], badgeClass: [{
      type: Input
    }], badgeSeverity: [{
      type: Input
    }], ariaLabel: [{
      type: Input
    }], autofocus: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], iconPos: [{
      type: Input
    }], icon: [{
      type: Input
    }], label: [{
      type: Input
    }], loading: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], loadingIcon: [{
      type: Input
    }], severity: [{
      type: Input
    }], buttonProps: [{
      type: Input
    }], onClick: [{
      type: Output
    }], onFocus: [{
      type: Output
    }], onBlur: [{
      type: Output
    }], contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }], loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon"]
    }], iconTemplate: [{
      type: ContentChild,
      args: ["icon"]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    ButtonModule = class _ButtonModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ButtonModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.4", ngImport: core_exports, type: _ButtonModule, imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon], exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ButtonModule, imports: [CommonModule, Button, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ButtonModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
        exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-types-dialog.mjs
var init_primeng_types_dialog = __esm({
  "node_modules/primeng/fesm2022/primeng-types-dialog.mjs"() {
    "use strict";
  }
});

// node_modules/primeng/fesm2022/primeng-focustrap.mjs
var FocusTrap, FocusTrapModule;
var init_primeng_focustrap = __esm({
  "node_modules/primeng/fesm2022/primeng-focustrap.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_basecomponent();
    FocusTrap = class _FocusTrap extends BaseComponent {
      /**
       * When set as true, focus wouldn't be managed.
       * @group Props
       */
      pFocusTrapDisabled = false;
      platformId = inject(PLATFORM_ID);
      document = inject(DOCUMENT);
      firstHiddenFocusableElement;
      lastHiddenFocusableElement;
      onInit() {
        if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled) {
          !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements();
        }
      }
      onChanges(changes) {
        if (changes.pFocusTrapDisabled && isPlatformBrowser(this.platformId)) {
          if (changes.pFocusTrapDisabled.currentValue) {
            this.removeHiddenFocusableElements();
          } else {
            this.createHiddenFocusableElements();
          }
        }
      }
      removeHiddenFocusableElements() {
        if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) {
          this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
        }
        if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) {
          this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
        }
      }
      getComputedSelector(selector) {
        return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ""}`;
      }
      createHiddenFocusableElements() {
        const tabindex = "0";
        const createFocusableElement = (onFocus) => {
          return U("span", {
            class: "p-hidden-accessible p-hidden-focusable",
            tabindex,
            role: "presentation",
            "aria-hidden": true,
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true,
            onFocus: onFocus?.bind(this)
          });
        };
        this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
        this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
        this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
        this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
        this.el.nativeElement.prepend(this.firstHiddenFocusableElement);
        this.el.nativeElement.append(this.lastHiddenFocusableElement);
      }
      onFirstHiddenElementFocus(event) {
        const { currentTarget, relatedTarget } = event;
        const focusableElement = relatedTarget === this.lastHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? vt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement;
        bt(focusableElement);
      }
      onLastHiddenElementFocus(event) {
        const { currentTarget, relatedTarget } = event;
        const focusableElement = relatedTarget === this.firstHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? Lt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement;
        bt(focusableElement);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _FocusTrap, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.3.4", type: _FocusTrap, isStandalone: true, selector: "[pFocusTrap]", inputs: { pFocusTrapDisabled: ["pFocusTrapDisabled", "pFocusTrapDisabled", booleanAttribute] }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: FocusTrap, decorators: [{
      type: Directive,
      args: [{
        selector: "[pFocusTrap]",
        standalone: true
      }]
    }], propDecorators: { pFocusTrapDisabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    FocusTrapModule = class _FocusTrapModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _FocusTrapModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.4", ngImport: core_exports, type: _FocusTrapModule, imports: [FocusTrap], exports: [FocusTrap] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _FocusTrapModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: FocusTrapModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [FocusTrap],
        exports: [FocusTrap]
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-utils.mjs
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({ key, value: newZIndex });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex(),
    generateZIndex,
    revertZIndex
  };
}
var zindexutils;
var init_primeng_utils = __esm({
  "node_modules/primeng/fesm2022/primeng-utils.mjs"() {
    "use strict";
    zindexutils = ZIndexUtils();
  }
});

// node_modules/@primeuix/styles/dist/dialog/index.mjs
var style8;
var init_dialog = __esm({
  "node_modules/@primeuix/styles/dist/dialog/index.mjs"() {
    "use strict";
    style8 = "\n    .p-dialog {\n        max-height: 90%;\n        transform: scale(1);\n        border-radius: dt('dialog.border.radius');\n        box-shadow: dt('dialog.shadow');\n        background: dt('dialog.background');\n        border: 1px solid dt('dialog.border.color');\n        color: dt('dialog.color');\n    }\n\n    .p-dialog-content {\n        overflow-y: auto;\n        padding: dt('dialog.content.padding');\n    }\n\n    .p-dialog-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-shrink: 0;\n        padding: dt('dialog.header.padding');\n    }\n\n    .p-dialog-title {\n        font-weight: dt('dialog.title.font.weight');\n        font-size: dt('dialog.title.font.size');\n    }\n\n    .p-dialog-footer {\n        flex-shrink: 0;\n        padding: dt('dialog.footer.padding');\n        display: flex;\n        justify-content: flex-end;\n        gap: dt('dialog.footer.gap');\n    }\n\n    .p-dialog-header-actions {\n        display: flex;\n        align-items: center;\n        gap: dt('dialog.header.gap');\n    }\n\n    .p-dialog-enter-active {\n        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-dialog-leave-active {\n        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n\n    .p-dialog-enter-from,\n    .p-dialog-leave-to {\n        opacity: 0;\n        transform: scale(0.7);\n    }\n\n    .p-dialog-top .p-dialog,\n    .p-dialog-bottom .p-dialog,\n    .p-dialog-left .p-dialog,\n    .p-dialog-right .p-dialog,\n    .p-dialog-topleft .p-dialog,\n    .p-dialog-topright .p-dialog,\n    .p-dialog-bottomleft .p-dialog,\n    .p-dialog-bottomright .p-dialog {\n        margin: 0.75rem;\n        transform: translate3d(0px, 0px, 0px);\n    }\n\n    .p-dialog-top .p-dialog-enter-active,\n    .p-dialog-top .p-dialog-leave-active,\n    .p-dialog-bottom .p-dialog-enter-active,\n    .p-dialog-bottom .p-dialog-leave-active,\n    .p-dialog-left .p-dialog-enter-active,\n    .p-dialog-left .p-dialog-leave-active,\n    .p-dialog-right .p-dialog-enter-active,\n    .p-dialog-right .p-dialog-leave-active,\n    .p-dialog-topleft .p-dialog-enter-active,\n    .p-dialog-topleft .p-dialog-leave-active,\n    .p-dialog-topright .p-dialog-enter-active,\n    .p-dialog-topright .p-dialog-leave-active,\n    .p-dialog-bottomleft .p-dialog-enter-active,\n    .p-dialog-bottomleft .p-dialog-leave-active,\n    .p-dialog-bottomright .p-dialog-enter-active,\n    .p-dialog-bottomright .p-dialog-leave-active {\n        transition: all 0.3s ease-out;\n    }\n\n    .p-dialog-top .p-dialog-enter-from,\n    .p-dialog-top .p-dialog-leave-to {\n        transform: translate3d(0px, -100%, 0px);\n    }\n\n    .p-dialog-bottom .p-dialog-enter-from,\n    .p-dialog-bottom .p-dialog-leave-to {\n        transform: translate3d(0px, 100%, 0px);\n    }\n\n    .p-dialog-left .p-dialog-enter-from,\n    .p-dialog-left .p-dialog-leave-to,\n    .p-dialog-topleft .p-dialog-enter-from,\n    .p-dialog-topleft .p-dialog-leave-to,\n    .p-dialog-bottomleft .p-dialog-enter-from,\n    .p-dialog-bottomleft .p-dialog-leave-to {\n        transform: translate3d(-100%, 0px, 0px);\n    }\n\n    .p-dialog-right .p-dialog-enter-from,\n    .p-dialog-right .p-dialog-leave-to,\n    .p-dialog-topright .p-dialog-enter-from,\n    .p-dialog-topright .p-dialog-leave-to,\n    .p-dialog-bottomright .p-dialog-enter-from,\n    .p-dialog-bottomright .p-dialog-leave-to {\n        transform: translate3d(100%, 0px, 0px);\n    }\n\n    .p-dialog-left:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-left:dir(rtl) .p-dialog-leave-to,\n    .p-dialog-topleft:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-topleft:dir(rtl) .p-dialog-leave-to,\n    .p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {\n        transform: translate3d(100%, 0px, 0px);\n    }\n\n    .p-dialog-right:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-right:dir(rtl) .p-dialog-leave-to,\n    .p-dialog-topright:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-topright:dir(rtl) .p-dialog-leave-to,\n    .p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,\n    .p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {\n        transform: translate3d(-100%, 0px, 0px);\n    }\n\n    .p-dialog-maximized {\n        width: 100vw !important;\n        height: 100vh !important;\n        top: 0px !important;\n        left: 0px !important;\n        max-height: 100%;\n        height: 100%;\n        border-radius: 0;\n    }\n\n    .p-dialog-maximized .p-dialog-content {\n        flex-grow: 1;\n    }\n\n    .p-dialog .p-resizable-handle {\n        position: absolute;\n        font-size: 0.1px;\n        display: block;\n        cursor: se-resize;\n        width: 12px;\n        height: 12px;\n        right: 1px;\n        bottom: 1px;\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-dialog.mjs
var inlineStyles, classes5, DialogStyle, DialogClasses, DIALOG_INSTANCE, showAnimation, hideAnimation, Dialog, DialogModule;
var init_primeng_dialog = __esm({
  "node_modules/primeng/fesm2022/primeng-dialog.mjs"() {
    "use strict";
    init_primeng_types_dialog();
    init_animations2();
    init_common();
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_basecomponent();
    init_primeng_bind();
    init_primeng_bind();
    init_primeng_button();
    init_primeng_dom();
    init_primeng_focustrap();
    init_primeng_icons();
    init_primeng_utils();
    init_dialog();
    init_primeng_base();
    inlineStyles = {
      mask: ({ instance }) => ({
        position: "fixed",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        display: "flex",
        justifyContent: instance.position === "left" || instance.position === "topleft" || instance.position === "bottomleft" ? "flex-start" : instance.position === "right" || instance.position === "topright" || instance.position === "bottomright" ? "flex-end" : "center",
        alignItems: instance.position === "top" || instance.position === "topleft" || instance.position === "topright" ? "flex-start" : instance.position === "bottom" || instance.position === "bottomleft" || instance.position === "bottomright" ? "flex-end" : "center",
        pointerEvents: instance.modal ? "auto" : "none"
      }),
      root: {
        display: "flex",
        flexDirection: "column",
        pointerEvents: "auto"
      }
    };
    classes5 = {
      mask: ({ instance }) => {
        const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
        const pos = positions.find((item) => item === instance.position);
        return ["p-dialog-mask", { "p-overlay-mask p-overlay-mask-enter": instance.modal }, pos ? `p-dialog-${pos}` : ""];
      },
      root: ({ instance }) => [
        "p-dialog p-component",
        {
          "p-dialog-maximized": instance.maximizable && instance.maximized
        }
      ],
      header: "p-dialog-header",
      title: "p-dialog-title",
      resizeHandle: "p-resizable-handle",
      headerActions: "p-dialog-header-actions",
      pcMaximizeButton: "p-dialog-maximize-button",
      pcCloseButton: "p-dialog-close-button",
      content: () => ["p-dialog-content"],
      footer: "p-dialog-footer"
    };
    DialogStyle = class _DialogStyle extends BaseStyle {
      name = "dialog";
      style = style8;
      classes = classes5;
      inlineStyles = inlineStyles;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _DialogStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _DialogStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: DialogStyle, decorators: [{
      type: Injectable
    }] });
    (function(DialogClasses2) {
      DialogClasses2["mask"] = "p-dialog-mask";
      DialogClasses2["root"] = "p-dialog";
      DialogClasses2["header"] = "p-dialog-header";
      DialogClasses2["title"] = "p-dialog-title";
      DialogClasses2["headerActions"] = "p-dialog-header-actions";
      DialogClasses2["pcMaximizeButton"] = "p-dialog-maximize-button";
      DialogClasses2["pcCloseButton"] = "p-dialog-close-button";
      DialogClasses2["content"] = "p-dialog-content";
      DialogClasses2["footer"] = "p-dialog-footer";
    })(DialogClasses || (DialogClasses = {}));
    DIALOG_INSTANCE = new InjectionToken("DIALOG_INSTANCE");
    showAnimation = animation([style({ transform: "{{transform}}", opacity: 0 }), animate("{{transition}}")]);
    hideAnimation = animation([animate("{{transition}}", style({ transform: "{{transform}}", opacity: 0 }))]);
    Dialog = class _Dialog extends BaseComponent {
      hostName = "";
      $pcDialog = inject(DIALOG_INSTANCE, { optional: true, skipSelf: true }) ?? void 0;
      bindDirectiveInstance = inject(Bind, { self: true });
      onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptm("host"));
      }
      /**
       * Title text of the dialog.
       * @group Props
       */
      header;
      /**
       * Enables dragging to change the position using header.
       * @group Props
       */
      draggable = true;
      /**
       * Enables resizing of the content.
       * @group Props
       */
      resizable = true;
      /**
       * Style of the content section.
       * @group Props
       */
      contentStyle;
      /**
       * Style class of the content.
       * @group Props
       */
      contentStyleClass;
      /**
       * Defines if background should be blocked when dialog is displayed.
       * @group Props
       */
      modal = false;
      /**
       * Specifies if pressing escape key should hide the dialog.
       * @group Props
       */
      closeOnEscape = true;
      /**
       * Specifies if clicking the modal background should hide the dialog.
       * @group Props
       */
      dismissableMask = false;
      /**
       * When enabled dialog is displayed in RTL direction.
       * @group Props
       */
      rtl = false;
      /**
       * Adds a close icon to the header to hide the dialog.
       * @group Props
       */
      closable = true;
      /**
       * Object literal to define widths per screen size.
       * @group Props
       */
      breakpoints;
      /**
       * Style class of the component.
       * @group Props
       */
      styleClass;
      /**
       * Style class of the mask.
       * @group Props
       */
      maskStyleClass;
      /**
       * Style of the mask.
       * @group Props
       */
      maskStyle;
      /**
       * Whether to show the header or not.
       * @group Props
       */
      showHeader = true;
      /**
       * Whether background scroll should be blocked when dialog is visible.
       * @group Props
       */
      blockScroll = false;
      /**
       * Whether to automatically manage layering.
       * @group Props
       */
      autoZIndex = true;
      /**
       * Base zIndex value to use in layering.
       * @group Props
       */
      baseZIndex = 0;
      /**
       * Minimum value for the left coordinate of dialog in dragging.
       * @group Props
       */
      minX = 0;
      /**
       * Minimum value for the top coordinate of dialog in dragging.
       * @group Props
       */
      minY = 0;
      /**
       * When enabled, first focusable element receives focus on show.
       * @group Props
       */
      focusOnShow = true;
      /**
       * Whether the dialog can be displayed full screen.
       * @group Props
       */
      maximizable = false;
      /**
       * Keeps dialog in the viewport.
       * @group Props
       */
      keepInViewport = true;
      /**
       * When enabled, can only focus on elements inside the dialog.
       * @group Props
       */
      focusTrap = true;
      /**
       * Transition options of the animation.
       * @group Props
       */
      transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
      /**
       * Name of the close icon.
       * @group Props
       */
      closeIcon;
      /**
       * Defines a string that labels the close button for accessibility.
       * @group Props
       */
      closeAriaLabel;
      /**
       * Index of the close button in tabbing order.
       * @group Props
       */
      closeTabindex = "0";
      /**
       * Name of the minimize icon.
       * @group Props
       */
      minimizeIcon;
      /**
       * Name of the maximize icon.
       * @group Props
       */
      maximizeIcon;
      /**
       * Used to pass all properties of the ButtonProps to the Button component.
       * @group Props
       */
      closeButtonProps = {
        severity: "secondary",
        variant: "text",
        rounded: true
      };
      /**
       * Used to pass all properties of the ButtonProps to the Button component.
       * @group Props
       */
      maximizeButtonProps = {
        severity: "secondary",
        variant: "text",
        rounded: true
      };
      /**
       * Specifies the visibility of the dialog.
       * @group Props
       */
      get visible() {
        return this._visible;
      }
      set visible(value) {
        this._visible = value;
        if (this._visible && !this.maskVisible) {
          this.maskVisible = true;
        }
      }
      /**
       * Inline style of the component.
       * @group Props
       */
      get style() {
        return this._style;
      }
      set style(value) {
        if (value) {
          this._style = __spreadValues({}, value);
          this.originalStyle = value;
        }
      }
      /**
       * Position of the dialog.
       * @group Props
       */
      get position() {
        return this._position;
      }
      set position(value) {
        this._position = value;
        switch (value) {
          case "topleft":
          case "bottomleft":
          case "left":
            this.transformOptions = "translate3d(-100%, 0px, 0px)";
            break;
          case "topright":
          case "bottomright":
          case "right":
            this.transformOptions = "translate3d(100%, 0px, 0px)";
            break;
          case "bottom":
            this.transformOptions = "translate3d(0px, 100%, 0px)";
            break;
          case "top":
            this.transformOptions = "translate3d(0px, -100%, 0px)";
            break;
          default:
            this.transformOptions = "scale(0.7)";
            break;
        }
      }
      /**
       * Role attribute of html element.
       * @group Emits
       */
      role = "dialog";
      /**
       * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
       * @defaultValue 'self'
       * @group Props
       */
      appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : []);
      /**
       * Callback to invoke when dialog is shown.
       * @group Emits
       */
      onShow = new EventEmitter();
      /**
       * Callback to invoke when dialog is hidden.
       * @group Emits
       */
      onHide = new EventEmitter();
      /**
       * This EventEmitter is used to notify changes in the visibility state of a component.
       * @param {boolean} value - New value.
       * @group Emits
       */
      visibleChange = new EventEmitter();
      /**
       * Callback to invoke when dialog resizing is initiated.
       * @param {MouseEvent} event - Mouse event.
       * @group Emits
       */
      onResizeInit = new EventEmitter();
      /**
       * Callback to invoke when dialog resizing is completed.
       * @param {MouseEvent} event - Mouse event.
       * @group Emits
       */
      onResizeEnd = new EventEmitter();
      /**
       * Callback to invoke when dialog dragging is completed.
       * @param {DragEvent} event - Drag event.
       * @group Emits
       */
      onDragEnd = new EventEmitter();
      /**
       * Callback to invoke when dialog maximized or unmaximized.
       * @group Emits
       */
      onMaximize = new EventEmitter();
      headerViewChild;
      contentViewChild;
      footerViewChild;
      /**
       * Header template.
       * @group Props
       */
      headerTemplate;
      /**
       * Content template.
       * @group Props
       */
      contentTemplate;
      /**
       * Footer template.
       * @group Props
       */
      footerTemplate;
      /**
       * Close icon template.
       * @group Props
       */
      closeIconTemplate;
      /**
       * Maximize icon template.
       * @group Props
       */
      maximizeIconTemplate;
      /**
       * Minimize icon template.
       * @group Props
       */
      minimizeIconTemplate;
      /**
       * Headless template.
       * @group Props
       */
      headlessTemplate;
      _headerTemplate;
      _contentTemplate;
      _footerTemplate;
      _closeiconTemplate;
      _maximizeiconTemplate;
      _minimizeiconTemplate;
      _headlessTemplate;
      $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : []);
      _visible = false;
      maskVisible;
      container;
      wrapper;
      dragging;
      ariaLabelledBy = this.getAriaLabelledBy();
      documentDragListener;
      documentDragEndListener;
      resizing;
      documentResizeListener;
      documentResizeEndListener;
      documentEscapeListener;
      maskClickListener;
      lastPageX;
      lastPageY;
      preventVisibleChangePropagation;
      maximized;
      preMaximizeContentHeight;
      preMaximizeContainerWidth;
      preMaximizeContainerHeight;
      preMaximizePageX;
      preMaximizePageY;
      id = s3("pn_id_");
      _style = {};
      _position = "center";
      originalStyle;
      transformOptions = "scale(0.7)";
      styleElement;
      window;
      _componentStyle = inject(DialogStyle);
      headerT;
      contentT;
      footerT;
      closeIconT;
      maximizeIconT;
      minimizeIconT;
      headlessT;
      zIndexForLayering;
      get maximizeLabel() {
        return this.config.getTranslation(TranslationKeys.ARIA)["maximizeLabel"];
      }
      get minimizeLabel() {
        return this.config.getTranslation(TranslationKeys.ARIA)["minimizeLabel"];
      }
      zone = inject(NgZone);
      get maskClass() {
        const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
        const pos = positions.find((item) => item === this.position);
        return {
          "p-dialog-mask": true,
          "p-overlay-mask p-overlay-mask-enter": this.modal || this.dismissableMask,
          [`p-dialog-${pos}`]: pos
        };
      }
      onInit() {
        if (this.breakpoints) {
          this.createStyle();
        }
      }
      templates;
      onAfterContentInit() {
        this.templates?.forEach((item) => {
          switch (item.getType()) {
            case "header":
              this.headerT = item.template;
              break;
            case "content":
              this.contentT = item.template;
              break;
            case "footer":
              this.footerT = item.template;
              break;
            case "closeicon":
              this.closeIconT = item.template;
              break;
            case "maximizeicon":
              this.maximizeIconT = item.template;
              break;
            case "minimizeicon":
              this.minimizeIconT = item.template;
              break;
            case "headless":
              this.headlessT = item.template;
              break;
            default:
              this.contentT = item.template;
              break;
          }
        });
      }
      getAriaLabelledBy() {
        return this.header !== null ? s3("pn_id_") + "_header" : null;
      }
      parseDurationToMilliseconds(durationString) {
        const transitionTimeRegex = /([\d\.]+)(ms|s)\b/g;
        let totalMilliseconds = 0;
        let match;
        while ((match = transitionTimeRegex.exec(durationString)) !== null) {
          const value = parseFloat(match[1]);
          const unit = match[2];
          if (unit === "ms") {
            totalMilliseconds += value;
          } else if (unit === "s") {
            totalMilliseconds += value * 1e3;
          }
        }
        if (totalMilliseconds === 0) {
          return void 0;
        }
        return totalMilliseconds;
      }
      _focus(focusParentElement) {
        if (focusParentElement) {
          const timeoutDuration = this.parseDurationToMilliseconds(this.transitionOptions);
          let _focusableElements = DomHandler.getFocusableElements(focusParentElement);
          if (_focusableElements && _focusableElements.length > 0) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => _focusableElements[0].focus(), timeoutDuration || 5);
            });
            return true;
          }
        }
        return false;
      }
      focus(focusParentElement = this.contentViewChild?.nativeElement) {
        let focused = this._focus(focusParentElement);
        if (!focused) {
          focused = this._focus(this.footerViewChild?.nativeElement);
          if (!focused) {
            focused = this._focus(this.headerViewChild?.nativeElement);
            if (!focused) {
              this._focus(this.contentViewChild?.nativeElement);
            }
          }
        }
      }
      close(event) {
        this.visibleChange.emit(false);
        event.preventDefault();
      }
      enableModality() {
        if (this.closable && this.dismissableMask) {
          this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", (event) => {
            if (this.wrapper && this.wrapper.isSameNode(event.target)) {
              this.close(event);
            }
          });
        }
        if (this.modal) {
          blockBodyScroll();
        }
      }
      disableModality() {
        if (this.wrapper) {
          if (this.dismissableMask) {
            this.unbindMaskClickListener();
          }
          const scrollBlockers = document.querySelectorAll(".p-dialog-mask-scrollblocker");
          if (this.modal && scrollBlockers && scrollBlockers.length == 1) {
            unblockBodyScroll();
          }
          if (!this.cd.destroyed) {
            this.cd.detectChanges();
          }
        }
      }
      maximize() {
        this.maximized = !this.maximized;
        if (!this.modal && !this.blockScroll) {
          if (this.maximized) {
            blockBodyScroll();
          } else {
            unblockBodyScroll();
          }
        }
        this.onMaximize.emit({ maximized: this.maximized });
      }
      unbindMaskClickListener() {
        if (this.maskClickListener) {
          this.maskClickListener();
          this.maskClickListener = null;
        }
      }
      moveOnTop() {
        if (this.autoZIndex) {
          zindexutils.set("modal", this.container, this.baseZIndex + this.config.zIndex.modal);
          this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
        } else {
          this.zIndexForLayering = zindexutils.generateZIndex("modal", (this.baseZIndex ?? 0) + this.config.zIndex.modal);
        }
      }
      createStyle() {
        if (isPlatformBrowser(this.platformId)) {
          if (!this.styleElement) {
            this.styleElement = this.renderer.createElement("style");
            this.styleElement.type = "text/css";
            _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
            this.renderer.appendChild(this.document.head, this.styleElement);
            let innerHTML = "";
            for (let breakpoint in this.breakpoints) {
              innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
            }
            this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
            _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
          }
        }
      }
      initDrag(event) {
        if (R(event.target, "p-dialog-maximize-icon") || R(event.target, "p-dialog-header-close-icon") || R(event.target?.parentElement, "p-dialog-header-icon")) {
          return;
        }
        if (this.draggable) {
          this.dragging = true;
          this.lastPageX = event.pageX;
          this.lastPageY = event.pageY;
          this.container.style.margin = "0";
          W(this.document.body, "p-unselectable-text");
        }
      }
      onDrag(event) {
        if (this.dragging && this.container) {
          const containerWidth = v(this.container);
          const containerHeight = C(this.container);
          const deltaX = event.pageX - this.lastPageX;
          const deltaY = event.pageY - this.lastPageY;
          const offset = this.container.getBoundingClientRect();
          const containerComputedStyle = getComputedStyle(this.container);
          const leftMargin = parseFloat(containerComputedStyle.marginLeft);
          const topMargin = parseFloat(containerComputedStyle.marginTop);
          const leftPos = offset.left + deltaX - leftMargin;
          const topPos = offset.top + deltaY - topMargin;
          const viewport = h();
          this.container.style.position = "fixed";
          if (this.keepInViewport) {
            if (leftPos >= this.minX && leftPos + containerWidth < viewport.width) {
              this._style.left = `${leftPos}px`;
              this.lastPageX = event.pageX;
              this.container.style.left = `${leftPos}px`;
            }
            if (topPos >= this.minY && topPos + containerHeight < viewport.height) {
              this._style.top = `${topPos}px`;
              this.lastPageY = event.pageY;
              this.container.style.top = `${topPos}px`;
            }
          } else {
            this.lastPageX = event.pageX;
            this.container.style.left = `${leftPos}px`;
            this.lastPageY = event.pageY;
            this.container.style.top = `${topPos}px`;
          }
        }
      }
      endDrag(event) {
        if (this.dragging) {
          this.dragging = false;
          P(this.document.body, "p-unselectable-text");
          this.cd.detectChanges();
          this.onDragEnd.emit(event);
        }
      }
      resetPosition() {
        this.container.style.position = "";
        this.container.style.left = "";
        this.container.style.top = "";
        this.container.style.margin = "";
      }
      //backward compatibility
      center() {
        this.resetPosition();
      }
      initResize(event) {
        if (this.resizable) {
          this.resizing = true;
          this.lastPageX = event.pageX;
          this.lastPageY = event.pageY;
          W(this.document.body, "p-unselectable-text");
          this.onResizeInit.emit(event);
        }
      }
      onResize(event) {
        if (this.resizing) {
          let deltaX = event.pageX - this.lastPageX;
          let deltaY = event.pageY - this.lastPageY;
          let containerWidth = v(this.container);
          let containerHeight = C(this.container);
          let contentHeight = C(this.contentViewChild?.nativeElement);
          let newWidth = containerWidth + deltaX;
          let newHeight = containerHeight + deltaY;
          let minWidth = this.container.style.minWidth;
          let minHeight = this.container.style.minHeight;
          let offset = this.container.getBoundingClientRect();
          let viewport = h();
          let hasBeenDragged = !parseInt(this.container.style.top) || !parseInt(this.container.style.left);
          if (hasBeenDragged) {
            newWidth += deltaX;
            newHeight += deltaY;
          }
          if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
            this._style.width = newWidth + "px";
            this.container.style.width = this._style.width;
          }
          if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
            this.contentViewChild.nativeElement.style.height = contentHeight + newHeight - containerHeight + "px";
            if (this._style.height) {
              this._style.height = newHeight + "px";
              this.container.style.height = this._style.height;
            }
          }
          this.lastPageX = event.pageX;
          this.lastPageY = event.pageY;
        }
      }
      resizeEnd(event) {
        if (this.resizing) {
          this.resizing = false;
          P(this.document.body, "p-unselectable-text");
          this.onResizeEnd.emit(event);
        }
      }
      bindGlobalListeners() {
        if (this.draggable) {
          this.bindDocumentDragListener();
          this.bindDocumentDragEndListener();
        }
        if (this.resizable) {
          this.bindDocumentResizeListeners();
        }
        if (this.closeOnEscape && this.closable) {
          this.bindDocumentEscapeListener();
        }
      }
      unbindGlobalListeners() {
        this.unbindDocumentDragListener();
        this.unbindDocumentDragEndListener();
        this.unbindDocumentResizeListeners();
        this.unbindDocumentEscapeListener();
      }
      bindDocumentDragListener() {
        if (!this.documentDragListener) {
          this.zone.runOutsideAngular(() => {
            this.documentDragListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onDrag.bind(this));
          });
        }
      }
      unbindDocumentDragListener() {
        if (this.documentDragListener) {
          this.documentDragListener();
          this.documentDragListener = null;
        }
      }
      bindDocumentDragEndListener() {
        if (!this.documentDragEndListener) {
          this.zone.runOutsideAngular(() => {
            this.documentDragEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.endDrag.bind(this));
          });
        }
      }
      unbindDocumentDragEndListener() {
        if (this.documentDragEndListener) {
          this.documentDragEndListener();
          this.documentDragEndListener = null;
        }
      }
      bindDocumentResizeListeners() {
        if (!this.documentResizeListener && !this.documentResizeEndListener) {
          this.zone.runOutsideAngular(() => {
            this.documentResizeListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onResize.bind(this));
            this.documentResizeEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.resizeEnd.bind(this));
          });
        }
      }
      unbindDocumentResizeListeners() {
        if (this.documentResizeListener && this.documentResizeEndListener) {
          this.documentResizeListener();
          this.documentResizeEndListener();
          this.documentResizeListener = null;
          this.documentResizeEndListener = null;
        }
      }
      bindDocumentEscapeListener() {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
        this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
          if (event.key == "Escape") {
            const currentZIndex = zindexutils.getCurrent();
            if (parseInt(this.container.style.zIndex) == currentZIndex || this.zIndexForLayering == currentZIndex) {
              this.close(event);
            }
          }
        });
      }
      unbindDocumentEscapeListener() {
        if (this.documentEscapeListener) {
          this.documentEscapeListener();
          this.documentEscapeListener = null;
        }
      }
      appendContainer() {
        if (this.$appendTo() && this.$appendTo() !== "self") {
          if (this.$appendTo() === "body")
            this.renderer.appendChild(this.document.body, this.wrapper);
          else
            ut(this.$appendTo(), this.wrapper);
        }
      }
      restoreAppend() {
        if (this.container && this.$appendTo() !== "self") {
          this.renderer.appendChild(this.el.nativeElement, this.wrapper);
        }
      }
      onAnimationStart(event) {
        switch (event.toState) {
          case "visible":
            this.container = event.element;
            this.wrapper = this.container?.parentElement;
            this.$attrSelector && this.container?.setAttribute(this.$attrSelector, "");
            this.appendContainer();
            this.moveOnTop();
            this.bindGlobalListeners();
            this.container?.setAttribute(this.id, "");
            if (this.modal) {
              this.enableModality();
            }
            if (this.focusOnShow) {
              this.focus();
            }
            break;
          case "void":
            if (this.wrapper && this.modal) {
              W(this.wrapper, "p-overlay-mask-leave");
            }
            break;
        }
      }
      onAnimationEnd(event) {
        switch (event.toState) {
          case "void":
            this.onContainerDestroy();
            this.onHide.emit({});
            this.cd.markForCheck();
            if (this.maskVisible !== this.visible) {
              this.maskVisible = this.visible;
            }
            break;
          case "visible":
            this.onShow.emit({});
            break;
        }
      }
      onContainerDestroy() {
        this.unbindGlobalListeners();
        this.dragging = false;
        this.maskVisible = false;
        if (this.maximized) {
          this.document.body.style.removeProperty("--scrollbar;-width");
          this.maximized = false;
        }
        if (this.modal) {
          this.disableModality();
        }
        if (R(this.document.body, "p-overflow-hidden")) {
          P(this.document.body, "p-overflow-hidden");
        }
        if (this.container && this.autoZIndex) {
          zindexutils.clear(this.container);
        }
        if (this.zIndexForLayering) {
          zindexutils.revertZIndex(this.zIndexForLayering);
        }
        this.container = null;
        this.wrapper = null;
        this._style = this.originalStyle ? __spreadValues({}, this.originalStyle) : {};
      }
      destroyStyle() {
        if (this.styleElement) {
          this.renderer.removeChild(this.document.head, this.styleElement);
          this.styleElement = null;
        }
      }
      onDestroy() {
        if (this.container) {
          this.restoreAppend();
          this.onContainerDestroy();
        }
        this.destroyStyle();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _Dialog, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.3.4", type: _Dialog, isStandalone: true, selector: "p-dialog", inputs: { hostName: { classPropertyName: "hostName", publicName: "hostName", isSignal: false, isRequired: false, transformFunction: null }, header: { classPropertyName: "header", publicName: "header", isSignal: false, isRequired: false, transformFunction: null }, draggable: { classPropertyName: "draggable", publicName: "draggable", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, resizable: { classPropertyName: "resizable", publicName: "resizable", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, contentStyle: { classPropertyName: "contentStyle", publicName: "contentStyle", isSignal: false, isRequired: false, transformFunction: null }, contentStyleClass: { classPropertyName: "contentStyleClass", publicName: "contentStyleClass", isSignal: false, isRequired: false, transformFunction: null }, modal: { classPropertyName: "modal", publicName: "modal", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, closeOnEscape: { classPropertyName: "closeOnEscape", publicName: "closeOnEscape", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, dismissableMask: { classPropertyName: "dismissableMask", publicName: "dismissableMask", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, rtl: { classPropertyName: "rtl", publicName: "rtl", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, closable: { classPropertyName: "closable", publicName: "closable", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, breakpoints: { classPropertyName: "breakpoints", publicName: "breakpoints", isSignal: false, isRequired: false, transformFunction: null }, styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: false, isRequired: false, transformFunction: null }, maskStyleClass: { classPropertyName: "maskStyleClass", publicName: "maskStyleClass", isSignal: false, isRequired: false, transformFunction: null }, maskStyle: { classPropertyName: "maskStyle", publicName: "maskStyle", isSignal: false, isRequired: false, transformFunction: null }, showHeader: { classPropertyName: "showHeader", publicName: "showHeader", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, blockScroll: { classPropertyName: "blockScroll", publicName: "blockScroll", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, autoZIndex: { classPropertyName: "autoZIndex", publicName: "autoZIndex", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, baseZIndex: { classPropertyName: "baseZIndex", publicName: "baseZIndex", isSignal: false, isRequired: false, transformFunction: numberAttribute }, minX: { classPropertyName: "minX", publicName: "minX", isSignal: false, isRequired: false, transformFunction: numberAttribute }, minY: { classPropertyName: "minY", publicName: "minY", isSignal: false, isRequired: false, transformFunction: numberAttribute }, focusOnShow: { classPropertyName: "focusOnShow", publicName: "focusOnShow", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, maximizable: { classPropertyName: "maximizable", publicName: "maximizable", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, keepInViewport: { classPropertyName: "keepInViewport", publicName: "keepInViewport", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, focusTrap: { classPropertyName: "focusTrap", publicName: "focusTrap", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, transitionOptions: { classPropertyName: "transitionOptions", publicName: "transitionOptions", isSignal: false, isRequired: false, transformFunction: null }, closeIcon: { classPropertyName: "closeIcon", publicName: "closeIcon", isSignal: false, isRequired: false, transformFunction: null }, closeAriaLabel: { classPropertyName: "closeAriaLabel", publicName: "closeAriaLabel", isSignal: false, isRequired: false, transformFunction: null }, closeTabindex: { classPropertyName: "closeTabindex", publicName: "closeTabindex", isSignal: false, isRequired: false, transformFunction: null }, minimizeIcon: { classPropertyName: "minimizeIcon", publicName: "minimizeIcon", isSignal: false, isRequired: false, transformFunction: null }, maximizeIcon: { classPropertyName: "maximizeIcon", publicName: "maximizeIcon", isSignal: false, isRequired: false, transformFunction: null }, closeButtonProps: { classPropertyName: "closeButtonProps", publicName: "closeButtonProps", isSignal: false, isRequired: false, transformFunction: null }, maximizeButtonProps: { classPropertyName: "maximizeButtonProps", publicName: "maximizeButtonProps", isSignal: false, isRequired: false, transformFunction: null }, visible: { classPropertyName: "visible", publicName: "visible", isSignal: false, isRequired: false, transformFunction: null }, style: { classPropertyName: "style", publicName: "style", isSignal: false, isRequired: false, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: false, isRequired: false, transformFunction: null }, role: { classPropertyName: "role", publicName: "role", isSignal: false, isRequired: false, transformFunction: null }, appendTo: { classPropertyName: "appendTo", publicName: "appendTo", isSignal: true, isRequired: false, transformFunction: null }, headerTemplate: { classPropertyName: "headerTemplate", publicName: "content", isSignal: false, isRequired: false, transformFunction: null }, contentTemplate: { classPropertyName: "contentTemplate", publicName: "contentTemplate", isSignal: false, isRequired: false, transformFunction: null }, footerTemplate: { classPropertyName: "footerTemplate", publicName: "footerTemplate", isSignal: false, isRequired: false, transformFunction: null }, closeIconTemplate: { classPropertyName: "closeIconTemplate", publicName: "closeIconTemplate", isSignal: false, isRequired: false, transformFunction: null }, maximizeIconTemplate: { classPropertyName: "maximizeIconTemplate", publicName: "maximizeIconTemplate", isSignal: false, isRequired: false, transformFunction: null }, minimizeIconTemplate: { classPropertyName: "minimizeIconTemplate", publicName: "minimizeIconTemplate", isSignal: false, isRequired: false, transformFunction: null }, headlessTemplate: { classPropertyName: "headlessTemplate", publicName: "headlessTemplate", isSignal: false, isRequired: false, transformFunction: null } }, outputs: { onShow: "onShow", onHide: "onHide", visibleChange: "visibleChange", onResizeInit: "onResizeInit", onResizeEnd: "onResizeEnd", onDragEnd: "onDragEnd", onMaximize: "onMaximize" }, providers: [DialogStyle, { provide: DIALOG_INSTANCE, useExisting: _Dialog }, { provide: PARENT_INSTANCE, useExisting: _Dialog }], queries: [{ propertyName: "_headerTemplate", first: true, predicate: ["header"] }, { propertyName: "_contentTemplate", first: true, predicate: ["content"] }, { propertyName: "_footerTemplate", first: true, predicate: ["footer"] }, { propertyName: "_closeiconTemplate", first: true, predicate: ["closeicon"] }, { propertyName: "_maximizeiconTemplate", first: true, predicate: ["maximizeicon"] }, { propertyName: "_minimizeiconTemplate", first: true, predicate: ["minimizeicon"] }, { propertyName: "_headlessTemplate", first: true, predicate: ["headless"] }, { propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "headerViewChild", first: true, predicate: ["titlebar"], descendants: true }, { propertyName: "contentViewChild", first: true, predicate: ["content"], descendants: true }, { propertyName: "footerViewChild", first: true, predicate: ["footer"], descendants: true }], usesInheritance: true, hostDirectives: [{ directive: Bind }], ngImport: core_exports, template: `
        <div *ngIf="maskVisible" [class]="cn(cx('mask'), maskStyleClass)" [style]="sx('mask')" [ngStyle]="maskStyle" [pBind]="ptm('mask')">
            <div
                *ngIf="visible"
                #container
                [class]="cn(cx('root'), styleClass)"
                [style]="sx('root')"
                [ngStyle]="style"
                [pBind]="ptm('root')"
                pFocusTrap
                [pFocusTrapDisabled]="focusTrap === false"
                [@animation]="{
                    value: 'visible',
                    params: { transform: transformOptions, transition: transitionOptions }
                }"
                (@animation.start)="onAnimationStart($event)"
                (@animation.done)="onAnimationEnd($event)"
                [attr.role]="role"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-modal]="true"
            >
                <ng-container *ngIf="_headlessTemplate || headlessTemplate || headlessT; else notHeadless">
                    <ng-container *ngTemplateOutlet="_headlessTemplate || headlessTemplate || headlessT"></ng-container>
                </ng-container>

                <ng-template #notHeadless>
                    <div *ngIf="resizable" [class]="cx('resizeHandle')" [pBind]="ptm('resizeHandle')" [style.z-index]="90" (mousedown)="initResize($event)"></div>
                    <div #titlebar [class]="cx('header')" [pBind]="ptm('header')" (mousedown)="initDrag($event)" *ngIf="showHeader">
                        <span [id]="ariaLabelledBy" [class]="cx('title')" [pBind]="ptm('title')" *ngIf="!_headerTemplate && !headerTemplate && !headerT">{{ header }}</span>
                        <ng-container *ngTemplateOutlet="_headerTemplate || headerTemplate || headerT"></ng-container>
                        <div [class]="cx('headerActions')" [pBind]="ptm('headerActions')">
                            <p-button
                                [pt]="ptm('pcMaximizeButton')"
                                *ngIf="maximizable"
                                [styleClass]="cx('pcMaximizeButton')"
                                [ariaLabel]="maximized ? minimizeLabel : maximizeLabel"
                                (onClick)="maximize()"
                                (keydown.enter)="maximize()"
                                [tabindex]="maximizable ? '0' : '-1'"
                                [buttonProps]="maximizeButtonProps"
                            >
                                <ng-template #icon>
                                    <span *ngIf="maximizeIcon && !_maximizeiconTemplate && !_minimizeiconTemplate" [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>
                                    <ng-container *ngIf="!maximizeIcon && !maximizeButtonProps?.icon">
                                        <svg data-p-icon="window-maximize" *ngIf="!maximized && !_maximizeiconTemplate && !maximizeIconTemplate && !maximizeIconT" />
                                        <svg data-p-icon="window-minimize" *ngIf="maximized && !_minimizeiconTemplate && !minimizeIconTemplate && !minimizeIconT" />
                                    </ng-container>
                                    <ng-container *ngIf="!maximized">
                                        <ng-template *ngTemplateOutlet="_maximizeiconTemplate || maximizeIconTemplate || maximizeIconT"></ng-template>
                                    </ng-container>
                                    <ng-container *ngIf="maximized">
                                        <ng-template *ngTemplateOutlet="_minimizeiconTemplate || minimizeIconTemplate || minimizeIconT"></ng-template>
                                    </ng-container>
                                </ng-template>
                            </p-button>
                            <p-button
                                [pt]="ptm('pcCloseButton')"
                                *ngIf="closable"
                                [styleClass]="cx('pcCloseButton')"
                                [ariaLabel]="closeAriaLabel"
                                (onClick)="close($event)"
                                (keydown.enter)="close($event)"
                                [tabindex]="closeTabindex"
                                [buttonProps]="closeButtonProps"
                            >
                                <ng-template #icon>
                                    <ng-container *ngIf="!_closeiconTemplate && !closeIconTemplate && !closeIconT && !closeButtonProps?.icon">
                                        <span *ngIf="closeIcon" [class]="closeIcon"></span>
                                        <svg data-p-icon="times" *ngIf="!closeIcon" />
                                    </ng-container>
                                    <span *ngIf="_closeiconTemplate || closeIconTemplate || closeIconT">
                                        <ng-template *ngTemplateOutlet="_closeiconTemplate || closeIconTemplate || closeIconT"></ng-template>
                                    </span>
                                </ng-template>
                            </p-button>
                        </div>
                    </div>
                    <div #content [class]="cn(cx('content'), contentStyleClass)" [ngStyle]="contentStyle" [pBind]="ptm('content')">
                        <ng-content></ng-content>
                        <ng-container *ngTemplateOutlet="_contentTemplate || contentTemplate || contentT"></ng-container>
                    </div>
                    <div #footer [class]="cx('footer')" [pBind]="ptm('footer')" *ngIf="_footerTemplate || footerTemplate || footerT">
                        <ng-content select="p-footer"></ng-content>
                        <ng-container *ngTemplateOutlet="_footerTemplate || footerTemplate || footerT"></ng-container>
                    </div>
                </ng-template>
            </div>
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: Button, selector: "p-button", inputs: ["hostName", "type", "badge", "disabled", "raised", "rounded", "text", "plain", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "iconPos", "icon", "label", "loading", "loadingIcon", "severity", "buttonProps", "fluid"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "directive", type: FocusTrap, selector: "[pFocusTrap]", inputs: ["pFocusTrapDisabled"] }, { kind: "component", type: TimesIcon, selector: '[data-p-icon="times"]' }, { kind: "component", type: WindowMaximizeIcon, selector: '[data-p-icon="window-maximize"]' }, { kind: "component", type: WindowMinimizeIcon, selector: '[data-p-icon="window-minimize"]' }, { kind: "ngmodule", type: SharedModule }, { kind: "directive", type: Bind, selector: "[pBind]", inputs: ["pBind"] }], animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: Dialog, decorators: [{
      type: Component,
      args: [{
        selector: "p-dialog",
        standalone: true,
        imports: [CommonModule, Button, FocusTrap, TimesIcon, WindowMaximizeIcon, WindowMinimizeIcon, SharedModule, Bind],
        template: `
        <div *ngIf="maskVisible" [class]="cn(cx('mask'), maskStyleClass)" [style]="sx('mask')" [ngStyle]="maskStyle" [pBind]="ptm('mask')">
            <div
                *ngIf="visible"
                #container
                [class]="cn(cx('root'), styleClass)"
                [style]="sx('root')"
                [ngStyle]="style"
                [pBind]="ptm('root')"
                pFocusTrap
                [pFocusTrapDisabled]="focusTrap === false"
                [@animation]="{
                    value: 'visible',
                    params: { transform: transformOptions, transition: transitionOptions }
                }"
                (@animation.start)="onAnimationStart($event)"
                (@animation.done)="onAnimationEnd($event)"
                [attr.role]="role"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-modal]="true"
            >
                <ng-container *ngIf="_headlessTemplate || headlessTemplate || headlessT; else notHeadless">
                    <ng-container *ngTemplateOutlet="_headlessTemplate || headlessTemplate || headlessT"></ng-container>
                </ng-container>

                <ng-template #notHeadless>
                    <div *ngIf="resizable" [class]="cx('resizeHandle')" [pBind]="ptm('resizeHandle')" [style.z-index]="90" (mousedown)="initResize($event)"></div>
                    <div #titlebar [class]="cx('header')" [pBind]="ptm('header')" (mousedown)="initDrag($event)" *ngIf="showHeader">
                        <span [id]="ariaLabelledBy" [class]="cx('title')" [pBind]="ptm('title')" *ngIf="!_headerTemplate && !headerTemplate && !headerT">{{ header }}</span>
                        <ng-container *ngTemplateOutlet="_headerTemplate || headerTemplate || headerT"></ng-container>
                        <div [class]="cx('headerActions')" [pBind]="ptm('headerActions')">
                            <p-button
                                [pt]="ptm('pcMaximizeButton')"
                                *ngIf="maximizable"
                                [styleClass]="cx('pcMaximizeButton')"
                                [ariaLabel]="maximized ? minimizeLabel : maximizeLabel"
                                (onClick)="maximize()"
                                (keydown.enter)="maximize()"
                                [tabindex]="maximizable ? '0' : '-1'"
                                [buttonProps]="maximizeButtonProps"
                            >
                                <ng-template #icon>
                                    <span *ngIf="maximizeIcon && !_maximizeiconTemplate && !_minimizeiconTemplate" [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>
                                    <ng-container *ngIf="!maximizeIcon && !maximizeButtonProps?.icon">
                                        <svg data-p-icon="window-maximize" *ngIf="!maximized && !_maximizeiconTemplate && !maximizeIconTemplate && !maximizeIconT" />
                                        <svg data-p-icon="window-minimize" *ngIf="maximized && !_minimizeiconTemplate && !minimizeIconTemplate && !minimizeIconT" />
                                    </ng-container>
                                    <ng-container *ngIf="!maximized">
                                        <ng-template *ngTemplateOutlet="_maximizeiconTemplate || maximizeIconTemplate || maximizeIconT"></ng-template>
                                    </ng-container>
                                    <ng-container *ngIf="maximized">
                                        <ng-template *ngTemplateOutlet="_minimizeiconTemplate || minimizeIconTemplate || minimizeIconT"></ng-template>
                                    </ng-container>
                                </ng-template>
                            </p-button>
                            <p-button
                                [pt]="ptm('pcCloseButton')"
                                *ngIf="closable"
                                [styleClass]="cx('pcCloseButton')"
                                [ariaLabel]="closeAriaLabel"
                                (onClick)="close($event)"
                                (keydown.enter)="close($event)"
                                [tabindex]="closeTabindex"
                                [buttonProps]="closeButtonProps"
                            >
                                <ng-template #icon>
                                    <ng-container *ngIf="!_closeiconTemplate && !closeIconTemplate && !closeIconT && !closeButtonProps?.icon">
                                        <span *ngIf="closeIcon" [class]="closeIcon"></span>
                                        <svg data-p-icon="times" *ngIf="!closeIcon" />
                                    </ng-container>
                                    <span *ngIf="_closeiconTemplate || closeIconTemplate || closeIconT">
                                        <ng-template *ngTemplateOutlet="_closeiconTemplate || closeIconTemplate || closeIconT"></ng-template>
                                    </span>
                                </ng-template>
                            </p-button>
                        </div>
                    </div>
                    <div #content [class]="cn(cx('content'), contentStyleClass)" [ngStyle]="contentStyle" [pBind]="ptm('content')">
                        <ng-content></ng-content>
                        <ng-container *ngTemplateOutlet="_contentTemplate || contentTemplate || contentT"></ng-container>
                    </div>
                    <div #footer [class]="cx('footer')" [pBind]="ptm('footer')" *ngIf="_footerTemplate || footerTemplate || footerT">
                        <ng-content select="p-footer"></ng-content>
                        <ng-container *ngTemplateOutlet="_footerTemplate || footerTemplate || footerT"></ng-container>
                    </div>
                </ng-template>
            </div>
        </div>
    `,
        animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [DialogStyle, { provide: DIALOG_INSTANCE, useExisting: Dialog }, { provide: PARENT_INSTANCE, useExisting: Dialog }],
        hostDirectives: [Bind]
      }]
    }], propDecorators: { hostName: [{
      type: Input
    }], header: [{
      type: Input
    }], draggable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], resizable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], contentStyle: [{
      type: Input
    }], contentStyleClass: [{
      type: Input
    }], modal: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], closeOnEscape: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], dismissableMask: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], rtl: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], closable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], breakpoints: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], maskStyleClass: [{
      type: Input
    }], maskStyle: [{
      type: Input
    }], showHeader: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], blockScroll: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], autoZIndex: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], baseZIndex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], minX: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], minY: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], focusOnShow: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], maximizable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], keepInViewport: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], focusTrap: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], transitionOptions: [{
      type: Input
    }], closeIcon: [{
      type: Input
    }], closeAriaLabel: [{
      type: Input
    }], closeTabindex: [{
      type: Input
    }], minimizeIcon: [{
      type: Input
    }], maximizeIcon: [{
      type: Input
    }], closeButtonProps: [{
      type: Input
    }], maximizeButtonProps: [{
      type: Input
    }], visible: [{
      type: Input
    }], style: [{
      type: Input
    }], position: [{
      type: Input
    }], role: [{
      type: Input
    }], onShow: [{
      type: Output
    }], onHide: [{
      type: Output
    }], visibleChange: [{
      type: Output
    }], onResizeInit: [{
      type: Output
    }], onResizeEnd: [{
      type: Output
    }], onDragEnd: [{
      type: Output
    }], onMaximize: [{
      type: Output
    }], headerViewChild: [{
      type: ViewChild,
      args: ["titlebar"]
    }], contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }], footerViewChild: [{
      type: ViewChild,
      args: ["footer"]
    }], headerTemplate: [{
      type: Input,
      args: ["content"]
    }], contentTemplate: [{
      type: Input
    }], footerTemplate: [{
      type: Input
    }], closeIconTemplate: [{
      type: Input
    }], maximizeIconTemplate: [{
      type: Input
    }], minimizeIconTemplate: [{
      type: Input
    }], headlessTemplate: [{
      type: Input
    }], _headerTemplate: [{
      type: ContentChild,
      args: ["header", { descendants: false }]
    }], _contentTemplate: [{
      type: ContentChild,
      args: ["content", { descendants: false }]
    }], _footerTemplate: [{
      type: ContentChild,
      args: ["footer", { descendants: false }]
    }], _closeiconTemplate: [{
      type: ContentChild,
      args: ["closeicon", { descendants: false }]
    }], _maximizeiconTemplate: [{
      type: ContentChild,
      args: ["maximizeicon", { descendants: false }]
    }], _minimizeiconTemplate: [{
      type: ContentChild,
      args: ["minimizeicon", { descendants: false }]
    }], _headlessTemplate: [{
      type: ContentChild,
      args: ["headless", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    DialogModule = class _DialogModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _DialogModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.4", ngImport: core_exports, type: _DialogModule, imports: [Dialog, SharedModule], exports: [Dialog, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _DialogModule, imports: [Dialog, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: DialogModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Dialog, SharedModule],
        exports: [Dialog, SharedModule]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/confirmdialog/index.mjs
var style9;
var init_confirmdialog = __esm({
  "node_modules/@primeuix/styles/dist/confirmdialog/index.mjs"() {
    "use strict";
    style9 = "\n    .p-confirmdialog .p-dialog-content {\n        display: flex;\n        align-items: center;\n        gap: dt('confirmdialog.content.gap');\n    }\n\n    .p-confirmdialog-icon {\n        color: dt('confirmdialog.icon.color');\n        font-size: dt('confirmdialog.icon.size');\n        width: dt('confirmdialog.icon.size');\n        height: dt('confirmdialog.icon.size');\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-types-confirmdialog.mjs
var init_primeng_types_confirmdialog = __esm({
  "node_modules/primeng/fesm2022/primeng-types-confirmdialog.mjs"() {
    "use strict";
  }
});

// node_modules/primeng/fesm2022/primeng-confirmdialog.mjs
var classes6, ConfirmDialogStyle, ConfirmDialogClasses, CONFIRMDIALOG_INSTANCE, showAnimation2, hideAnimation2, ConfirmDialog, ConfirmDialogModule;
var init_primeng_confirmdialog = __esm({
  "node_modules/primeng/fesm2022/primeng-confirmdialog.mjs"() {
    "use strict";
    init_animations2();
    init_common();
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_api();
    init_primeng_basecomponent();
    init_primeng_bind();
    init_primeng_bind();
    init_primeng_button();
    init_primeng_dialog();
    init_confirmdialog();
    init_primeng_base();
    init_primeng_types_confirmdialog();
    classes6 = {
      root: "p-confirmdialog",
      icon: "p-confirmdialog-icon",
      message: "p-confirmdialog-message",
      pcRejectButton: "p-confirmdialog-reject-button",
      pcAcceptButton: "p-confirmdialog-accept-button"
    };
    ConfirmDialogStyle = class _ConfirmDialogStyle extends BaseStyle {
      name = "confirmdialog";
      style = style9;
      classes = classes6;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ConfirmDialogStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ConfirmDialogStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ConfirmDialogStyle, decorators: [{
      type: Injectable
    }] });
    (function(ConfirmDialogClasses2) {
      ConfirmDialogClasses2["root"] = "p-confirmdialog";
      ConfirmDialogClasses2["icon"] = "p-confirmdialog-icon";
      ConfirmDialogClasses2["message"] = "p-confirmdialog-message";
      ConfirmDialogClasses2["pcRejectButton"] = "p-confirmdialog-reject-button";
      ConfirmDialogClasses2["pcAcceptButton"] = "p-confirmdialog-accept-button";
    })(ConfirmDialogClasses || (ConfirmDialogClasses = {}));
    CONFIRMDIALOG_INSTANCE = new InjectionToken("CONFIRMDIALOG_INSTANCE");
    showAnimation2 = animation([style({ transform: "{{transform}}", opacity: 0 }), animate("{{transition}}", style({ transform: "none", opacity: 1 }))]);
    hideAnimation2 = animation([animate("{{transition}}", style({ transform: "{{transform}}", opacity: 0 }))]);
    ConfirmDialog = class _ConfirmDialog extends BaseComponent {
      confirmationService;
      zone;
      $pcConfirmDialog = inject(CONFIRMDIALOG_INSTANCE, { optional: true, skipSelf: true }) ?? void 0;
      bindDirectiveInstance = inject(Bind, { self: true });
      onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptm("host"));
      }
      /**
       * Title text of the dialog.
       * @group Props
       */
      header;
      /**
       * Icon to display next to message.
       * @group Props
       */
      icon;
      /**
       * Message of the confirmation.
       * @group Props
       */
      message;
      /**
       * Inline style of the element.
       * @group Props
       */
      get style() {
        return this._style;
      }
      set style(value) {
        this._style = value;
        this.cd.markForCheck();
      }
      /**
       * Class of the element.
       * @group Props
       */
      styleClass;
      /**
       * Specify the CSS class(es) for styling the mask element
       * @group Props
       */
      maskStyleClass;
      /**
       * Icon of the accept button.
       * @group Props
       */
      acceptIcon;
      /**
       * Label of the accept button.
       * @group Props
       */
      acceptLabel;
      /**
       * Defines a string that labels the close button for accessibility.
       * @group Props
       */
      closeAriaLabel;
      /**
       * Defines a string that labels the accept button for accessibility.
       * @group Props
       */
      acceptAriaLabel;
      /**
       * Visibility of the accept button.
       * @group Props
       */
      acceptVisible = true;
      /**
       * Icon of the reject button.
       * @group Props
       */
      rejectIcon;
      /**
       * Label of the reject button.
       * @group Props
       */
      rejectLabel;
      /**
       * Defines a string that labels the reject button for accessibility.
       * @group Props
       */
      rejectAriaLabel;
      /**
       * Visibility of the reject button.
       * @group Props
       */
      rejectVisible = true;
      /**
       * Style class of the accept button.
       * @group Props
       */
      acceptButtonStyleClass;
      /**
       * Style class of the reject button.
       * @group Props
       */
      rejectButtonStyleClass;
      /**
       * Specifies if pressing escape key should hide the dialog.
       * @group Props
       */
      closeOnEscape = true;
      /**
       * Specifies if clicking the modal background should hide the dialog.
       * @group Props
       */
      dismissableMask;
      /**
       * Determines whether scrolling behavior should be blocked within the component.
       * @group Props
       */
      blockScroll = true;
      /**
       * When enabled dialog is displayed in RTL direction.
       * @group Props
       */
      rtl = false;
      /**
       * Adds a close icon to the header to hide the dialog.
       * @group Props
       */
      closable = true;
      /**
       *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
       * @group Props
       */
      appendTo = "body";
      /**
       * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
       * @group Props
       */
      key;
      /**
       * Whether to automatically manage layering.
       * @group Props
       */
      autoZIndex = true;
      /**
       * Base zIndex value to use in layering.
       * @group Props
       */
      baseZIndex = 0;
      /**
       * Transition options of the animation.
       * @group Props
       */
      transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
      /**
       * When enabled, can only focus on elements inside the confirm dialog.
       * @group Props
       */
      focusTrap = true;
      /**
       * Element to receive the focus when the dialog gets visible.
       * @group Props
       */
      defaultFocus = "accept";
      /**
       * Object literal to define widths per screen size.
       * @group Props
       */
      breakpoints;
      /**
       * Defines if background should be blocked when dialog is displayed.
       * @group Props
       */
      modal = true;
      /**
       * Current visible state as a boolean.
       * @group Props
       */
      get visible() {
        return this._visible;
      }
      set visible(value) {
        this._visible = value;
        if (this._visible && !this.maskVisible) {
          this.maskVisible = true;
        }
        this.cd.markForCheck();
      }
      /**
       *  Allows getting the position of the component.
       * @group Props
       */
      get position() {
        return this._position;
      }
      set position(value) {
        this._position = value;
        switch (value) {
          case "topleft":
          case "bottomleft":
          case "left":
            this.transformOptions = "translate3d(-100%, 0px, 0px)";
            break;
          case "topright":
          case "bottomright":
          case "right":
            this.transformOptions = "translate3d(100%, 0px, 0px)";
            break;
          case "bottom":
            this.transformOptions = "translate3d(0px, 100%, 0px)";
            break;
          case "top":
            this.transformOptions = "translate3d(0px, -100%, 0px)";
            break;
          default:
            this.transformOptions = "scale(0.7)";
            break;
        }
      }
      /**
       * Enables dragging to change the position using header.
       * @group Props
       */
      draggable = true;
      /**
       * Callback to invoke when dialog is hidden.
       * @param {ConfirmEventType} enum - Custom confirm event.
       * @group Emits
       */
      onHide = new EventEmitter();
      footer;
      _componentStyle = inject(ConfirmDialogStyle);
      headerTemplate;
      footerTemplate;
      rejectIconTemplate;
      acceptIconTemplate;
      messageTemplate;
      iconTemplate;
      headlessTemplate;
      templates;
      _headerTemplate;
      _footerTemplate;
      _rejectIconTemplate;
      _acceptIconTemplate;
      _messageTemplate;
      _iconTemplate;
      _headlessTemplate;
      confirmation;
      _visible;
      _style;
      maskVisible;
      dialog;
      wrapper;
      contentContainer;
      subscription;
      preWidth;
      _position = "center";
      transformOptions = "scale(0.7)";
      styleElement;
      id = s3("pn_id_");
      ariaLabelledBy = this.getAriaLabelledBy();
      translationSubscription;
      constructor(confirmationService, zone) {
        super();
        this.confirmationService = confirmationService;
        this.zone = zone;
        this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
          if (!confirmation) {
            this.hide();
            return;
          }
          if (confirmation.key === this.key) {
            this.confirmation = confirmation;
            const keys = Object.keys(confirmation);
            keys.forEach((key) => {
              this[key] = confirmation[key];
            });
            if (this.confirmation.accept) {
              this.confirmation.acceptEvent = new EventEmitter();
              this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
            }
            if (this.confirmation.reject) {
              this.confirmation.rejectEvent = new EventEmitter();
              this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
            }
            this.visible = true;
          }
        });
      }
      onInit() {
        if (this.breakpoints) {
          this.createStyle();
        }
        this.translationSubscription = this.config.translationObserver.subscribe(() => {
          if (this.visible) {
            this.cd.markForCheck();
          }
        });
      }
      onAfterContentInit() {
        this.templates?.forEach((item) => {
          switch (item.getType()) {
            case "header":
              this._headerTemplate = item.template;
              break;
            case "footer":
              this._footerTemplate = item.template;
              break;
            case "message":
              this._messageTemplate = item.template;
              break;
            case "icon":
              this._iconTemplate = item.template;
              break;
            case "rejecticon":
              this._rejectIconTemplate = item.template;
              break;
            case "accepticon":
              this._acceptIconTemplate = item.template;
              break;
            case "headless":
              this._headlessTemplate = item.template;
              break;
          }
        });
      }
      getAriaLabelledBy() {
        return this.header !== null ? s3("pn_id_") + "_header" : null;
      }
      option(name, k4) {
        const source = this;
        if (source.hasOwnProperty(name)) {
          if (k4) {
            return source[k4];
          }
          return source[name];
        }
        return void 0;
      }
      getButtonStyleClass(cx, opt) {
        const cxClass = this.cx(cx);
        const optionClass = this.option(opt);
        return [cxClass, optionClass].filter(Boolean).join(" ");
      }
      getElementToFocus() {
        if (!this.dialog?.el?.nativeElement)
          return;
        switch (this.option("defaultFocus")) {
          case "accept":
            return z(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
          case "reject":
            return z(this.dialog.el.nativeElement, ".p-confirm-dialog-reject");
          case "close":
            return z(this.dialog.el.nativeElement, ".p-dialog-header-close");
          case "none":
            return null;
          //backward compatibility
          default:
            return z(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
        }
      }
      createStyle() {
        if (!this.styleElement) {
          this.styleElement = this.document.createElement("style");
          this.styleElement.type = "text/css";
          _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
          this.document.head.appendChild(this.styleElement);
          let innerHTML = "";
          for (let breakpoint in this.breakpoints) {
            innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
          }
          this.styleElement.innerHTML = innerHTML;
          _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
        }
      }
      close() {
        if (this.confirmation?.rejectEvent) {
          this.confirmation.rejectEvent.emit(ConfirmEventType.CANCEL);
        }
        this.hide(ConfirmEventType.CANCEL);
      }
      hide(type) {
        this.onHide.emit(type);
        this.visible = false;
        this.unsubscribeConfirmationEvents();
        this.confirmation = null;
      }
      destroyStyle() {
        if (this.styleElement) {
          this.document.head.removeChild(this.styleElement);
          this.styleElement = null;
        }
      }
      onDestroy() {
        this.subscription.unsubscribe();
        this.unsubscribeConfirmationEvents();
        if (this.translationSubscription) {
          this.translationSubscription.unsubscribe();
        }
        this.destroyStyle();
      }
      onVisibleChange(value) {
        if (!value) {
          this.close();
        } else {
          this.visible = value;
        }
      }
      onAccept() {
        if (this.confirmation && this.confirmation.acceptEvent) {
          this.confirmation.acceptEvent.emit();
        }
        this.hide(ConfirmEventType.ACCEPT);
      }
      onReject() {
        if (this.confirmation && this.confirmation.rejectEvent) {
          this.confirmation.rejectEvent.emit(ConfirmEventType.REJECT);
        }
        this.hide(ConfirmEventType.REJECT);
      }
      unsubscribeConfirmationEvents() {
        if (this.confirmation) {
          this.confirmation.acceptEvent?.unsubscribe();
          this.confirmation.rejectEvent?.unsubscribe();
        }
      }
      get acceptButtonLabel() {
        return this.option("acceptLabel") || this.getAcceptButtonProps()?.label || this.config.getTranslation(TranslationKeys.ACCEPT);
      }
      get rejectButtonLabel() {
        return this.option("rejectLabel") || this.getRejectButtonProps()?.label || this.config.getTranslation(TranslationKeys.REJECT);
      }
      getAcceptButtonProps() {
        return this.option("acceptButtonProps");
      }
      getRejectButtonProps() {
        return this.option("rejectButtonProps");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ConfirmDialog, deps: [{ token: ConfirmationService }, { token: NgZone }], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.3.4", type: _ConfirmDialog, isStandalone: true, selector: "p-confirmDialog, p-confirmdialog, p-confirm-dialog", inputs: { header: "header", icon: "icon", message: "message", style: "style", styleClass: "styleClass", maskStyleClass: "maskStyleClass", acceptIcon: "acceptIcon", acceptLabel: "acceptLabel", closeAriaLabel: "closeAriaLabel", acceptAriaLabel: "acceptAriaLabel", acceptVisible: ["acceptVisible", "acceptVisible", booleanAttribute], rejectIcon: "rejectIcon", rejectLabel: "rejectLabel", rejectAriaLabel: "rejectAriaLabel", rejectVisible: ["rejectVisible", "rejectVisible", booleanAttribute], acceptButtonStyleClass: "acceptButtonStyleClass", rejectButtonStyleClass: "rejectButtonStyleClass", closeOnEscape: ["closeOnEscape", "closeOnEscape", booleanAttribute], dismissableMask: ["dismissableMask", "dismissableMask", booleanAttribute], blockScroll: ["blockScroll", "blockScroll", booleanAttribute], rtl: ["rtl", "rtl", booleanAttribute], closable: ["closable", "closable", booleanAttribute], appendTo: "appendTo", key: "key", autoZIndex: ["autoZIndex", "autoZIndex", booleanAttribute], baseZIndex: ["baseZIndex", "baseZIndex", numberAttribute], transitionOptions: "transitionOptions", focusTrap: ["focusTrap", "focusTrap", booleanAttribute], defaultFocus: "defaultFocus", breakpoints: "breakpoints", modal: ["modal", "modal", booleanAttribute], visible: "visible", position: "position", draggable: ["draggable", "draggable", booleanAttribute] }, outputs: { onHide: "onHide" }, providers: [ConfirmDialogStyle, { provide: CONFIRMDIALOG_INSTANCE, useExisting: _ConfirmDialog }, { provide: PARENT_INSTANCE, useExisting: _ConfirmDialog }], queries: [{ propertyName: "footer", first: true, predicate: Footer, descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["header"] }, { propertyName: "footerTemplate", first: true, predicate: ["footer"] }, { propertyName: "rejectIconTemplate", first: true, predicate: ["rejecticon"] }, { propertyName: "acceptIconTemplate", first: true, predicate: ["accepticon"] }, { propertyName: "messageTemplate", first: true, predicate: ["message"] }, { propertyName: "iconTemplate", first: true, predicate: ["icon"] }, { propertyName: "headlessTemplate", first: true, predicate: ["headless"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, hostDirectives: [{ directive: Bind }], ngImport: core_exports, template: `
        <p-dialog
            [pt]="pt"
            #dialog
            [visible]="visible"
            (visibleChange)="onVisibleChange($event)"
            role="alertdialog"
            [closable]="option('closable')"
            [styleClass]="cn(cx('root'), styleClass)"
            [modal]="option('modal')"
            [header]="option('header')"
            [closeOnEscape]="option('closeOnEscape')"
            [blockScroll]="option('blockScroll')"
            [appendTo]="option('appendTo')"
            [position]="position"
            [style]="style"
            [dismissableMask]="dismissableMask"
            [draggable]="draggable"
            [baseZIndex]="baseZIndex"
            [autoZIndex]="autoZIndex"
            [maskStyleClass]="cn(cx('mask'), maskStyleClass)"
        >
            @if (headlessTemplate || _headlessTemplate) {
                <ng-template #headless>
                    <ng-container
                        *ngTemplateOutlet="
                            headlessTemplate || _headlessTemplate;
                            context: {
                                $implicit: confirmation,
                                onAccept: onAccept.bind(this),
                                onReject: onReject.bind(this)
                            }
                        "
                    ></ng-container>
                </ng-template>
            } @else {
                @if (headerTemplate || _headerTemplate) {
                    <ng-template #header>
                        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    </ng-template>
                }

                <ng-template #content>
                    @if (iconTemplate || _iconTemplate) {
                        <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                    } @else if (!iconTemplate && !_iconTemplate && !_messageTemplate && !messageTemplate) {
                        <i [ngClass]="cx('icon')" [class]="option('icon')" [pBind]="ptm('icon')" *ngIf="option('icon')"></i>
                    }
                    @if (messageTemplate || _messageTemplate) {
                        <ng-template *ngTemplateOutlet="messageTemplate || _messageTemplate; context: { $implicit: confirmation }"></ng-template>
                    } @else {
                        <span [class]="cx('message')" [pBind]="ptm('message')" [innerHTML]="option('message')"> </span>
                    }
                </ng-template>
            }
            <ng-template #footer>
                @if (footerTemplate || _footerTemplate) {
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                }
                @if (!footerTemplate && !_footerTemplate) {
                    <p-button
                        [pt]="ptm('pcRejectButton')"
                        *ngIf="option('rejectVisible')"
                        [label]="rejectButtonLabel"
                        (onClick)="onReject()"
                        [styleClass]="getButtonStyleClass('pcRejectButton', 'rejectButtonStyleClass')"
                        [ariaLabel]="option('rejectButtonProps', 'ariaLabel')"
                        [buttonProps]="getRejectButtonProps()"
                    >
                        <ng-template #icon>
                            @if (rejectIcon && !rejectIconTemplate && !_rejectIconTemplate) {
                                <i *ngIf="option('rejectIcon')" [class]="option('rejectIcon')" [pBind]="ptm('pcRejectButton')['icon']"></i>
                            }
                            <ng-template *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <p-button
                        [pt]="ptm('pcAcceptButton')"
                        [label]="acceptButtonLabel"
                        (onClick)="onAccept()"
                        [styleClass]="getButtonStyleClass('pcAcceptButton', 'acceptButtonStyleClass')"
                        *ngIf="option('acceptVisible')"
                        [ariaLabel]="option('acceptButtonProps', 'ariaLabel')"
                        [buttonProps]="getAcceptButtonProps()"
                    >
                        <ng-template #icon>
                            @if (acceptIcon && !_acceptIconTemplate && !acceptIconTemplate) {
                                <i *ngIf="option('acceptIcon')" [class]="option('acceptIcon')" [pBind]="ptm('pcAcceptButton')['icon']"></i>
                            }
                            <ng-template *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                }
            </ng-template>
        </p-dialog>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: Button, selector: "p-button", inputs: ["hostName", "type", "badge", "disabled", "raised", "rounded", "text", "plain", "outlined", "link", "tabindex", "size", "variant", "style", "styleClass", "badgeClass", "badgeSeverity", "ariaLabel", "autofocus", "iconPos", "icon", "label", "loading", "loadingIcon", "severity", "buttonProps", "fluid"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: Dialog, selector: "p-dialog", inputs: ["hostName", "header", "draggable", "resizable", "contentStyle", "contentStyleClass", "modal", "closeOnEscape", "dismissableMask", "rtl", "closable", "breakpoints", "styleClass", "maskStyleClass", "maskStyle", "showHeader", "blockScroll", "autoZIndex", "baseZIndex", "minX", "minY", "focusOnShow", "maximizable", "keepInViewport", "focusTrap", "transitionOptions", "closeIcon", "closeAriaLabel", "closeTabindex", "minimizeIcon", "maximizeIcon", "closeButtonProps", "maximizeButtonProps", "visible", "style", "position", "role", "appendTo", "content", "contentTemplate", "footerTemplate", "closeIconTemplate", "maximizeIconTemplate", "minimizeIconTemplate", "headlessTemplate"], outputs: ["onShow", "onHide", "visibleChange", "onResizeInit", "onResizeEnd", "onDragEnd", "onMaximize"] }, { kind: "ngmodule", type: SharedModule }, { kind: "directive", type: Bind, selector: "[pBind]", inputs: ["pBind"] }], animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation2)]), transition("visible => void", [useAnimation(hideAnimation2)])])], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ConfirmDialog, decorators: [{
      type: Component,
      args: [{
        selector: "p-confirmDialog, p-confirmdialog, p-confirm-dialog",
        standalone: true,
        imports: [CommonModule, Button, Dialog, SharedModule, Bind],
        template: `
        <p-dialog
            [pt]="pt"
            #dialog
            [visible]="visible"
            (visibleChange)="onVisibleChange($event)"
            role="alertdialog"
            [closable]="option('closable')"
            [styleClass]="cn(cx('root'), styleClass)"
            [modal]="option('modal')"
            [header]="option('header')"
            [closeOnEscape]="option('closeOnEscape')"
            [blockScroll]="option('blockScroll')"
            [appendTo]="option('appendTo')"
            [position]="position"
            [style]="style"
            [dismissableMask]="dismissableMask"
            [draggable]="draggable"
            [baseZIndex]="baseZIndex"
            [autoZIndex]="autoZIndex"
            [maskStyleClass]="cn(cx('mask'), maskStyleClass)"
        >
            @if (headlessTemplate || _headlessTemplate) {
                <ng-template #headless>
                    <ng-container
                        *ngTemplateOutlet="
                            headlessTemplate || _headlessTemplate;
                            context: {
                                $implicit: confirmation,
                                onAccept: onAccept.bind(this),
                                onReject: onReject.bind(this)
                            }
                        "
                    ></ng-container>
                </ng-template>
            } @else {
                @if (headerTemplate || _headerTemplate) {
                    <ng-template #header>
                        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    </ng-template>
                }

                <ng-template #content>
                    @if (iconTemplate || _iconTemplate) {
                        <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                    } @else if (!iconTemplate && !_iconTemplate && !_messageTemplate && !messageTemplate) {
                        <i [ngClass]="cx('icon')" [class]="option('icon')" [pBind]="ptm('icon')" *ngIf="option('icon')"></i>
                    }
                    @if (messageTemplate || _messageTemplate) {
                        <ng-template *ngTemplateOutlet="messageTemplate || _messageTemplate; context: { $implicit: confirmation }"></ng-template>
                    } @else {
                        <span [class]="cx('message')" [pBind]="ptm('message')" [innerHTML]="option('message')"> </span>
                    }
                </ng-template>
            }
            <ng-template #footer>
                @if (footerTemplate || _footerTemplate) {
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                }
                @if (!footerTemplate && !_footerTemplate) {
                    <p-button
                        [pt]="ptm('pcRejectButton')"
                        *ngIf="option('rejectVisible')"
                        [label]="rejectButtonLabel"
                        (onClick)="onReject()"
                        [styleClass]="getButtonStyleClass('pcRejectButton', 'rejectButtonStyleClass')"
                        [ariaLabel]="option('rejectButtonProps', 'ariaLabel')"
                        [buttonProps]="getRejectButtonProps()"
                    >
                        <ng-template #icon>
                            @if (rejectIcon && !rejectIconTemplate && !_rejectIconTemplate) {
                                <i *ngIf="option('rejectIcon')" [class]="option('rejectIcon')" [pBind]="ptm('pcRejectButton')['icon']"></i>
                            }
                            <ng-template *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <p-button
                        [pt]="ptm('pcAcceptButton')"
                        [label]="acceptButtonLabel"
                        (onClick)="onAccept()"
                        [styleClass]="getButtonStyleClass('pcAcceptButton', 'acceptButtonStyleClass')"
                        *ngIf="option('acceptVisible')"
                        [ariaLabel]="option('acceptButtonProps', 'ariaLabel')"
                        [buttonProps]="getAcceptButtonProps()"
                    >
                        <ng-template #icon>
                            @if (acceptIcon && !_acceptIconTemplate && !acceptIconTemplate) {
                                <i *ngIf="option('acceptIcon')" [class]="option('acceptIcon')" [pBind]="ptm('pcAcceptButton')['icon']"></i>
                            }
                            <ng-template *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                }
            </ng-template>
        </p-dialog>
    `,
        animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation2)]), transition("visible => void", [useAnimation(hideAnimation2)])])],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [ConfirmDialogStyle, { provide: CONFIRMDIALOG_INSTANCE, useExisting: ConfirmDialog }, { provide: PARENT_INSTANCE, useExisting: ConfirmDialog }],
        hostDirectives: [Bind]
      }]
    }], ctorParameters: () => [{ type: ConfirmationService }, { type: NgZone }], propDecorators: { header: [{
      type: Input
    }], icon: [{
      type: Input
    }], message: [{
      type: Input
    }], style: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], maskStyleClass: [{
      type: Input
    }], acceptIcon: [{
      type: Input
    }], acceptLabel: [{
      type: Input
    }], closeAriaLabel: [{
      type: Input
    }], acceptAriaLabel: [{
      type: Input
    }], acceptVisible: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], rejectIcon: [{
      type: Input
    }], rejectLabel: [{
      type: Input
    }], rejectAriaLabel: [{
      type: Input
    }], rejectVisible: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], acceptButtonStyleClass: [{
      type: Input
    }], rejectButtonStyleClass: [{
      type: Input
    }], closeOnEscape: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], dismissableMask: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], blockScroll: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], rtl: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], closable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], appendTo: [{
      type: Input
    }], key: [{
      type: Input
    }], autoZIndex: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], baseZIndex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], transitionOptions: [{
      type: Input
    }], focusTrap: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], defaultFocus: [{
      type: Input
    }], breakpoints: [{
      type: Input
    }], modal: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], visible: [{
      type: Input
    }], position: [{
      type: Input
    }], draggable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], onHide: [{
      type: Output
    }], footer: [{
      type: ContentChild,
      args: [Footer]
    }], headerTemplate: [{
      type: ContentChild,
      args: ["header", { descendants: false }]
    }], footerTemplate: [{
      type: ContentChild,
      args: ["footer", { descendants: false }]
    }], rejectIconTemplate: [{
      type: ContentChild,
      args: ["rejecticon", { descendants: false }]
    }], acceptIconTemplate: [{
      type: ContentChild,
      args: ["accepticon", { descendants: false }]
    }], messageTemplate: [{
      type: ContentChild,
      args: ["message", { descendants: false }]
    }], iconTemplate: [{
      type: ContentChild,
      args: ["icon", { descendants: false }]
    }], headlessTemplate: [{
      type: ContentChild,
      args: ["headless", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    ConfirmDialogModule = class _ConfirmDialogModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ConfirmDialogModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.4", ngImport: core_exports, type: _ConfirmDialogModule, imports: [ConfirmDialog, SharedModule], exports: [ConfirmDialog, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _ConfirmDialogModule, imports: [ConfirmDialog, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: ConfirmDialogModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [ConfirmDialog, SharedModule],
        exports: [ConfirmDialog, SharedModule]
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-types-popover.mjs
var init_primeng_types_popover = __esm({
  "node_modules/primeng/fesm2022/primeng-types-popover.mjs"() {
    "use strict";
  }
});

// node_modules/primeng/fesm2022/primeng-popover.mjs
var style10, classes7, PopoverStyle, POPOVER_INSTANCE, Popover, PopoverModule;
var init_primeng_popover = __esm({
  "node_modules/primeng/fesm2022/primeng-popover.mjs"() {
    "use strict";
    init_primeng_types_popover();
    init_animations2();
    init_common();
    init_common();
    init_core();
    init_core();
    init_dist2();
    init_dist();
    init_primeng_api();
    init_primeng_basecomponent();
    init_primeng_bind();
    init_primeng_bind();
    init_primeng_dom();
    init_primeng_utils();
    init_primeng_base();
    style10 = /*css*/
    `
.p-popover {
    margin-top: dt('popover.gutter');
    background: dt('popover.background');
    color: dt('popover.color');
    border: 1px solid dt('popover.border.color');
    border-radius: dt('popover.border.radius');
    box-shadow: dt('popover.shadow');
    position: absolute
}

.p-popover-content {
    padding: dt('popover.content.padding');
}

.p-popover-flipped {
    margin-top: calc(dt('popover.gutter') * -1);
    margin-bottom: dt('popover.gutter');
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(dt('popover.gutter') - 2px);
    margin-left: calc(-1 * (dt('popover.gutter') - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.background');
}

.p-popover:before {
    border-width: dt('popover.gutter');
    margin-left: calc(-1 * dt('popover.gutter'));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.border.color');
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: dt('popover.background');
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: dt('popover.border.color');
}

`;
    classes7 = {
      root: "p-popover p-component",
      content: "p-popover-content"
    };
    PopoverStyle = class _PopoverStyle extends BaseStyle {
      name = "popover";
      style = style10;
      classes = classes7;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _PopoverStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _PopoverStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: PopoverStyle, decorators: [{
      type: Injectable
    }] });
    POPOVER_INSTANCE = new InjectionToken("POPOVER_INSTANCE");
    Popover = class _Popover extends BaseComponent {
      $pcPopover = inject(POPOVER_INSTANCE, { optional: true, skipSelf: true }) ?? void 0;
      bindDirectiveInstance = inject(Bind, { self: true });
      onAfterViewChecked() {
        this.bindDirectiveInstance.setAttrs(this.ptm("host"));
      }
      /**
       * Defines a string that labels the input for accessibility.
       * @group Props
       */
      ariaLabel;
      /**
       * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
       * @group Props
       */
      ariaLabelledBy;
      /**
       * Enables to hide the overlay when outside is clicked.
       * @group Props
       */
      dismissable = true;
      /**
       * Inline style of the component.
       * @group Props
       */
      style;
      /**
       * Style class of the component.
       * @group Props
       */
      styleClass;
      /**
       * Target element to attach the panel, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
       * @group Props
       */
      appendTo = "body";
      /**
       * Whether to automatically manage layering.
       * @group Props
       */
      autoZIndex = true;
      /**
       * Aria label of the close icon.
       * @group Props
       */
      ariaCloseLabel;
      /**
       * Base zIndex value to use in layering.
       * @group Props
       */
      baseZIndex = 0;
      /**
       * When enabled, first button receives focus on show.
       * @group Props
       */
      focusOnShow = true;
      /**
       * Transition options of the show animation.
       * @group Props
       */
      showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
      /**
       * Transition options of the hide animation.
       * @group Props
       */
      hideTransitionOptions = ".1s linear";
      /**
       * Callback to invoke when an overlay becomes visible.
       * @group Emits
       */
      onShow = new EventEmitter();
      /**
       * Callback to invoke when an overlay gets hidden.
       * @group Emits
       */
      onHide = new EventEmitter();
      container;
      overlayVisible = false;
      render = false;
      isOverlayAnimationInProgress = false;
      selfClick = false;
      documentClickListener;
      target;
      willHide;
      scrollHandler;
      documentResizeListener;
      /**
       * Custom content template.
       * @group Templates
       */
      contentTemplate;
      templates;
      _contentTemplate;
      destroyCallback;
      overlayEventListener;
      overlaySubscription;
      _componentStyle = inject(PopoverStyle);
      zone = inject(NgZone);
      overlayService = inject(OverlayService);
      onAfterContentInit() {
        this.templates.forEach((item) => {
          switch (item.getType()) {
            case "content":
              this._contentTemplate = item.template;
              break;
          }
        });
      }
      bindDocumentClickListener() {
        if (isPlatformBrowser(this.platformId)) {
          if (!this.documentClickListener) {
            let documentEvent = Ut() ? "touchstart" : "click";
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
            this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
              if (!this.dismissable) {
                return;
              }
              if (!this.container?.contains(event.target) && this.target !== event.target && !this.target.contains(event.target) && !this.selfClick) {
                this.hide();
              }
              this.selfClick = false;
              this.cd.markForCheck();
            });
          }
        }
      }
      unbindDocumentClickListener() {
        if (this.documentClickListener) {
          this.documentClickListener();
          this.documentClickListener = null;
          this.selfClick = false;
        }
      }
      /**
       * Toggles the visibility of the panel.
       * @param {Event} event - Browser event
       * @param {Target} target - Target element.
       * @group Method
       */
      toggle(event, target) {
        if (this.isOverlayAnimationInProgress) {
          return;
        }
        if (this.overlayVisible) {
          if (this.hasTargetChanged(event, target)) {
            this.destroyCallback = () => {
              this.show(null, target || event.currentTarget || event.target);
            };
          }
          this.hide();
        } else {
          this.show(event, target);
        }
      }
      /**
       * Displays the panel.
       * @param {Event} event - Browser event
       * @param {Target} target - Target element.
       * @group Method
       */
      show(event, target) {
        target && event && event.stopPropagation();
        if (this.isOverlayAnimationInProgress) {
          return;
        }
        this.target = target || event.currentTarget || event.target;
        this.overlayVisible = true;
        this.render = true;
        this.cd.markForCheck();
      }
      onOverlayClick(event) {
        this.overlayService.add({
          originalEvent: event,
          target: this.el.nativeElement
        });
        this.selfClick = true;
      }
      onContentClick(event) {
        const targetElement = event.target;
        this.selfClick = event.offsetX < targetElement.clientWidth && event.offsetY < targetElement.clientHeight;
      }
      hasTargetChanged(event, target) {
        return this.target != null && this.target !== (target || event.currentTarget || event.target);
      }
      appendContainer() {
        if (this.appendTo) {
          if (this.appendTo === "body")
            this.renderer.appendChild(this.document.body, this.container);
          else
            ut(this.appendTo, this.container);
        }
      }
      restoreAppend() {
        if (this.container && this.appendTo) {
          this.renderer.appendChild(this.el.nativeElement, this.container);
        }
      }
      align() {
        if (this.autoZIndex) {
          zindexutils.set("overlay", this.container, this.baseZIndex + this.config.zIndex.overlay);
        }
        D(this.container, this.target, false);
        const containerOffset = K(this.container);
        const targetOffset = K(this.target);
        const borderRadius = this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius");
        let arrowLeft = 0;
        if (containerOffset.left < targetOffset.left) {
          arrowLeft = targetOffset.left - containerOffset.left - parseFloat(borderRadius) * 2;
        }
        this.container?.style.setProperty(rr("popover.arrow.left").name, `${arrowLeft}px`);
        if (containerOffset.top < targetOffset.top) {
          this.container?.setAttribute("data-p-popover-flipped", "true");
          W(this.container, "p-popover-flipped");
        }
      }
      onAnimationStart(event) {
        if (event.toState === "open") {
          this.container = event.element;
          this.container?.setAttribute(this.$attrSelector, "");
          this.appendContainer();
          this.align();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          if (this.focusOnShow) {
            this.focus();
          }
          this.overlayEventListener = (e) => {
            if (this.container && this.container.contains(e.target)) {
              this.selfClick = true;
            }
          };
          this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
          this.onShow.emit(null);
        }
        this.isOverlayAnimationInProgress = true;
      }
      onAnimationEnd(event) {
        switch (event.toState) {
          case "void":
            if (this.destroyCallback) {
              this.destroyCallback();
              this.destroyCallback = null;
            }
            if (this.overlaySubscription) {
              this.overlaySubscription.unsubscribe();
            }
            break;
          case "close":
            if (this.autoZIndex) {
              zindexutils.clear(this.container);
            }
            if (this.overlaySubscription) {
              this.overlaySubscription.unsubscribe();
            }
            this.onContainerDestroy();
            this.onHide.emit({});
            this.render = false;
            break;
        }
        this.isOverlayAnimationInProgress = false;
      }
      focus() {
        let focusable = z(this.container, "[autofocus]");
        if (focusable) {
          this.zone.runOutsideAngular(() => {
            setTimeout(() => focusable.focus(), 5);
          });
        }
      }
      /**
       * Hides the panel.
       * @group Method
       */
      hide() {
        this.overlayVisible = false;
        this.cd.markForCheck();
      }
      onCloseClick(event) {
        this.hide();
        event.preventDefault();
      }
      onEscapeKeydown(event) {
        this.hide();
      }
      onWindowResize() {
        if (this.overlayVisible && !Yt()) {
          this.hide();
        }
      }
      bindDocumentResizeListener() {
        if (isPlatformBrowser(this.platformId)) {
          if (!this.documentResizeListener) {
            const window2 = this.document.defaultView;
            this.documentResizeListener = this.renderer.listen(window2, "resize", this.onWindowResize.bind(this));
          }
        }
      }
      unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
          this.documentResizeListener();
          this.documentResizeListener = null;
        }
      }
      bindScrollListener() {
        if (isPlatformBrowser(this.platformId)) {
          if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
              if (this.overlayVisible) {
                this.hide();
              }
            });
          }
          this.scrollHandler.bindScrollListener();
        }
      }
      unbindScrollListener() {
        if (this.scrollHandler) {
          this.scrollHandler.unbindScrollListener();
        }
      }
      onContainerDestroy() {
        if (!this.cd.destroyed) {
          this.target = null;
        }
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
      }
      onDestroy() {
        if (this.scrollHandler) {
          this.scrollHandler.destroy();
          this.scrollHandler = null;
        }
        if (this.container && this.autoZIndex) {
          zindexutils.clear(this.container);
        }
        if (!this.cd.destroyed) {
          this.target = null;
        }
        this.destroyCallback = null;
        if (this.container) {
          this.restoreAppend();
          this.onContainerDestroy();
        }
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _Popover, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.3.4", type: _Popover, isStandalone: true, selector: "p-popover", inputs: { ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", dismissable: ["dismissable", "dismissable", booleanAttribute], style: "style", styleClass: "styleClass", appendTo: "appendTo", autoZIndex: ["autoZIndex", "autoZIndex", booleanAttribute], ariaCloseLabel: "ariaCloseLabel", baseZIndex: ["baseZIndex", "baseZIndex", numberAttribute], focusOnShow: ["focusOnShow", "focusOnShow", booleanAttribute], showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions" }, outputs: { onShow: "onShow", onHide: "onHide" }, host: { listeners: { "document:keydown.escape": "onEscapeKeydown($event)" } }, providers: [PopoverStyle, { provide: POPOVER_INSTANCE, useExisting: _Popover }, { provide: PARENT_INSTANCE, useExisting: _Popover }], queries: [{ propertyName: "contentTemplate", first: true, predicate: ["content"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, hostDirectives: [{ directive: Bind }], ngImport: core_exports, template: `
        <div
            *ngIf="render"
            [pBind]="ptm('root')"
            [class]="cn(cx('root'), styleClass)"
            [ngStyle]="style"
            (click)="onOverlayClick($event)"
            [@animation]="{
                value: overlayVisible ? 'open' : 'close',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            (@animation.start)="onAnimationStart($event)"
            (@animation.done)="onAnimationEnd($event)"
            role="dialog"
            [attr.aria-modal]="overlayVisible"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledBy]="ariaLabelledBy"
        >
            <div [pBind]="ptm('content')" [class]="cx('content')" (click)="onContentClick($event)" (mousedown)="onContentClick($event)">
                <ng-content></ng-content>
                <ng-template *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { closeCallback: onCloseClick.bind(this) }"></ng-template>
            </div>
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: SharedModule }, { kind: "directive", type: Bind, selector: "[pBind]", inputs: ["pBind"] }], animations: [
        trigger("animation", [
          state("void", style({
            transform: "scaleY(0.8)",
            opacity: 0
          })),
          state("close", style({
            opacity: 0
          })),
          state("open", style({
            transform: "translateY(0)",
            opacity: 1
          })),
          transition("void => open", animate("{{showTransitionParams}}")),
          transition("open => close", animate("{{hideTransitionParams}}"))
        ])
      ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: Popover, decorators: [{
      type: Component,
      args: [{
        selector: "p-popover",
        standalone: true,
        imports: [CommonModule, SharedModule, Bind],
        providers: [PopoverStyle, { provide: POPOVER_INSTANCE, useExisting: Popover }, { provide: PARENT_INSTANCE, useExisting: Popover }],
        hostDirectives: [Bind],
        template: `
        <div
            *ngIf="render"
            [pBind]="ptm('root')"
            [class]="cn(cx('root'), styleClass)"
            [ngStyle]="style"
            (click)="onOverlayClick($event)"
            [@animation]="{
                value: overlayVisible ? 'open' : 'close',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            (@animation.start)="onAnimationStart($event)"
            (@animation.done)="onAnimationEnd($event)"
            role="dialog"
            [attr.aria-modal]="overlayVisible"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledBy]="ariaLabelledBy"
        >
            <div [pBind]="ptm('content')" [class]="cx('content')" (click)="onContentClick($event)" (mousedown)="onContentClick($event)">
                <ng-content></ng-content>
                <ng-template *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { closeCallback: onCloseClick.bind(this) }"></ng-template>
            </div>
        </div>
    `,
        animations: [
          trigger("animation", [
            state("void", style({
              transform: "scaleY(0.8)",
              opacity: 0
            })),
            state("close", style({
              opacity: 0
            })),
            state("open", style({
              transform: "translateY(0)",
              opacity: 1
            })),
            transition("void => open", animate("{{showTransitionParams}}")),
            transition("open => close", animate("{{hideTransitionParams}}"))
          ])
        ],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
      }]
    }], propDecorators: { ariaLabel: [{
      type: Input
    }], ariaLabelledBy: [{
      type: Input
    }], dismissable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], style: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], appendTo: [{
      type: Input
    }], autoZIndex: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], ariaCloseLabel: [{
      type: Input
    }], baseZIndex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], focusOnShow: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showTransitionOptions: [{
      type: Input
    }], hideTransitionOptions: [{
      type: Input
    }], onShow: [{
      type: Output
    }], onHide: [{
      type: Output
    }], contentTemplate: [{
      type: ContentChild,
      args: ["content", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }], onEscapeKeydown: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }] } });
    PopoverModule = class _PopoverModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _PopoverModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.4", ngImport: core_exports, type: _PopoverModule, imports: [Popover, SharedModule], exports: [Popover, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: _PopoverModule, imports: [Popover, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.4", ngImport: core_exports, type: PopoverModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Popover, SharedModule],
        exports: [Popover, SharedModule]
      }]
    }] });
  }
});

// src/app/dashboard/layout/layout.ts
var Layout;
var init_layout3 = __esm({
  "src/app/dashboard/layout/layout.ts"() {
    "use strict";
    init_tslib_es6();
    init_layout();
    init_layout2();
    init_core();
    init_router();
    init_primeng_confirmdialog();
    init_primeng_popover();
    Layout = class Layout2 {
    };
    Layout = __decorate([
      Component({
        selector: "app-layout",
        imports: [RouterOutlet, RouterLink, ConfirmDialogModule, PopoverModule],
        template: layout_default,
        styles: [layout_default2]
      })
    ], Layout);
  }
});

// src/app/dashboard/layout/layout.spec.ts
var require_layout_spec = __commonJS({
  "src/app/dashboard/layout/layout.spec.ts"(exports) {
    init_testing();
    init_core();
    init_router();
    init_animations();
    init_primeng_api();
    init_layout3();
    describe("Layout", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Layout],
          providers: [
            provideZonelessChangeDetection(),
            provideRouter([]),
            provideNoopAnimations(),
            ConfirmationService
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Layout);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_layout_spec();
/*! Bundled license information:

@angular/animations/fesm2022/private_export.mjs:
@angular/animations/fesm2022/util.mjs:
@angular/animations/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/animations.mjs:
@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=spec-layout.spec.js.map
