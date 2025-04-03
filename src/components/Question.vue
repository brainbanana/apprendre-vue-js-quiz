<template>
    <div class="question">
        <h3>{{ question.question }}</h3>
        <ul>
            <li v-for="(choice, index) in question.choices" :key="choice">
                <label for="'answer${index}'">
                    <input :id="'answer${index}'" type="radio" name="answer">
                    {{ choice }}
                </label>
            </li>
        </ul>
        <button>question suivante</button>
    </div>

</template>

<script setup>
const props = defineProps({
    question: objet
})
</script>


<style>
.question {
    padding-top: 2rem;
}

.question button {
    margin-left: auto;
    display: block;
}
</style>