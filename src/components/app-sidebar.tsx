import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import useIntlMessage from '@/hooks/useIntlMessage';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

export function AppSidebar() {
	// Menu items.
	const message = useIntlMessage();

	const pathname = window.location.pathname;
	const items = useMemo(
		() => [
			{
				title: message.Home,
				url: '/',
			},
			{
				title: message.Production_Server,
				url: '#',
				isDisabled: true,
			},
			{
				title: message.Modal_Data,
				url: '/down',
			},
			{
				title: message.Contact_US,
				url: '#',
				isDisabled: true,
			},
		],
		[message],
	);

	return (
		<Sidebar className="lg:hidden">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton size="lg" asChild>
										<a
											href={item.url}
											className={cn(
												pathname === item.url ? 'text-theme-primary' : '',
												item.isDisabled ? 'opacity-45 cursor-not-allowed' : '',
											)}
										>
											<span className="text-base">{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
