import { Model } from 'sequelize';

export class SequelizeUtilities {
  static convertBooleanAttributesToString(model: Model) {
    for (const [key, value] of Object.entries(model.get())) {
      if(typeof value == 'boolean') {
        model.setDataValue(key, value.toString());
      }
    }
  }
}
