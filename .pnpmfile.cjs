// .pnpmfile.cjs
module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.dependencies && pkg.dependencies['ts-essentials']) {
        pkg.dependencies['ts-essentials'] = '10.0.2';
      }
      if (pkg.devDependencies && pkg.devDependencies['ts-essentials']) {
        pkg.devDependencies['ts-essentials'] = '10.0.2';
      }
      if (pkg.optionalDependencies && pkg.optionalDependencies['ts-essentials']) {
        pkg.optionalDependencies['ts-essentials'] = '10.0.2';
      }
      return pkg;
    },
  },
};
