/*
  Warnings:

  - You are about to drop the `wp_actionscheduler_actions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_actionscheduler_claims` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_actionscheduler_groups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_actionscheduler_logs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_commentmeta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_gla_attribute_mapping_rules` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_gla_budget_recommendations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_gla_merchant_issues` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_gla_shipping_rates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_gla_shipping_times` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_automation_run_logs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_automation_run_subjects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_automation_runs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_automation_triggers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_automation_versions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_automations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_custom_fields` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_dynamic_segment_filters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_feature_flags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_forms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_migrations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_newsletter_links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_newsletter_option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_newsletter_option_fields` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_newsletter_posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_newsletter_segment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_newsletter_templates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_newsletters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_scheduled_task_subscribers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_scheduled_tasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_segments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_sending_queues` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_settings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_statistics_bounces` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_statistics_clicks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_statistics_forms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_statistics_newsletters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_statistics_opens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_statistics_unsubscribes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_statistics_woocommerce_purchases` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_stats_notifications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_subscriber_custom_field` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_subscriber_ips` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_subscriber_segment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_subscriber_tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_subscribers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_user_agents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_mailpoet_user_flags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_options` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_postmeta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_term_relationships` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_term_taxonomy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_termmeta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_terms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_usermeta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_admin_note_actions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_admin_notes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_category_lookup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_customer_lookup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_download_log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_order_addresses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_order_coupon_lookup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_order_operational_data` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_order_product_lookup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_order_stats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_order_tax_lookup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_orders_meta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_product_attributes_lookup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_product_download_directories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_product_meta_lookup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_rate_limits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_reserved_stock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_tax_rate_classes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_wc_webhooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_api_keys` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_attribute_taxonomies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_downloadable_product_permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_order_itemmeta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_order_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_payment_tokenmeta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_payment_tokens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_shipping_zone_locations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_shipping_zone_methods` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_shipping_zones` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_tax_rate_locations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wp_woocommerce_tax_rates` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `wp_actionscheduler_actions`;

-- DropTable
DROP TABLE `wp_actionscheduler_claims`;

-- DropTable
DROP TABLE `wp_actionscheduler_groups`;

-- DropTable
DROP TABLE `wp_actionscheduler_logs`;

-- DropTable
DROP TABLE `wp_commentmeta`;

-- DropTable
DROP TABLE `wp_comments`;

-- DropTable
DROP TABLE `wp_gla_attribute_mapping_rules`;

-- DropTable
DROP TABLE `wp_gla_budget_recommendations`;

-- DropTable
DROP TABLE `wp_gla_merchant_issues`;

-- DropTable
DROP TABLE `wp_gla_shipping_rates`;

-- DropTable
DROP TABLE `wp_gla_shipping_times`;

-- DropTable
DROP TABLE `wp_links`;

-- DropTable
DROP TABLE `wp_mailpoet_automation_run_logs`;

-- DropTable
DROP TABLE `wp_mailpoet_automation_run_subjects`;

-- DropTable
DROP TABLE `wp_mailpoet_automation_runs`;

-- DropTable
DROP TABLE `wp_mailpoet_automation_triggers`;

-- DropTable
DROP TABLE `wp_mailpoet_automation_versions`;

-- DropTable
DROP TABLE `wp_mailpoet_automations`;

-- DropTable
DROP TABLE `wp_mailpoet_custom_fields`;

-- DropTable
DROP TABLE `wp_mailpoet_dynamic_segment_filters`;

-- DropTable
DROP TABLE `wp_mailpoet_feature_flags`;

-- DropTable
DROP TABLE `wp_mailpoet_forms`;

-- DropTable
DROP TABLE `wp_mailpoet_log`;

-- DropTable
DROP TABLE `wp_mailpoet_migrations`;

-- DropTable
DROP TABLE `wp_mailpoet_newsletter_links`;

-- DropTable
DROP TABLE `wp_mailpoet_newsletter_option`;

-- DropTable
DROP TABLE `wp_mailpoet_newsletter_option_fields`;

-- DropTable
DROP TABLE `wp_mailpoet_newsletter_posts`;

-- DropTable
DROP TABLE `wp_mailpoet_newsletter_segment`;

-- DropTable
DROP TABLE `wp_mailpoet_newsletter_templates`;

-- DropTable
DROP TABLE `wp_mailpoet_newsletters`;

-- DropTable
DROP TABLE `wp_mailpoet_scheduled_task_subscribers`;

-- DropTable
DROP TABLE `wp_mailpoet_scheduled_tasks`;

-- DropTable
DROP TABLE `wp_mailpoet_segments`;

-- DropTable
DROP TABLE `wp_mailpoet_sending_queues`;

-- DropTable
DROP TABLE `wp_mailpoet_settings`;

-- DropTable
DROP TABLE `wp_mailpoet_statistics_bounces`;

-- DropTable
DROP TABLE `wp_mailpoet_statistics_clicks`;

-- DropTable
DROP TABLE `wp_mailpoet_statistics_forms`;

-- DropTable
DROP TABLE `wp_mailpoet_statistics_newsletters`;

-- DropTable
DROP TABLE `wp_mailpoet_statistics_opens`;

-- DropTable
DROP TABLE `wp_mailpoet_statistics_unsubscribes`;

-- DropTable
DROP TABLE `wp_mailpoet_statistics_woocommerce_purchases`;

-- DropTable
DROP TABLE `wp_mailpoet_stats_notifications`;

-- DropTable
DROP TABLE `wp_mailpoet_subscriber_custom_field`;

-- DropTable
DROP TABLE `wp_mailpoet_subscriber_ips`;

-- DropTable
DROP TABLE `wp_mailpoet_subscriber_segment`;

-- DropTable
DROP TABLE `wp_mailpoet_subscriber_tag`;

-- DropTable
DROP TABLE `wp_mailpoet_subscribers`;

-- DropTable
DROP TABLE `wp_mailpoet_tags`;

-- DropTable
DROP TABLE `wp_mailpoet_user_agents`;

-- DropTable
DROP TABLE `wp_mailpoet_user_flags`;

-- DropTable
DROP TABLE `wp_options`;

-- DropTable
DROP TABLE `wp_postmeta`;

-- DropTable
DROP TABLE `wp_posts`;

-- DropTable
DROP TABLE `wp_term_relationships`;

-- DropTable
DROP TABLE `wp_term_taxonomy`;

-- DropTable
DROP TABLE `wp_termmeta`;

-- DropTable
DROP TABLE `wp_terms`;

-- DropTable
DROP TABLE `wp_usermeta`;

-- DropTable
DROP TABLE `wp_users`;

-- DropTable
DROP TABLE `wp_wc_admin_note_actions`;

-- DropTable
DROP TABLE `wp_wc_admin_notes`;

-- DropTable
DROP TABLE `wp_wc_category_lookup`;

-- DropTable
DROP TABLE `wp_wc_customer_lookup`;

-- DropTable
DROP TABLE `wp_wc_download_log`;

-- DropTable
DROP TABLE `wp_wc_order_addresses`;

-- DropTable
DROP TABLE `wp_wc_order_coupon_lookup`;

-- DropTable
DROP TABLE `wp_wc_order_operational_data`;

-- DropTable
DROP TABLE `wp_wc_order_product_lookup`;

-- DropTable
DROP TABLE `wp_wc_order_stats`;

-- DropTable
DROP TABLE `wp_wc_order_tax_lookup`;

-- DropTable
DROP TABLE `wp_wc_orders`;

-- DropTable
DROP TABLE `wp_wc_orders_meta`;

-- DropTable
DROP TABLE `wp_wc_product_attributes_lookup`;

-- DropTable
DROP TABLE `wp_wc_product_download_directories`;

-- DropTable
DROP TABLE `wp_wc_product_meta_lookup`;

-- DropTable
DROP TABLE `wp_wc_rate_limits`;

-- DropTable
DROP TABLE `wp_wc_reserved_stock`;

-- DropTable
DROP TABLE `wp_wc_tax_rate_classes`;

-- DropTable
DROP TABLE `wp_wc_webhooks`;

-- DropTable
DROP TABLE `wp_woocommerce_api_keys`;

-- DropTable
DROP TABLE `wp_woocommerce_attribute_taxonomies`;

-- DropTable
DROP TABLE `wp_woocommerce_downloadable_product_permissions`;

-- DropTable
DROP TABLE `wp_woocommerce_log`;

-- DropTable
DROP TABLE `wp_woocommerce_order_itemmeta`;

-- DropTable
DROP TABLE `wp_woocommerce_order_items`;

-- DropTable
DROP TABLE `wp_woocommerce_payment_tokenmeta`;

-- DropTable
DROP TABLE `wp_woocommerce_payment_tokens`;

-- DropTable
DROP TABLE `wp_woocommerce_sessions`;

-- DropTable
DROP TABLE `wp_woocommerce_shipping_zone_locations`;

-- DropTable
DROP TABLE `wp_woocommerce_shipping_zone_methods`;

-- DropTable
DROP TABLE `wp_woocommerce_shipping_zones`;

-- DropTable
DROP TABLE `wp_woocommerce_tax_rate_locations`;

-- DropTable
DROP TABLE `wp_woocommerce_tax_rates`;
