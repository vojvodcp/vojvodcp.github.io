(function() {
  var Clearbit, providePlugin,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  providePlugin = function(pluginName, pluginConstructor) {
    var tryApply = function() {
      var ga = window[window['GoogleAnalyticsObject'] || 'ga'];

      if (typeof ga === 'function') {
        ga('provide', pluginName, pluginConstructor);
        return true;
      } else {
        return false;
      }
    }

    if (tryApply()) {
      // Native support
    } else if (window.analytics && typeof window.analytics.ready === 'function') {
      // Segment support
      analytics.ready(tryApply);
    } else {
      console.error("Clearbit error: 'ga' variable not found.");
    }
  };

  Clearbit = (function() {
      function Clearbit(tracker, config) {
        this.tracker = tracker;
        this.config = config != null ? config : {};
        this.triggerEvent = bind(this.triggerEvent, this);
        this.setIPDimensions = bind(this.setIPDimensions, this);
        this.setDimensions = bind(this.setDimensions, this);
        this.set = bind(this.set, this);
        this.done = bind(this.done, this);
        this.mapping = this.config.mapping || {};
        this.done({"ip":"71.41.251.210","domain":"mealthy.com","type":"company","fuzzy":true,"company":{"id":"769b780f-ccdd-4d40-bad3-d21a2baa3587","name":"Mealthy","legalName":"Mealthy Inc","domain":"mealthy.com","domainAliases":[],"site":{"phoneNumbers":["+1 800-281-0146"],"emailAddresses":["support@mealthy.com","zac@mealthy.com","anna@mealthy.com","investorrelations@mealthy.com"]},"category":{"sector":"Consumer Staples","industryGroup":"Consumer Staples","industry":"Consumer Staples","subIndustry":"Consumer Staples","sicCode":"20","naicsCode":"32"},"tags":["E-commerce","Consumer Staples","Food","B2C"],"description":"Make food fun, fresh, and healthy with Mealthy and Mealthy appliances. Find inspiration, recipes, how-to videos, products, and more! Cook smarter with our collection of articles and tips.","foundedYear":2017,"location":"3437 W Shaw Ave STE 101, Fresno, CA 93711, USA","timeZone":"America/Los_Angeles","utcOffset":-8,"geo":{"streetNumber":"3437","streetName":"West Shaw Avenue","subPremise":"STE 101","city":"Fresno","postalCode":"93711","state":"California","stateCode":"CA","country":"United States","countryCode":"US","lat":36.8047579,"lng":-119.853764},"logo":"https://logo.clearbit.com/mealthy.com","facebook":{"handle":null,"likes":null},"linkedin":{"handle":"company/mealthy"},"twitter":{"handle":null,"id":null,"bio":null,"followers":null,"following":null,"location":null,"site":null,"avatar":null},"crunchbase":{"handle":null},"emailProvider":false,"type":"private","ticker":null,"identifiers":{"usEIN":null},"phone":null,"metrics":{"alexaUsRank":52686,"alexaGlobalRank":250924,"employees":15,"employeesRange":"11-50","marketCap":null,"raised":null,"annualRevenue":null,"estimatedAnnualRevenue":"$1M-$10M","fiscalYearEnd":null},"indexedAt":"2020-10-15T10:48:26.198Z","tech":["google_apps","cloudinary","mixpanel","heroku","ios","google_tag_manager","visual_website_optimizer","facebook_advertiser","google_analytics","conversio"],"techCategories":["productivity","image_video_services","analytics","web_hosting","programming_framework","tag_management","website_optimization","advertising","marketing_automation"],"parent":{"domain":null},"ultimate_parent":{"domain":null}},"geoIP":{"city":"Dallas","state":"Texas","stateCode":"TX","country":"United States","countryCode":"US"}});
      }
      Clearbit.prototype.done = function(response) {
          if (response) {
             this.setIPDimensions(response);
             if (response.company){
                 this.setDimensions(response.company);
            }
            return this.triggerEvent();
         }
       };
        Clearbit.prototype.set = function(key, value) {
         if (key && value) {
           return this.tracker.set(key, value);
         }
       };
        Clearbit.prototype.setIPDimensions = function(response) {
         if (typeof response.type !== 'undefined') {
           this.set(this.mapping.type, response.type)
         }
       }

    Clearbit.prototype.setDimensions = function(company) {
      var ref, ref1;
      this.set(this.mapping.companyName, company.name);
      this.set(this.mapping.companyDomain, company.domain);
      this.set(this.mapping.companyType, company.type);
      this.set(this.mapping.companyTags, (ref = company.tags) != null ? ref.join(',') : void 0);
      this.set(this.mapping.companyTech, (ref1 = company.tech) != null ? ref1.join(',') : void 0);
      this.set(this.mapping.companySector, company.category.sector);
      this.set(this.mapping.companyIndustryGroup, company.category.industryGroup);
      this.set(this.mapping.companyIndustry, company.category.industry);
      this.set(this.mapping.companySubIndustry, company.category.subIndustry);
      this.set(this.mapping.companySicCode, company.category.sicCode);
      this.set(this.mapping.companyNaicsCode, company.category.naicsCode);
      this.set(this.mapping.companyCountry, company.geo.countryCode);
      this.set(this.mapping.companyState, company.geo.stateCode);
      this.set(this.mapping.companyCity, company.geo.city);
      this.set(this.mapping.companyFunding, company.metrics.raised);
      this.set(this.mapping.companyEstimatedAnnualRevenue, company.metrics.estimatedAnnualRevenue);
      this.set(this.mapping.companyEmployeesRange, company.metrics.employeesRange);
      this.set(this.mapping.companyEmployees, company.metrics.employees);
      return this.set(this.mapping.companyAlexaRank, company.metrics.alexaGlobalRank);
    };

    Clearbit.prototype.triggerEvent = function() {
      return this.tracker.send(
        'event',
        'Clearbit',
        'Enriched',
        'Clearbit Enriched',
        {nonInteraction: true}
      );
    };

    return Clearbit;

  })();

  providePlugin('Clearbit', Clearbit);

  

  

}).call(this);
