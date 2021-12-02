import pglet
from pglet import Message, Nav, Stack, Text, nav


def navs(page):

    def menu_item_expanded(e):
        page.controls.insert(0, Message(value=f'Menu item "{e.data}" was expanded', dismiss=True))
        page.update()


    def menu_item_collapsed(e):
        page.controls.insert(0, Message(value=f'Menu item "{e.data}" was collapsed', dismiss=True))
        page.update()


    def menu_item_changed(e):
        page.controls.insert(0, Message(value=f'Menu item was changed to "{nav1.value}"', dismiss=True))
        page.update()


    home_nav = nav.Item(text='Home')
    about_nav = nav.Item(text='About')

    # Projects
    auto_test_data_nav = nav.Item(
            text='Automated Test Data Generation'
            )
    auto_test_auto_nav = nav.Item(
            text='Automated Test Automation'
            )
    site_mon_nav = nav.Item(
            text='Monitoring winstonmyers.com'
            )
    # TODO - Add menu items for auto test app monitoring
    task_mon_nav = nav.Item(
            text='Anonymized Monitoring (TaskWarrior)'
            )
    obsidian_mon_nav = nav.Item(
            text='Multiplatform Monitoring (Obsidian)'
            )
    orgocopter_nav = nav.Item(
            text='Organic Helicopter',
            url='https://organichelicopter.com',
            new_window=True)
    project_nav = nav.Item(
            text='Projects',
            expanded=False,
            items=[
                auto_test_auto_nav,
                auto_test_data_nav,
                site_mon_nav,
                task_mon_nav,
                obsidian_mon_nav,
                orgocopter_nav])

    blog_nav = nav.Item(text='Blog')
    nav_menu = Nav(items=[
        home_nav,
        about_nav,
        project_nav,
        blog_nav
        ])

    return Stack(gap=30, controls=[
        Stack(controls=[
            Text("winstonmyers.com", size="xLarge"),
            nav_menu
            ])
        ])

def main(page):

    page.title = 'winston.myers - IT Nerd'
    page.update()
    page.add(navs(page))

pglet.app("winstonmyers_dot_com", target = main)
