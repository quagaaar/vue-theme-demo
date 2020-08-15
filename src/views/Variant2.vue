<template>
    <div>
        <h2>Variant 2</h2>
        <nav>
            <ul>
                <li><router-link :to="{name: 'Variant2Items'}">Items</router-link></li>
                <li><router-link :to="{name: 'Variant2Volume'}">Volume</router-link></li>
            </ul>
        </nav>
        <router-view />
    </div>
</template>
