import { ValidationProvider } from 'vee-validate';

export default function (component) {
  return {
    name: `${component.name}WithValidation`,
    model: component.model,
    props: {
      ...ValidationProvider.options.props, // validation props
      ...component.props, // component props
    },
    computed: {
      validationProps() {
        return {
          ...this.$props,
          slim: true,
        };
      },
    },
    methods: {
      slotProps(validationProps) {
        return {
          ...this.$attrs,
          ...this.$props,
          error: validationProps.errors[0],
          isRequired: validationProps.required,
        };
      },
    },
    render(h) {
      return h(ValidationProvider, {
        props: this.validationProps,
        scopedSlots: {
          default: (validationProps) => {
            return h(
              component,
              {
                props: this.slotProps(validationProps),
                on: this.$listeners,
                scopedSlots: this.$scopedSlots, // pass named slots to component
              },
              this.$slots.default
            );
          },
        },
      });
    },
  };
}
