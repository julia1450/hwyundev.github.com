<template>
    <div>
        <Introduce id="page-about"/>
        <Skill id="page-skill"/>
        <Works id="page-works"/>
        <Contact id="page-contact"/>
    </div>
</template>

<script>
import Introduce from './Introduce.vue'
import Skill from './Skill.vue'
import Works from './Works.vue'
import Contact from './Contact.vue'

export default {
    name: 'AppMain',
    components: {
        Introduce,
        Skill,
        Works,
        Contact
    }
}
</script>