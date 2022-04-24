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

### Event bus

In the latest NUXT, any component in a page can emit an event and any other component can listen to it by default. To emit an event,

```js
this.$nuxt.$emit("my-custom-event");
this.$nuxt.$emit("my-custom-event-with-value", 100); // We can pass the value
```

And to capture an event,

```js
mounted() {
   this.$nuxt.$on('my-custom-event', () => {
    // Your call back function
   })
   this.$nuxt.$on('my-custom-event-with-value', (value) => {
    // Read the passed value
     console.log(value)
   })
}
```

:warning: Event bus is easy to use but it has a critical downside–it's hard to manage and keep track of when the project grows. I recommend using it in frugality only for your personal sites or experiments. For production-level app, it is a best practice to use the [vuex](https://vuex.vuejs.org/)/[store](https://nuxtjs.org/docs/directory-structure/store/) so that all components are consuming state from one source of truth.
