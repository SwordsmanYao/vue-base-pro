export function getEnv(name) {
  return process.env[`VUE_APP_${name}`];
}
