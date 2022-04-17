# Note

This section serves as a note to provide more details about class material.

## week 1

### List of creative portfolio sites

- https://yotammann.info/
- https://clementgrellier.fr/
- https://kimalbrecht.com/vis/#all
- http://www.robinpayot.com/#eaktr
- https://mark-appleby.com/

## week 2

### Using Sass in Nuxt

[Nuxt](https://nuxtjs.org/docs/directory-structure/assets#sass) will automatically guess the file type by its extension and use the appropriate pre-processor loader for webpack. You will still need to install the required loader if you need to use them.

```bash
# npm
 npm install --save-dev sass sass-loader@10
```

```bash
# yarn
 yarn add --dev sass sass-loader@10
```

Once installed, you can use it by choosing from language.

```bash
<style lang="scss" scoped>
# styles here
</style>
```

## week 3
