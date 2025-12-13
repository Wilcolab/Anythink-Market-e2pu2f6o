/**
 *  * Converts a string into camelCase format.
  * @param {string} input
   * @returns {string}
    * @throws {Error} If input is not a valid string
     */
     function toCamelCase(input) {
       if (input === null || input === undefined) {
           throw new Error("Input cannot be null or undefined");
             }

               if (typeof input !== "string") {
                   throw new Error("Input must be a string");
                     }

                       const trimmed = input.trim();
                         if (trimmed === "") return "";

                           const words = trimmed.split(/[_\-\s]+/);

                             const result = words
                                 .map((word, index) => {
                                       const lower = word.toLowerCase();
                                             return index === 0
                                                     ? lower
                                                             : lower.charAt(0).toUpperCase() + lower.slice(1);
                                                                 })
                                                                     .join("");

                                                                       if (/^\d/.test(result)) {
                                                                           throw new Error("Resulting camelCase string cannot start with a number");
                                                                             }

                                                                               return result;
                                                                               }

                                                                               /**
                                                                                * Converts a string into dot.case format.
                                                                                 * @param {string} input
                                                                                  * @returns {string}
                                                                                   */
                                                                                   function toDotCase(input) {
                                                                                     if (input === null || input === undefined) {
                                                                                         throw new Error("Input cannot be null or undefined");
                                                                                           }

                                                                                             if (typeof input !== "string") {
                                                                                                 throw new Error("Input must be a string");
                                                                                                   }

                                                                                                     return input
                                                                                                         .trim()
                                                                                                             .toLowerCase()
                                                                                                                 .split(/[_\-\s]+/)
                                                                                                                     .join(".");
                                                                                                                     }
 