import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

const Payload = {
  source: 'bardOne',
  tables: [
    {
      name: 'tableName',
      description: 'Table Description',
      longName: 'tableLongName',
      category: 'General',
      timeGrains: [
        {
          name: 'day',
          description: 'The tableName day grain',
          metrics: [
            {
              category: 'category',
              name: 'metricOne',
              longName: 'Metric One',
              uri: 'https://metric-one-url',
              type: 'number'
            },
            {
              category: 'category',
              name: 'metricFour',
              longName: 'Metric Four',
              uri: 'https://metric-four-url',
              type: 'money',
              parameters: {
                currency: {
                  type: 'dimension',
                  dimensionName: 'displayCurrency',
                  defaultValue: 'USD'
                },
                format: {
                  type: 'dimension',
                  dimensionName: 'displayFormat',
                  defaultValue: 'none'
                }
              }
            }
          ],
          retention: 'P24M',
          longName: 'Day',
          dimensions: [
            {
              category: 'categoryOne',
              name: 'dimensionOne',
              longName: 'Dimension One',
              uri: 'https://host:port/namespace/dimensions/dimensionOne',
              cardinality: '10',
              datatype: 'text'
            },
            {
              category: 'categoryTwo',
              name: 'dimensionTwo',
              longName: 'Dimension Two',
              uri: 'https://host:port/namespace/dimensions/dimensionTwo',
              cardinality: '5',
              fields: [
                {
                  name: 'foo',
                  description: 'bar'
                }
              ],
              datatype: 'text'
            },
            {
              category: 'dateCategory',
              name: 'dimensionThree',
              longName: 'Dimension Three',
              uri: 'https://host:port/namespace/dimensions/dimensionThree',
              cardinality: '50000',
              datatype: 'date'
            }
          ]
        },
        {
          name: 'month',
          description: 'The tableName month grain',
          metrics: [
            {
              category: 'category',
              name: 'metricOne',
              longName: 'Metric One',
              uri: 'https://metric-one-url',
              type: 'number'
            },
            {
              category: 'category',
              name: 'metricTwo',
              longName: 'Metric Two',
              uri: 'https://metric-two-url',
              type: 'money',
              parameters: {
                currency: {
                  type: 'dimension',
                  dimensionName: 'displayCurrency',
                  defaultValue: 'USD'
                }
              }
            }
          ],
          retention: 'P24M',
          longName: 'MONTH',
          dimensions: [
            {
              category: 'categoryOne',
              name: 'dimensionOne',
              longName: 'Dimension One',
              uri: 'https://host:port/namespace/dimensions/dimensionOne',
              cardinality: '10',
              datatype: 'text'
            },
            {
              category: 'categoryTwo',
              name: 'dimensionTwo',
              longName: 'Dimension Two',
              uri: 'https://host:port/namespace/dimensions/dimensionTwo',
              cardinality: '5',
              datatype: 'text',
              fields: [
                {
                  name: 'foo',
                  description: 'bar'
                }
              ]
            },
            {
              category: 'dateCategory',
              name: 'dimensionThree',
              longName: 'Dimension Three',
              uri: 'https://host:port/namespace/dimensions/dimensionThree',
              cardinality: '50000',
              datatype: 'date'
            }
          ]
        }
      ]
    },
    {
      name: 'secondTable',
      longName: 'Second Table',
      description: "Second table's description",
      category: 'Special',
      timeGrains: [
        {
          name: 'day',
          description: 'The secondTable day grain',
          longName: 'Day',
          retention: 'P24M',
          metrics: [
            {
              category: 'category',
              name: 'metricFive',
              longName: 'Metric Five',
              uri: 'https://metric-five-url',
              type: 'number',
              metricFunctionId: 'metricFunctionId take precedence over parameters',
              parameters: {
                whiteNoise: {
                  type: 'dimension',
                  dimensionName: 'displayCurrency',
                  defaultValue: 'USD'
                }
              }
            },
            {
              category: 'category',
              name: 'metricTwo',
              longName: 'Metric Two',
              uri: 'https://metric-two-url',
              type: 'money',
              parameters: {
                currency: {
                  type: 'dimension',
                  dimensionName: 'displayCurrency',
                  defaultValue: 'USD'
                }
              }
            }
          ],
          dimensions: [
            {
              category: 'categoryTwo',
              name: 'dimensionTwo',
              longName: 'Dimension Two',
              uri: 'https://host:port/namespace/dimensions/dimensionTwo',
              cardinality: '5',
              datatype: 'text',
              fields: [
                {
                  name: 'foo',
                  description: 'bar'
                }
              ]
            },
            {
              category: 'dateCategory',
              name: 'dimensionThree',
              longName: 'Dimension Three',
              uri: 'https://host:port/namespace/dimensions/dimensionThree',
              cardinality: '50000',
              datatype: 'date'
            }
          ]
        },
        {
          name: 'week',
          description: 'The secondTable week grain',
          longName: 'Week',
          retention: 'P24M',
          metrics: [
            {
              category: 'category',
              name: 'metricOne',
              longName: 'Metric One',
              uri: 'https://metric-one-url',
              type: 'number'
            },
            {
              category: 'category',
              name: 'metricThree',
              longName: 'Metric Three',
              uri: 'https://metric-three-url',
              type: 'number'
            }
          ],
          dimensions: [
            {
              category: 'categoryTwo',
              name: 'dimensionTwo',
              longName: 'Dimension Two',
              uri: 'https://host:port/namespace/dimensions/dimensionTwo',
              cardinality: '5',
              datatype: 'text',
              fields: [
                {
                  name: 'foo',
                  description: 'bar'
                }
              ]
            },
            {
              category: 'dateCategory',
              name: 'dimensionThree',
              longName: 'Dimension Three',
              uri: 'https://host:port/namespace/dimensions/dimensionThree',
              cardinality: '50000',
              datatype: 'date'
            }
          ]
        }
      ]
    }
  ]
};
// list of table objects, with table->timegrains->dimensions+metrics
const Tables = [
  {
    cardinality: 'MEDIUM',
    category: 'General',
    description: 'Table Description',
    dimensionIds: ['dimensionOne', 'dimensionTwo'],
    id: 'tableName',
    metricIds: ['metricOne', 'metricFour', 'metricTwo'],
    name: 'tableLongName',
    source: 'bardOne',
    timeDimensionIds: ['dimensionThree'],
    timeGrainIds: ['day', 'month']
  },
  {
    cardinality: 'MEDIUM',
    category: 'Special',
    description: "Second table's description",
    dimensionIds: ['dimensionTwo'],
    id: 'secondTable',
    metricIds: ['metricFive', 'metricTwo', 'metricOne', 'metricThree'],
    name: 'Second Table',
    source: 'bardOne',
    timeDimensionIds: ['dimensionThree'],
    timeGrainIds: ['day', 'week']
  }
];

