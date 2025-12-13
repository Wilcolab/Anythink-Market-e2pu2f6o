function toCamelCase(str) {
      if (typeof str !== "string") return "";

        return str
            .toLowerCase()
                .split(/[_\-\s]+/)
                    .map((word, index) =>
                          index === 0
                                  ? word
                                          : word.charAt(0).toUpperCase() + word.slice(1)
                                              )
                                                  .join("");
}