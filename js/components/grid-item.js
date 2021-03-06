export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    template: `
    <div class="col-lg-4 col-md-6 grid-item mb-4">
        <div class="listing-item">
            <div class="position-relative">
                <router-link class="reset-anchor d-block listing-img-holder is-loading" :to="'/works/' + project.id">
                    <!-- Loading spinner -->
                    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    <!-- End of Loading spinner -->

                    <img class="img-fluid" :src="project.thumbnail" alt="">
                    <p class="mb-0 text-primary small d-flex align-items-center listing-btn"> <span>Look inside</span>
                        <svg class="svg-icon text-primary svg-icon-sm ml-2">
                        <use xlink:href="#arrow-right-1"> </use>
                        </svg>
                    </p>
                </router-link>
            </div>
            <div class="py-3">
                <router-link class="reset-anchor" :to="'/works/' + project.id">
                    <h2 class="h5 listing-item-heading" translate="no">{{project.title}}</h2>
                </router-link>
                <p class="text-small mb-0 listing-item-description">{{project.short_description}}</p>
            </div>
        </div>
    </div>
    `,
};
