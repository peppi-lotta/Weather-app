'use strict';

/**
 * horizon controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::horizon.horizon', ({ strapi }) =>  ({

  // Method 2: Wrapping a core action (leaves core logic in place)
  async findOne(ctx) {
    // some custom logic here
    ctx.query.populate = {
        Bottom: {},
        Middle: {},
        Top: {}
    };

    // Calling the default core action
    const { data } = await super.findOne(ctx);
    console.log(data)
    return { data };
  },

  async find(ctx) {
    // some custom logic here
    ctx.query.populate = {
        Bottom: {},
        Middle: {},
        Top: {}
    };

    var today = new Date();
    var h = checkTime(today.getHours());
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());
    var time = h + ":" + m + ":" + s + ".000"
    console.log(time);

    ctx.query.filters = {
        $and: [
            {
                Starting_time: { $lt: time }
            },
            {
                Ending_time: { $gt: time }
            }
        ]
    };

    // Calling the default core action
    const { data } = await super.find(ctx);
    console.log(data)
    return { data };
  },

}));

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}