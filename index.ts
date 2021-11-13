type TOutput = Record<string, unknown>;
type TInputObject = Record<string, any>;
interface IOptions {
  flattenArray?: boolean;
}

function _isObject(input: any) {
  return typeof input === 'object' && !Array.isArray(input) && input !== null;
}

function flattenObject(obj: TInputObject = {}, inputOptions: IOptions = {}): TOutput {
  const options = {
    flattenArray: true,
    ...inputOptions,
  };

  if (!obj) return {};

  return Object
    .keys(obj)
    .reduce((result: Record<string, unknown>, key) => {
      const isObject = _isObject(obj[key]);
      const isArray = Array.isArray(obj[key]);

      if (isObject || (options.flattenArray === true && isArray)) {
        const flatObject = flattenObject(obj[key], options);

        Object.entries(flatObject).forEach(([name, value]) => {
          result[`${key}.${name}`] = value;
        });

        return result;
      }

      result[key] = obj[key];

      return result;
    }, {});
}

export default flattenObject;
