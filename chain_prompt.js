/**
 *  * Converts a string into kebab-case format.
  * @param {string} input
   * @returns {string}
    * @throws {Error} If input is invalid
     */
     function toKebabCase(input) {
       if (input === null || input === undefined) {
           throw new Error("Input cannot be null or undefined");
             }

               if (typeof input !== "string") {
                   throw new Error("Input must be a string");
                     }

                       const trimmed = input.trim();
                         if (trimmed === "") return "";

                           return trimmed
                               .toLowerCase()
                                   .split(/[_\-\s]+/)
                                       .join("-");
                                       }

                                       // Example usages:
                                       // toKebabCase("Hello World") → "hello-world"
                                       // toKebabCase("user_name") → "user-name"
                                       // toKebabCase("  multiple   spaces ") → "multiple-spaces"
