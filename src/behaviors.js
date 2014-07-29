/**
 * @file Manages registration and calling of behaviors.
 * @author Marcin Wiatr
 * @since 25 July 2014
 * @module Behaviors
 */

 if (typeof jQuery === "undefined") { throw new Error("Behaviors requires jQuery") }

   (function ($) {

    /**
     * Call this method passing the behavior name to call the behavior
     *
     * Additional options can be passed to the function, e.g $("#main").behavior("sticky-footer", "#option1", "#option2")
     * To learn which options can be passed, please consult documentation for specific behaviors.
     * @name  behavior
     * @param {string} behaviorName - The name of the behavior.
     */
     $.fn.behavior = function(behaviorName) {
      return qi.behaviors[behaviorName].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }

    /**
     * Registers new behavior 
     *
     * @name addBehavior
     * @param {string} behaviorName - The name of the behavior. Needs to be unique 
     * @param {string} fnc - The name of the behavior.
     */
     $.fn.addBehavior = function(behaviorName, fnc) {

      try {
        qi.behaviors;
      } catch (e) {
        qi = window.qi || {};
        qi.behaviors = qi.behaviors || [];
      }

      if (qi.behaviors[behaviorName] != null) 
        throw "Behavior with the name: " + behaviorName + " has already been registered."

      qi.behaviors[behaviorName] = fnc;
    };
  }(jQuery));