// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import * as bootstrap from "bootstrap"
import githubAutoCompleteElement from "@github/auto-complete-element"
import Blacklight from "blacklight"

import Spotlight from "spotlight"

Blacklight.onLoad(function() {
  Spotlight.activate();
});

import "openseadragon"
import "openseadragon-rails"

