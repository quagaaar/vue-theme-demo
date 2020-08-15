<template>
    <div>
        <h2>Variant 1</h2>
        <nav>
            <ul>
                <li><router-link :to="{name: 'Variant1Items'}">Items</router-link></li>
                <li><router-link :to="{name: 'Variant1Volume'}">Volume</router-link></li>
            </ul>
        </nav>
        <router-view />
    </div>
</template>
