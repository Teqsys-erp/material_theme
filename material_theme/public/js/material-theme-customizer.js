frappe.provide("material.theme");

$(document).on("toolbar_setup", function () {
    const root = document.documentElement;
    let theme_mode = root.getAttribute("data-theme-mode");
    if (theme_mode !== "material") {
        return;
    }
    // Set your desired color here
    applyMaterialTheme("#c00007");
});

function applyMaterialTheme(SelectedColor) {
    var r = document.querySelector(':root');
    const theme = themeFromSourceColor(argbFromHex(SelectedColor), [
        {
            name: "custom-1",
            value: argbFromHex(SelectedColor),
            blend: true,
        },
    ]);
    applyTheme(theme, { target: document.body });
    const color = hexFromArgb(theme.schemes.light.primary);
    r.style.setProperty('--primary', color);
}