const Dimensions = [
  {
    cardinality: 'SMALL',
    category: 'categoryOne',
    id: 'dimensionOne',
    name: 'Dimension One',
    source: 'bardOne',
    type: 'field',
    valueType: 'text',
    fields: undefined,
    storageStrategy: null,
    partialData: true
  },
  {
    cardinality: 'SMALL',
    category: 'categoryTwo',
    id: 'dimensionTwo',
    name: 'Dimension Two',
    source: 'bardOne',
    type: 'field',
    valueType: 'text',
    fields: [
      {
        name: 'foo',
        description: 'bar'
      }
    ],
    storageStrategy: null,
    partialData: true
  }
];

const TimeDimensions = [
  {
    cardinality: 'MEDIUM',
    category: 'dateCategory',
    id: 'dimensionThree',
    name: 'Dimension Three',
    source: 'bardOne',
    type: 'field',
    fields: undefined,
    valueType: 'date',
    storageStrategy: null,
    partialData: true
  }
];

const Metrics = [
  {
    category: 'category',
    id: 'metricOne',
    columnFunctionId: undefined,
    name: 'Metric One',
    partialData: true,
    source: 'bardOne',
    type: 'field',
    valueType: 'number'
  },
  {
    category: 'category',
    id: 'metricFour',
    columnFunctionId: 'currency|format',
    name: 'Metric Four',
    partialData: true,
    source: 'bardOne',
    type: 'field',
    valueType: 'money'
  },
  {
    category: 'category',
    id: 'metricTwo',
    columnFunctionId: 'currency',
    name: 'Metric Two',
    partialData: true,
    source: 'bardOne',
    type: 'field',
    valueType: 'money'
  },
  {
    category: 'category',
    id: 'metricFive',
    columnFunctionId: 'metricFunctionId take precedence over parameters',
    name: 'Metric Five',
    partialData: true,
    source: 'bardOne',
    type: 'field',
    valueType: 'number'
  },
  {
    category: 'category',
    id: 'metricThree',
    columnFunctionId: undefined,
    name: 'Metric Three',
    partialData: true,
    source: 'bardOne',
    type: 'field',
    valueType: 'number'
  }
];

const ParameterConvertToMetricFunction = [
  {
    _parametersPayload: [
      {
        _localValues: undefined,
        source: 'bardOne',
        defaultValue: 'USD',
        description: undefined,
        expression: 'dimension:displayCurrency',
        id: 'currency',
        name: 'currency',
        type: 'ref',
        valueType: 'TEXT'
      },
      {
        _localValues: undefined,
        source: 'bardOne',
        defaultValue: 'none',
        description: undefined,
        expression: 'dimension:displayFormat',
        id: 'format',
        name: 'format',
        type: 'ref',
        valueType: 'TEXT'
      }
    ],
    description: '',
    id: 'currency|format',
    name: '',
    source: 'bardOne'
  },
  {
    _parametersPayload: [
      {
        _localValues: undefined,
        source: 'bardOne',
        defaultValue: 'USD',
        description: undefined,
        expression: 'dimension:displayCurrency',
        id: 'currency',
        name: 'currency',
        type: 'ref',
        valueType: 'TEXT'
      }
    ],
    description: '',
    id: 'currency',
    name: '',
    source: 'bardOne'
  }
];

