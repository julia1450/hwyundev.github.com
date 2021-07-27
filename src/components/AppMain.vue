<template>
    <div>
        <IntroduceApp id="page-about"/>
        <SkillApp id="page-skill"/>
        <WorksApp id="page-works"/>
        <ContactApp id="page-contact"/>
    </div>
</template>

<script>
import IntroduceApp from './IntroduceApp.vue'
import SkillApp from './SkillApp.vue'
import WorksApp from './WorksApp.vue'
import ContactApp from './ContactApp.vue'

export default {
    name: 'AppMain',
    components: {
        IntroduceApp,
        SkillApp,
        WorksApp,
        ContactApp
    }
}
</script>