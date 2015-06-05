var vendorSources = [
  'vendor/loader.js',
  'node_modules/rsvp/dist/rsvp.js',
  'vendor/**/*.js',
  'bower_components/UUID.js/dist/uuid.core.js',
  'bower_components/kamino.js/lib/kamino.js',
  'bower_components/MessageChannel.js/lib/message_channel.js'
];

module.exports = {
  amd: {
    src: ['tmp/amd/**/*.js'],
    dest: 'dist/oasis.amd.js'
  },

  oracle_amd: {
    src: ['tmp/amd/**/*.js'],
    dest: 'dist/omc_konnect.amd.js'
  },

  test: {
    src: vendorSources.concat([
      'dist/oasis.amd.js',
      'tmp/test/**/*.js'
    ]),
    dest: 'tmp/public/test.js'
  },

  browser: {
    src: vendorSources.concat([
      'dist/oasis.amd.js'
    ]),
    dest: 'dist/oasis.js',
    options: {
      footer: "self.Oasis = requireModule('oasis'); self.oasis = new self.Oasis(); self.oasis.autoInitializeSandbox();"       
    }
  },

  oracle_browser: {
    src: vendorSources.concat([
      'dist/omc_konnect.amd.js'
    ]),
    dest: 'dist/omc_konnect.js',
    options: {
      footer: "self.OmcKonnect = requireModule('oasis'); self.konnect = new self.OmcKonnect(); self.konnect.autoInitializeSandbox();"       
    }
  }

};