let Serializer;

module('Unit | Serializer | metadata/bard', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    Serializer = this.owner.lookup('serializer:metadata/bard');
  });

  test('normalize `everything` with metric legacy `parameters`', function(assert) {
    assert.deepEqual(
      Serializer.normalize('everything', Payload),
      {
        metrics: Metrics,
        dimensions: Dimensions,
        timeDimensions: TimeDimensions,
        tables: Tables,
        columnFunctions: ParameterConvertToMetricFunction
      },
      'One column function is created for all metrics with only the currency parameter'
    );
  });

  test('normalize `everything` with column functions', function(assert) {
    const MetricFunctionIdsPayload = {
      source: 'bardOne',
      metricFunctions: [
        {
          id: 'moneyMetric',
          name: 'Mo Money',
          description: 'Mo Problems',
          arguments: {
            currency: {
              type: 'enum',
              defaultValue: null,
              values: ['USD', 'CAN'],
              description: 'Currency Parameter'
            }
          }
        }
      ],
      tables: [
        {
          name: 'tableName',
          description: 'Table Description',
          longName: 'tableLongName',
          category: 'General',
          timeGrains: [
            {
              name: 'day',
              description: 'The tableName day grain',
              metrics: [
                {
                  category: 'category',
                  name: 'metricOne',
                  longName: 'Metric One',
                  uri: 'https://metric-one-url',
                  type: 'number'
                },
                {
                  category: 'category',
                  name: 'metricTwo',
                  longName: 'Metric Two',
                  uri: 'https://metric-two-url',
                  type: 'money',
                  metricFunctionId: 'moneyMetric'
                }
              ],
              retention: 'P24M',
              longName: 'Day',
              dimensions: []
            }
          ]
        }
      ]
    };

    const { metrics, columnFunctions } = Serializer.normalize('everything', MetricFunctionIdsPayload);

    assert.deepEqual(
      metrics,
      [
        {
          category: 'category',
          id: 'metricOne',
          name: 'Metric One',
          valueType: 'number',
          source: 'bardOne',
          columnFunctionId: undefined,
          type: 'field',
          partialData: true
        },
        {
          category: 'category',
          id: 'metricTwo',
          name: 'Metric Two',
          valueType: 'money',
          source: 'bardOne',
          columnFunctionId: 'moneyMetric',
          type: 'field',
          partialData: true
        }
      ],
      'The metric with parameters has a columnFunctionId provided by the raw data'
    );

    assert.deepEqual(
      columnFunctions,
      [
        {
          _parametersPayload: [
            {
              _localValues: ['USD', 'CAN'],
              defaultValue: null,
              description: 'Currency Parameter',
              expression: 'self',
              id: 'currency',
              name: 'currency',
              type: 'ref',
              valueType: 'TEXT',
              source: 'bardOne'
            }
          ],
          description: 'Mo Problems',
          id: 'moneyMetric',
          name: 'Mo Money',
          source: 'bardOne'
        }
      ],
      'Raw column functions are normalized correctly'
    );
  });

  test('_constructDimension', function(assert) {
    const rawDimension = {
      category: 'categoryOne',
      name: 'dimensionOne',
      longName: 'Dimension One',
      uri: 'https://host:port/namespace/dimensions/dimensionOne',
      cardinality: '10',
      fields: [
        {
          name: 'foo',
          description: 'bar'
        },
        {
          name: 'baz',
          description: 'bang'
        }
      ],
      datatype: 'text'
    };
    const source = 'bardOne';

    assert.deepEqual(
      Serializer._constructDimension(rawDimension, source),
      {
        id: rawDimension.name,
        name: rawDimension.longName,
        category: rawDimension.category,
        valueType: rawDimension.datatype,
        cardinality: 'SMALL',
        type: 'field',
        storageStrategy: null,
        fields: rawDimension.fields,
        source,
        partialData: true
      },
      'New dimension is constructed correctly normalized'
    );
  });

  test('_constructMetric', function(assert) {
    const source = 'bardOne';

    const rawMetric = {
      category: 'categoryOne',
      name: 'metricOne',
      longName: 'Metric One',
      uri: 'https://metric-one-url',
      type: 'number',
      columnFunctionId: 'money'
    };

    assert.deepEqual(
      Serializer._constructMetric(rawMetric, source),
      {
        id: rawMetric.name,
        name: rawMetric.longName,
        category: rawMetric.category,
        valueType: rawMetric.type,
        source,
        columnFunctionId: rawMetric.metricFunctionId,
        type: 'field',
        partialData: true
      },
      'Metric is constructed correctly with no new column function id or parameter'
    );
  });
});
