define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  'use strict';
  var SettingsModel = Backbone.Model.extend({
    defaults: {
      'username': null,
      'password': null,
      'auditing': null,
      'default': null,
      'email_server': null,
      'email_username': null,
      'email_password': null,
      'email_from': null,
      'pin_mode': null,
      'restrict_import': null,
      'monitoring': null,
      'influxdb_url': null,
      'influxdb_token': null,
      'influxdb_org': null,
      'influxdb_bucket': null,
      'sso': null,
      'sso_match': null,
      'sso_azure_directory_id': null,
      'sso_azure_app_id': null,
      'sso_azure_app_secret': null,
      'sso_authzero_domain': null,
      'sso_authzero_app_id': null,
      'sso_authzero_app_secret': null,
      'sso_google_key': null,
      'sso_google_email': null,
      'sso_duo_host': null,
      'sso_duo_token': null,
      'sso_duo_secret': null,
      'sso_duo_mode': null,
      'sso_org': null,
      'sso_saml_url': null,
      'sso_saml_issuer_url': null,
      'sso_saml_cert': null,
      'sso_okta_app_id': null,
      'sso_okta_token': null,
      'sso_okta_mode': null,
      'sso_onelogin_app_id': null,
      'sso_onelogin_id': null,
      'sso_onelogin_secret': null,
      'sso_onelogin_mode': null,
      'sso_jumpcloud_secret': null,
      'sso_radius_host': null,
      'sso_radius_secret': null,
      'client_reconnect': null,
      'drop_permissions': null,
      'ipv6': null,
      'sso_cache': null,
      'sso_client_cache': null,
      'sso_yubico_client': null,
      'sso_yubico_secret': null,
      'public_address': null,
      'public_address6': null,
      'routed_subnet6': null,
      'routed_subnet6_wg': null,
      'reverse_proxy': null,
      'theme': null,
      'server_port': null,
      'server_cert': null,
      'server_key': null,
      'acme_domain': null,
      'cloud_provider': null,
      'route53_region': null,
      'route53_zone': null,
      'oracle_user_ocid': null,
      'oracle_public_key': null,
      'us_east_1_access_key': null,
      'us_east_1_secret_key': null,
      'us_east_2_access_key': null,
      'us_east_2_secret_key': null,
      'us_west_1_access_key': null,
      'us_west_1_secret_key': null,
      'us_west_2_access_key': null,
      'us_west_2_secret_key': null,
      'us_gov_west_1_access_key': null,
      'us_gov_west_1_secret_key': null,
      'eu_west_1_access_key': null,
      'eu_west_1_secret_key': null,
      'eu_west_2_access_key': null,
      'eu_west_2_secret_key': null,
      'eu_central_1_access_key': null,
      'eu_central_1_secret_key': null,
      'ca_central_1_access_key': null,
      'ca_central_1_secret_key': null,
      'ap_northeast_1_access_key': null,
      'ap_northeast_1_secret_key': null,
      'ap_northeast_2_access_key': null,
      'ap_northeast_2_secret_key': null,
      'ap_southeast_1_access_key': null,
      'ap_southeast_1_secret_key': null,
      'ap_southeast_2_access_key': null,
      'ap_southeast_2_secret_key': null,
      'ap_south_1_access_key': null,
      'ap_south_1_secret_key': null,
      'sa_east_1_access_key': null,
      'sa_east_1_secret_key': null
    },
    url: function() {
      return '/settings';
    },
    isNew: function() {
      return false;
    }
  });

  return SettingsModel;
});
