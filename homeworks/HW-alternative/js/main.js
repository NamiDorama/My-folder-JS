// alternative HW after lesson 20.02

const dom = {
  "children": [
    {
      "value": "a",
      "children": [
        {
          "value": "a_0",
          "children": [
            {
              "value": "a_0_0",
              "children": [
                {
                  "value": "a_0_0_0",
                  "children": []
                },
                {
                  "value": "a_0_0_1",
                  "children": []
                },
                {
                  "value": "a_0_0_2",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "value": "a_1",
          "children": [
            {
              "value": "a_1_0",
              "children": [
                {
                  "value": "a_1_0_0",
                  "children": []
                },
                {
                  "value": "a_1_0_1",
                  "children": []
                },
                {
                  "value": "a_1_0_2",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "value": "b",
      "children": [
        {
          "value": "b_0",
          "children": [
            {
              "value": "b_0_0",
              "children": [
                {
                  "value": "b_0_0_0",
                  "children": []
                },
                {
                  "value": "b_0_0_1",
                  "children": []
                },
                {
                  "value": "b_0_0_2",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "value": "b_1",
          "children": [
            {
              "value": "b_1_0",
              "children": [
                {
                  "value": "b_1_0_0",
                  "children": []
                },
                {
                  "value": "b_1_0_1",
                  "children": []
                },
                {
                  "value": "b_1_0_2",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "value": "c",
      "children": [
        {
          "value": "c_0",
          "children": [
            {
              "value": "c_0_0",
              "children": [
                {
                  "value": "c_0_0_0",
                  "children": []
                },
                {
                  "value": "c_0_0_1",
                  "children": []
                },
                {
                  "value": "c_0_0_2",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "value": "c_1",
          "children": [
            {
              "value": "c_1_0",
              "children": [
                {
                  "value": "c_1_0_0",
                  "children": []
                },
                {
                  "value": "c_1_0_1",
                  "children": []
                },
                {
                  "value": "c_1_0_2",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "value": "root"
};

function getValue(obj) {
  for (let key in obj) {
    if (key === 'children' || typeof obj[key] === 'object') {
      getValue(obj[key]);
    } else {
      console.log('value is: ', obj[key]);
    };
  };
};

getValue(dom);

