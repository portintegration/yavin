import ManifestBase from 'navi-core/navi-visualization-manifests/base';

export default class extends ManifestBase {
  name = 'apex-line';

  niceName = 'apex-line';

  icon = 'line-chart';

  /**
   * Decides whether visualization type is valid given request
   *
   * @method typeIsValid
   * @param {Object} request - request object
   * @return {Boolean} - visualization type is valid
   */
  typeIsValid(request) {
    return this.hasMetric(request) && !this.hasSingleTimeBucket(request);
  }
}