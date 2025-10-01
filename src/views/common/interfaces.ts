export type EssenceName = "example" | "test"
export type PageName = "tests" | "examples"
export interface Crumb {
    title: string
    href: string
}
export type PageNavigatorItem = {
    pageName: PageName
    title: string
}