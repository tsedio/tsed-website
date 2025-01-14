// https://vitepress.dev/guide/custom-theme
import type {Theme} from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./styles/global.css";
import ApiAnchorQuery from "./molecules/api-anchor/ApiAnchorQuery.vue";
import ApiList from "./molecules/api-list/ApiList.vue";
import GithubContributors from "./organisms/github-contributors/GithubContributors.vue";
import LazyLoadObserver from "./directives/lazyLoadObserver";
import Button from "./molecules/button/Button.vue";
import CodeSandbox from "./molecules/codesandbox/CodeSandbox.vue";
import Projects from "./organisms/projects/Projects.vue";
import Banner from "./molecules/banner/Banner.vue";
import HomeFrameworks from "./organisms/home/HomeFrameworks.vue";
import MessageCircleHeart from "./atoms/svg/MessageCircleHeart.vue";
import Warehouse from "./organisms/warehouse/Warehouse.vue";
import Api from "./organisms/api/Api.vue";
import TeamMembers from "./molecules/teams/TeamMembers.vue";
import TeamMembersItem from "./molecules/teams/TeamMembersItem.vue";

export default {
  extends: DefaultTheme,
  Layout: DefaultTheme.Layout,
  enhanceApp({app}) {
    app.component("Api", Api);
    app.component("ApiList", ApiList);
    app.component("ApiAnchorQuery", ApiAnchorQuery);
    app.component("GithubContributors", GithubContributors);
    app.component("CodeSandbox", CodeSandbox);
    app.component("Projects", Projects);
    app.component("HomeFrameworks", HomeFrameworks);
    app.component("MessageCircleHeart", MessageCircleHeart);
    app.component("TeamMembers", TeamMembers);
    app.component("TeamMembersItem", TeamMembersItem);
    // eslint-disable-next-line vue/no-reserved-component-names
    app.component("Button", Button);
    app.component("Banner", Banner);
    app.component("Warehouse", Warehouse);
    app.directive("lazyload-observer", LazyLoadObserver);
    // Layouts
  }
} satisfies Theme;
