// .pnpmfile.cjs
module.exports = {
  hooks: {
    readPackage(pkg) {
      // Force ts-essentials to version 10.0.2
      if (pkg.dependencies && pkg.dependencies['ts-essentials']) {
        pkg.dependencies['ts-essentials'] = '10.0.2';
      }
      if (pkg.devDependencies && pkg.devDependencies['ts-essentials']) {
        pkg.devDependencies['ts-essentials'] = '10.0.2';
      }
      if (pkg.optionalDependencies && pkg.optionalDependencies['ts-essentials']) {
        pkg.optionalDependencies['ts-essentials'] = '10.0.2';
      }

      // Force @lezer/common to version 1.2.1
      if (pkg.dependencies && pkg.dependencies['@lezer/common']) {
        pkg.dependencies['@lezer/common'] = '1.2.1';
      }
      if (pkg.devDependencies && pkg.devDependencies['@lezer/common']) {
        pkg.devDependencies['@lezer/common'] = '1.2.1';
      }

      return pkg;
    },
  },
};
