<script setup>
import { ref } from 'vue';

import Logo from '../assets/img/smiles/Logo.vue';
import VeryWicked from '../assets/img/smiles/VeryWicked.vue';
import Wicked from '../assets/img/smiles/Wicked.vue';
import Normal from '../assets/img/smiles/Normal.vue';
import Glad from '../assets/img/smiles/Glad.vue';
import Hapy from '../assets/img/smiles/Hapy.vue';

const smiles = [
  { id: 1, icon: VeryWicked },
  { id: 2, icon: Wicked },
  { id: 3, icon: Normal },
  { id: 4, icon: Glad },
  { id: 5, icon: Hapy },
];

const form = ref({
  iconService: '',
  iconFood: '',
  iconShow: '',
  comQuality: '',
  chooseBtn: '',
});

const numbers = [
  { id: 1, num: 1 },
  { id: 2, num: 2 },
  { id: 3, num: 3 },
  { id: 4, num: 4 },
  { id: 5, num: 5 },
];

const buttons = [
  { id: 1, title: 'Да' },
  { id: 2, title: 'Нет' },
];
</script>

<template>
  <main
    class="relative flex flex-col justify-center items-center overflow-x-hidden"
  >
    <div class="z-50 bg-white/50 sm:bg-white/80">
      <div class="w-full max-w-lg shadow-lg rounded-lg px-6 md:px-10 py-6">
        <Logo class="mx-auto mb-4" />

        <div class="text-center space-y-1 mb-3">
          <p class="text-3xl font-bold text-center uppercase">Отзыв Гостя</p>

          <div class="text-base text-center space-y-2">
            <input
              id="place"
              type="text"
              placeholder="Имя официанта который вас обслуживает"
              class="rounded-sm border-b-2 border-gray-400 px-4 py-1.5 w-full outline-none bg-white/20 placeholder:text-gray-400"
            />

            <input
              id="place"
              type="text"
              placeholder="Как часто вы у нас бываете?"
              class="rounded-sm border-b-2 border-gray-400 px-4 py-1.5 w-full outline-none bg-white/20"
            />
          </div>
        </div>

        <div class="space-y-8">
          <!-- service -->
          <div class="space-y-6">
            <div class="space-y-1">
              <p class="text-xl text-center">
                Оцените качество и скорость обслуживание
              </p>
              <p class="text-center text-xs">(Закрасьте кружок)</p>
            </div>

            <div class="w-full flex justify-between">
              <div v-for="smile in smiles" :key="smile">
                <component
                  alt="smile"
                  class="cursor-pointer rounded-full w-8 h-8"
                  :is="smile.icon"
                  @click="form.iconService = smile.id"
                  :class="[form.iconService === smile.id ? 'bg-smile' : '']"
                ></component>
              </div>
            </div>
          </div>

          <!-- taste -->
          <div class="space-y-6">
            <div class="space-y-1">
              <p class="text-center text-xl">
                Оцените вкус и качество блюд и напитков
              </p>
              <p class="text-center text-xs">(Закрасьте кружок)</p>
            </div>

            <div class="w-full flex justify-between">
              <div v-for="smile in smiles" :key="smile">
                <component
                  alt="smile"
                  class="cursor-pointer rounded-full w-8 h-8"
                  :is="smile.icon"
                  @click="form.iconFood = smile.id"
                  :class="[form.iconFood === smile.id ? 'bg-smile' : '']"
                ></component>
              </div>
            </div>
          </div>

          <!-- show -->
          <div class="space-y-6">
            <div class="space-y-1">
              <p class="text-center text-xl">
                Понравилась ли вам шоу программа?
              </p>
              <p class="text-center text-xs">(Закрасьте кружок)</p>
            </div>

            <div class="w-full flex justify-between">
              <div v-for="smile in smiles" :key="smile">
                <component
                  alt="smile"
                  class="cursor-pointer rounded-full w-8 h-8"
                  :is="smile.icon"
                  @click="form.iconShow = smile.id"
                  :class="[form.iconShow === smile.id ? 'bg-smile' : '']"
                ></component>
              </div>
            </div>
          </div>

          <!-- about -->
          <div class="space-y-5">
            <div class="space-y-1">
              <label for="place" class="block text-center text-xl"
                >Откуда вы о нас узнали?</label
              >
              <input
                id="place"
                type="text"
                placeholder="кратко"
                class="rounded-sm border-b-2 border-gray-400 px-4 py-1.5 w-full outline-none bg-white/20"
              />
            </div>

            <div class="flex flex-col items-center space-y-3">
              <p class="text-center text-xl">
                Порекомендуете ли Вы нас своим друзьям/знакомым?
              </p>

              <div class="flex font-bold text-xl space-x-4">
                <div
                  v-for="button in buttons"
                  :key="button"
                  @click="form.chooseBtn = button.id"
                  :class="[form.chooseBtn === button.id ? 'text-primary' : '']"
                >
                  <button class="duration-100 hover:scale-125">
                    {{ button.title }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- вернётесь -->
          <div class="space-y-6">
            <div class="space-y-1">
              <p class="text-center text-xl">
                С какой вероятностью от 1 до 5 вы к нам вернётесь?
              </p>
              <p class="text-center text-xs">(Закрасьте кружок)</p>
            </div>

            <div class="w-full flex justify-between text-base">
              <div v-for="number in numbers" :key="number">
                <button
                  @click="form.comQuality = number.id"
                  :class="[form.comQuality === number.id ? 'bg-smile' : '']"
                  class="border border-gray-400 text-gray-500 rounded-full w-9 h-9"
                >
                  {{ number.num }}
                </button>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <!-- contacts -->
            <div class="space-y-1">
              <label for="num" class="block text-center text-xl"
                >Ваши контакты:</label
              >
              <input
                v-mask="'#-#-#'"
                id="num"
                type="number"
                placeholder="+992"
                class="rounded-sm border-b-2 border-gray-400 px-4 py-1.5 w-full outline-none bg-white/20"
              />
            </div>

            <!-- wish -->
            <div class="space-y-1">
              <label for="wish" class="text-center text-xl"
                >Ваши пожелания:</label
              >
              <textarea
                id="wish"
                type="text"
                class="rounded-sm border-b-2 border-gray-400 px-4 pt-2 pb-4 w-full text-lg outline-none bg-white/20"
              />
            </div>
          </div>

          <div class="flex flex-col items-center justify-between space-y-4">
            <!-- socials -->
            <div class="flex flex-col items-start space-y-1 font-bold">
              <a
                target="_blank"
                href="https://www.instagram.com/latina.dushanbe/"
                class="group flex items-center space-x-2"
              >
                <svg
                  class="fill-[#6F7A8B] group-hover:fill-white duration-150"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49617 12.7676C10.9096 12.7676 12.8562 10.8639 12.8562 8.50371C12.8562 6.14355 10.9096 4.23984 8.49617 4.23984C6.08277 4.23984 4.13612 6.14355 4.13612 8.50371C4.13612 10.8639 6.08277 12.7676 8.49617 12.7676ZM8.49617 5.73164C10.0558 5.73164 11.3308 6.9748 11.3308 8.50371C11.3308 10.0326 10.0596 11.2758 8.49617 11.2758C6.93277 11.2758 5.66157 10.0326 5.66157 8.50371C5.66157 6.9748 6.93657 5.73164 8.49617 5.73164ZM2.94081 12.942C2.94081 12.3891 3.39617 11.9475 3.95777 11.9475C4.52318 11.9475 4.97474 12.3928 4.97474 12.942C4.97474 13.4912 4.51938 13.9365 3.95777 13.9365C3.39617 13.9365 2.94081 13.4912 2.94081 12.942ZM0.0530853 11.9326C0.117594 13.2648 0.428757 14.4449 1.42675 15.4172C2.42094 16.3895 3.62764 16.6937 4.98992 16.7605C6.39393 16.8385 10.6022 16.8385 12.0062 16.7605C13.3647 16.6975 14.5714 16.3932 15.5694 15.4209C16.5674 14.4486 16.8747 13.2686 16.943 11.9363C17.0227 10.5633 17.0227 6.44785 16.943 5.0748C16.8785 3.74258 16.5674 2.5625 15.5694 1.59023C14.5714 0.617968 13.3685 0.313671 12.0062 0.246874C10.6022 0.168945 6.39393 0.168945 4.98992 0.246874C3.62764 0.309959 2.42094 0.614256 1.42675 1.59023C0.43255 2.5625 0.121389 3.74258 0.0530853 5.0748C-0.0266018 6.44785 -0.0266018 10.5596 0.0530853 11.9326ZM1.86693 3.60156C2.16291 2.87422 2.7359 2.31387 3.48344 2.0207C4.60286 1.58652 7.25911 1.68672 8.49617 1.68672C9.73322 1.68672 12.3933 1.59023 13.5089 2.0207C14.2526 2.31015 14.8256 2.87051 15.1254 3.60156C15.5694 4.69629 15.4669 7.29394 15.4669 8.50371C15.4669 9.71348 15.5656 12.3148 15.1254 13.4059C14.8294 14.1332 14.2564 14.6936 13.5089 14.9867C12.3895 15.4209 9.73322 15.3207 8.49617 15.3207C7.25911 15.3207 4.59907 15.4172 3.48344 14.9867C2.73969 14.6973 2.1667 14.1369 1.86693 13.4059C1.42295 12.3111 1.52541 9.71348 1.52541 8.50371C1.52541 7.29394 1.42295 4.69258 1.86693 3.60156Z"
                    fill-opacity="0.75"
                  />
                </svg>

                <p class="group-hover:text-white duration-150">
                  latina.dushanbe
                </p>
              </a>

              <a
                href="tel:+992711070707"
                class="group flex items-center space-x-2"
              >
                <svg
                  class="group-hover:stroke-white duration-150 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#6F7A8B"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <p class="group-hover:text-white duration-150">
                  (+992) 711 070 707
                </p>
              </a>
            </div>

            <button
              class="bg-green-600 hover:bg-green-500 duration-100 text-white rounded-full px-16 py-3"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>

    <video
      muted
      :autoplay="true"
      loop
      crossorigin
      playsinline
      data-poster="/video-poster.jpeg"
      class="blur-sm absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <!-- <source size="360" src="/m-life-480.mp4" type="video/mp4" /> -->
      <!-- <source size="480" src="/m-life-720.mp4" type="video/mp4" /> -->
      <source size="720" src="../assets/video/latina.mp4" type="video/mp4" />
    </video>
  </main>
</template>
