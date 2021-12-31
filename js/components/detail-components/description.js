export default {
    props: {
        desc: {
            type: String,
        },
        tags: {
            type: Array,
        },
    },
    template: `
    <div class="col-lg-5 position-sticky">
        <h2>Concept</h2>
        <p class="text-muted">{{desc}}</p>
        <div class="p-4 bg-light mb-5">
            <ul class="list-unstyled mb-0">
                <li class="d-flex">
                    <h6 class="mb-0">Tags:</h6>
                    <p class="ml-3 text-muted mb-0">
                        <component :is="joinTags"></component>
                    </p>
                </li>
            </ul>
        </div>
        <h2 class="h3 mb-4">Contact Me</h2>
        <ul class="list-inline space-below">
            <li class="list-inline-item">
                <a 
                    class="reset-anchor social-share-link instagram" 
                    href="https://www.instagram.com/mariaescribe/" 
                    target="blank"
                >
                    <i class="fab fa-instagram mr-2"></i>Instagram
                </a>
            </li>
            <li class="list-inline-item">
                <a 
                    class="reset-anchor social-share-link linkedin" 
                    href="https://www.linkedin.com/in/mariaescribe/" 
                    target="blank"
                >
                    <i class="fab fa-linkedin mr-2"></i>LinkedIn
                </a>
            </li>
            <li class="list-inline-item">
                <a 
                    class="reset-anchor social-share-link behance" 
                    href="https://www.behance.net/mariaescribe" 
                    target="blank"
                >
                <i class="fab fa-behance mr-2"></i>Behance
                </a>
            </li>
            <li class="list-inline-item">
                <a 
                    class="reset-anchor social-share-link envelope" 
                    href="mailto:mariaescribemails@gmail.com"
                >
                    <i class="fas fa-envelope mr-2"></i>Mail
                </a>
            </li>
        </ul>
    </div>
    `,
    computed: {
        joinTags: function () {
            let tagsButtonsTemplate = this.tags
                .map((tag) => {
                    /**
                     * The link variable has to match with the paths available in the routes
                     */
                    let link = this.tagLink(tag);
                    let isLinkValid = this.verifyRoutes(`/${link}`);

                    return `<router-link class="reset-anchor" to="/${
                        isLinkValid ? link : ""
                    }">${tag}</router-link>`;
                })
                .join(", ");

            tagsButtonsTemplate = `<span>${tagsButtonsTemplate}</span>`;

            return {
                template: tagsButtonsTemplate,
            };
        },
    },
    methods: {
        tagLink: function (tagString) {
            return tagString.toLowerCase().split(" ").join("-");
        },
        verifyRoutes: function (link) {
            return this.$router.options.routes.some((route) => {
                return route.path === link;
            });
        },
    },
};
