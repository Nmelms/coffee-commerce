-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_actionscheduler_actions` (
    `action_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `hook` VARCHAR(191) NOT NULL,
    `status` VARCHAR(20) NOT NULL,
    `scheduled_date_gmt` DATETIME(0) NULL DEFAULT '1970-01-01 12:00:00',
    `scheduled_date_local` DATETIME(0) NULL DEFAULT '1970-01-01 12:00:00',
    `priority` TINYINT UNSIGNED NOT NULL DEFAULT 10,
    `args` VARCHAR(191) NULL,
    `schedule` LONGTEXT NULL,
    `group_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `attempts` INTEGER NOT NULL DEFAULT 0,
    `last_attempt_gmt` DATETIME(0) NULL DEFAULT '1970-01-01 12:00:00',
    `last_attempt_local` DATETIME(0) NULL DEFAULT '1970-01-01 12:00:00',
    `claim_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `extended_args` VARCHAR(8000) NULL,

    INDEX `args`(`args`),
    INDEX `claim_id_status_scheduled_date_gmt`(`claim_id`, `status`, `scheduled_date_gmt`),
    INDEX `group_id`(`group_id`),
    INDEX `hook`(`hook`),
    INDEX `last_attempt_gmt`(`last_attempt_gmt`),
    INDEX `scheduled_date_gmt`(`scheduled_date_gmt`),
    INDEX `status`(`status`),
    PRIMARY KEY (`action_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_actionscheduler_claims` (
    `claim_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `date_created_gmt` DATETIME(0) NULL DEFAULT '1970-01-01 12:00:00',

    INDEX `date_created_gmt`(`date_created_gmt`),
    PRIMARY KEY (`claim_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_actionscheduler_groups` (
    `group_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(255) NOT NULL,

    INDEX `slug`(`slug`(191)),
    PRIMARY KEY (`group_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_actionscheduler_logs` (
    `log_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `action_id` BIGINT UNSIGNED NOT NULL,
    `message` TEXT NOT NULL,
    `log_date_gmt` DATETIME(0) NULL DEFAULT '1970-01-01 12:00:00',
    `log_date_local` DATETIME(0) NULL DEFAULT '1970-01-01 12:00:00',

    INDEX `action_id`(`action_id`),
    INDEX `log_date_gmt`(`log_date_gmt`),
    PRIMARY KEY (`log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_commentmeta` (
    `meta_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `comment_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `meta_key` VARCHAR(255) NULL,
    `meta_value` LONGTEXT NULL,

    INDEX `comment_id`(`comment_id`),
    INDEX `meta_key`(`meta_key`(191)),
    PRIMARY KEY (`meta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_comments` (
    `comment_ID` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `comment_post_ID` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `comment_author` TINYTEXT NOT NULL,
    `comment_author_email` VARCHAR(100) NOT NULL DEFAULT '',
    `comment_author_url` VARCHAR(200) NOT NULL DEFAULT '',
    `comment_author_IP` VARCHAR(100) NOT NULL DEFAULT '',
    `comment_date` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `comment_date_gmt` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `comment_content` TEXT NOT NULL,
    `comment_karma` INTEGER NOT NULL DEFAULT 0,
    `comment_approved` VARCHAR(20) NOT NULL DEFAULT '1',
    `comment_agent` VARCHAR(255) NOT NULL DEFAULT '',
    `comment_type` VARCHAR(20) NOT NULL DEFAULT 'comment',
    `comment_parent` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `user_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,

    INDEX `comment_approved_date_gmt`(`comment_approved`, `comment_date_gmt`),
    INDEX `comment_author_email`(`comment_author_email`(10)),
    INDEX `comment_date_gmt`(`comment_date_gmt`),
    INDEX `comment_parent`(`comment_parent`),
    INDEX `comment_post_ID`(`comment_post_ID`),
    INDEX `woo_idx_comment_type`(`comment_type`),
    PRIMARY KEY (`comment_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_gla_attribute_mapping_rules` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `attribute` VARCHAR(255) NOT NULL,
    `source` VARCHAR(100) NOT NULL,
    `category_condition_type` VARCHAR(10) NOT NULL,
    `categories` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_gla_budget_recommendations` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `currency` VARCHAR(3) NOT NULL,
    `country` VARCHAR(2) NOT NULL,
    `daily_budget_low` INTEGER NOT NULL,
    `daily_budget_high` INTEGER NOT NULL,

    UNIQUE INDEX `country_currency`(`country`, `currency`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_gla_merchant_issues` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `product_id` BIGINT NOT NULL,
    `issue` VARCHAR(200) NOT NULL,
    `code` VARCHAR(100) NOT NULL,
    `severity` VARCHAR(20) NOT NULL DEFAULT 'warning',
    `product` VARCHAR(100) NOT NULL,
    `action` TEXT NOT NULL,
    `action_url` VARCHAR(1024) NOT NULL,
    `applicable_countries` TEXT NOT NULL,
    `source` VARCHAR(10) NOT NULL DEFAULT 'mc',
    `type` VARCHAR(10) NOT NULL DEFAULT 'product',
    `created_at` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_gla_shipping_rates` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `country` VARCHAR(2) NOT NULL,
    `currency` VARCHAR(3) NOT NULL,
    `rate` DOUBLE NOT NULL DEFAULT 0,
    `options` TEXT NULL,

    INDEX `country`(`country`),
    INDEX `currency`(`currency`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_gla_shipping_times` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `country` VARCHAR(2) NOT NULL,
    `time` BIGINT NOT NULL DEFAULT 0,

    INDEX `country`(`country`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_links` (
    `link_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `link_url` VARCHAR(255) NOT NULL DEFAULT '',
    `link_name` VARCHAR(255) NOT NULL DEFAULT '',
    `link_image` VARCHAR(255) NOT NULL DEFAULT '',
    `link_target` VARCHAR(25) NOT NULL DEFAULT '',
    `link_description` VARCHAR(255) NOT NULL DEFAULT '',
    `link_visible` VARCHAR(20) NOT NULL DEFAULT 'Y',
    `link_owner` BIGINT UNSIGNED NOT NULL DEFAULT 1,
    `link_rating` INTEGER NOT NULL DEFAULT 0,
    `link_updated` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `link_rel` VARCHAR(255) NOT NULL DEFAULT '',
    `link_notes` MEDIUMTEXT NOT NULL,
    `link_rss` VARCHAR(255) NOT NULL DEFAULT '',

    INDEX `link_visible`(`link_visible`),
    PRIMARY KEY (`link_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_automation_run_logs` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `automation_run_id` INTEGER UNSIGNED NOT NULL,
    `step_id` VARCHAR(191) NOT NULL,
    `step_type` VARCHAR(255) NOT NULL,
    `step_key` VARCHAR(255) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `started_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `run_number` INTEGER NOT NULL,
    `data` LONGTEXT NOT NULL,
    `error` LONGTEXT NULL,

    INDEX `status`(`status`),
    INDEX `step_id`(`step_id`),
    UNIQUE INDEX `automation_run_id_step_id`(`automation_run_id`, `step_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_automation_run_subjects` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `automation_run_id` INTEGER UNSIGNED NOT NULL,
    `key` VARCHAR(191) NULL,
    `args` LONGTEXT NULL,
    `hash` VARCHAR(191) NULL,

    INDEX `automation_run_id`(`automation_run_id`),
    INDEX `hash`(`hash`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_automation_runs` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `automation_id` INTEGER UNSIGNED NOT NULL,
    `version_id` INTEGER UNSIGNED NOT NULL,
    `trigger_key` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `next_step_id` VARCHAR(191) NULL,

    INDEX `automation_id`(`automation_id`, `status`),
    INDEX `created_at`(`created_at`),
    INDEX `next_step_id`(`next_step_id`),
    INDEX `status`(`status`),
    INDEX `version_id`(`version_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_automation_triggers` (
    `automation_id` INTEGER UNSIGNED NOT NULL,
    `trigger_key` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`automation_id`, `trigger_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_automation_versions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `automation_id` INTEGER UNSIGNED NOT NULL,
    `steps` LONGTEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `automation_id`(`automation_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_automations` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `author` BIGINT NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `meta` LONGTEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `activated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_custom_fields` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(90) NOT NULL,
    `type` VARCHAR(90) NOT NULL,
    `params` LONGTEXT NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_dynamic_segment_filters` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `segment_id` INTEGER UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `filter_data` LONGBLOB NULL,
    `filter_type` VARCHAR(255) NULL,
    `action` VARCHAR(255) NULL,

    INDEX `segment_id`(`segment_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_feature_flags` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `value` BOOLEAN NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_forms` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(90) NOT NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'enabled',
    `body` LONGTEXT NULL,
    `settings` LONGTEXT NULL,
    `styles` LONGTEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_log` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `level` INTEGER NULL,
    `message` LONGTEXT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `raw_message` LONGTEXT NULL,
    `context` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_migrations` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `started_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `completed_at` TIMESTAMP(0) NULL,
    `retries` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `error` TEXT NULL,

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_newsletter_links` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER UNSIGNED NOT NULL,
    `queue_id` INTEGER UNSIGNED NOT NULL,
    `url` VARCHAR(2083) NOT NULL,
    `hash` VARCHAR(20) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `newsletter_id`(`newsletter_id`),
    INDEX `queue_id`(`queue_id`),
    INDEX `url`(`url`(100)),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_newsletter_option` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER UNSIGNED NOT NULL,
    `option_field_id` INTEGER UNSIGNED NOT NULL,
    `value` LONGTEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `newsletter_id_option_field_id`(`newsletter_id`, `option_field_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_newsletter_option_fields` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(90) NOT NULL,
    `newsletter_type` VARCHAR(90) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `name_newsletter_type`(`newsletter_type`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_newsletter_posts` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER UNSIGNED NOT NULL,
    `post_id` INTEGER UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `newsletter_id`(`newsletter_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_newsletter_segment` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER UNSIGNED NOT NULL,
    `segment_id` INTEGER UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `newsletter_segment`(`newsletter_id`, `segment_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_newsletter_templates` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER NULL DEFAULT 0,
    `name` VARCHAR(250) NOT NULL,
    `categories` VARCHAR(250) NOT NULL DEFAULT '[]',
    `description` VARCHAR(255) NOT NULL DEFAULT '',
    `body` LONGTEXT NULL,
    `thumbnail` LONGTEXT NULL,
    `thumbnail_data` LONGTEXT NULL,
    `readonly` BOOLEAN NULL DEFAULT false,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_newsletters` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `hash` VARCHAR(150) NULL,
    `parent_id` INTEGER UNSIGNED NULL,
    `subject` VARCHAR(250) NOT NULL DEFAULT '',
    `type` VARCHAR(150) NOT NULL DEFAULT 'standard',
    `sender_address` VARCHAR(150) NOT NULL DEFAULT '',
    `sender_name` VARCHAR(150) NOT NULL DEFAULT '',
    `status` VARCHAR(20) NOT NULL DEFAULT 'draft',
    `reply_to_address` VARCHAR(150) NOT NULL DEFAULT '',
    `reply_to_name` VARCHAR(150) NOT NULL DEFAULT '',
    `preheader` VARCHAR(250) NOT NULL DEFAULT '',
    `body` LONGTEXT NULL,
    `sent_at` TIMESTAMP(0) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` TIMESTAMP(0) NULL,
    `unsubscribe_token` CHAR(15) NULL,
    `ga_campaign` VARCHAR(250) NOT NULL DEFAULT '',
    `wp_post_id` INTEGER NULL,

    UNIQUE INDEX `unsubscribe_token`(`unsubscribe_token`),
    INDEX `type_status`(`type`, `status`),
    INDEX `wp_post_id`(`wp_post_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_scheduled_task_subscribers` (
    `task_id` INTEGER UNSIGNED NOT NULL,
    `subscriber_id` INTEGER UNSIGNED NOT NULL,
    `processed` INTEGER NOT NULL,
    `failed` SMALLINT NOT NULL DEFAULT 0,
    `error` TEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `subscriber_id`(`subscriber_id`),
    PRIMARY KEY (`task_id`, `subscriber_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_scheduled_tasks` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(90) NULL,
    `status` VARCHAR(12) NULL,
    `priority` MEDIUMINT NOT NULL DEFAULT 0,
    `scheduled_at` TIMESTAMP(0) NULL,
    `processed_at` TIMESTAMP(0) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` TIMESTAMP(0) NULL,
    `in_progress` INTEGER NULL,
    `reschedule_count` INTEGER NOT NULL DEFAULT 0,
    `meta` LONGTEXT NULL,

    INDEX `status`(`status`),
    INDEX `type`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_segments` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(90) NOT NULL,
    `type` VARCHAR(90) NOT NULL DEFAULT 'default',
    `description` VARCHAR(250) NOT NULL DEFAULT '',
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` TIMESTAMP(0) NULL,
    `average_engagement_score` FLOAT NULL,
    `average_engagement_score_updated_at` TIMESTAMP(0) NULL,
    `display_in_manage_subscription_page` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `name`(`name`),
    INDEX `average_engagement_score_updated_at`(`average_engagement_score_updated_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_sending_queues` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER UNSIGNED NOT NULL,
    `newsletter_id` INTEGER UNSIGNED NULL,
    `newsletter_rendered_body` LONGTEXT NULL,
    `newsletter_rendered_subject` VARCHAR(250) NULL,
    `subscribers` LONGTEXT NULL,
    `count_total` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `count_processed` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `count_to_process` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `meta` LONGTEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` TIMESTAMP(0) NULL,

    INDEX `newsletter_id`(`newsletter_id`),
    INDEX `task_id`(`task_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_settings` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `value` LONGTEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_statistics_bounces` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER UNSIGNED NOT NULL,
    `subscriber_id` INTEGER UNSIGNED NOT NULL,
    `queue_id` INTEGER UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_statistics_clicks` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER UNSIGNED NOT NULL,
    `subscriber_id` INTEGER UNSIGNED NOT NULL,
    `queue_id` INTEGER UNSIGNED NOT NULL,
    `link_id` INTEGER UNSIGNED NOT NULL,
    `user_agent_id` INTEGER UNSIGNED NULL,
    `user_agent_type` BOOLEAN NOT NULL DEFAULT false,
    `count` INTEGER UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `newsletter_id_subscriber_id_user_agent_type`(`newsletter_id`, `subscriber_id`, `user_agent_type`),
    INDEX `queue_id`(`queue_id`),
    INDEX `subscriber_id`(`subscriber_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_statistics_forms` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `form_id` INTEGER UNSIGNED NOT NULL,
    `subscriber_id` INTEGER UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `form_subscriber`(`form_id`, `subscriber_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_statistics_newsletters` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER UNSIGNED NOT NULL,
    `subscriber_id` INTEGER UNSIGNED NOT NULL,
    `queue_id` INTEGER UNSIGNED NOT NULL,
    `sent_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `newsletter_id`(`newsletter_id`),
    INDEX `subscriber_id`(`subscriber_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_statistics_opens` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER UNSIGNED NOT NULL,
    `subscriber_id` INTEGER UNSIGNED NOT NULL,
    `queue_id` INTEGER UNSIGNED NOT NULL,
    `user_agent_id` INTEGER UNSIGNED NULL,
    `user_agent_type` BOOLEAN NOT NULL DEFAULT false,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `created_at`(`created_at`),
    INDEX `newsletter_id_subscriber_id_user_agent_type`(`newsletter_id`, `subscriber_id`, `user_agent_type`),
    INDEX `queue_id`(`queue_id`),
    INDEX `subscriber_id`(`subscriber_id`),
    INDEX `subscriber_id_created_at`(`subscriber_id`, `created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_statistics_unsubscribes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER UNSIGNED NULL,
    `subscriber_id` INTEGER UNSIGNED NOT NULL,
    `queue_id` INTEGER UNSIGNED NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `source` VARCHAR(255) NULL DEFAULT 'unknown',
    `meta` VARCHAR(255) NULL,
    `method` VARCHAR(40) NOT NULL DEFAULT 'unknown',

    INDEX `newsletter_id_subscriber_id`(`newsletter_id`, `subscriber_id`),
    INDEX `queue_id`(`queue_id`),
    INDEX `subscriber_id`(`subscriber_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_statistics_woocommerce_purchases` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER UNSIGNED NOT NULL,
    `subscriber_id` INTEGER UNSIGNED NOT NULL,
    `queue_id` INTEGER UNSIGNED NOT NULL,
    `click_id` INTEGER UNSIGNED NOT NULL,
    `order_id` BIGINT UNSIGNED NOT NULL,
    `order_currency` CHAR(3) NOT NULL,
    `order_price_total` FLOAT NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` VARCHAR(40) NOT NULL DEFAULT 'unknown',

    INDEX `newsletter_id`(`newsletter_id`),
    INDEX `queue_id`(`queue_id`),
    INDEX `status`(`status`),
    INDEX `subscriber_id`(`subscriber_id`),
    UNIQUE INDEX `click_id_order_id`(`click_id`, `order_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_stats_notifications` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `newsletter_id` INTEGER UNSIGNED NOT NULL,
    `task_id` INTEGER UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `task_id`(`task_id`),
    UNIQUE INDEX `newsletter_id_task_id`(`newsletter_id`, `task_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_subscriber_custom_field` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `subscriber_id` INTEGER UNSIGNED NOT NULL,
    `custom_field_id` INTEGER UNSIGNED NOT NULL,
    `value` TEXT NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `subscriber_id_custom_field_id`(`subscriber_id`, `custom_field_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_subscriber_ips` (
    `ip` VARCHAR(45) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `ip`(`ip`),
    PRIMARY KEY (`created_at`, `ip`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_subscriber_segment` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `subscriber_id` INTEGER UNSIGNED NOT NULL,
    `segment_id` INTEGER UNSIGNED NOT NULL,
    `status` VARCHAR(12) NOT NULL DEFAULT 'subscribed',
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `segment_id`(`segment_id`),
    UNIQUE INDEX `subscriber_segment`(`subscriber_id`, `segment_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_subscriber_tag` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `subscriber_id` INTEGER UNSIGNED NOT NULL,
    `tag_id` INTEGER UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `tag_id`(`tag_id`),
    UNIQUE INDEX `subscriber_tag`(`subscriber_id`, `tag_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_subscribers` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `wp_user_id` BIGINT NULL,
    `is_woocommerce_user` INTEGER NOT NULL DEFAULT 0,
    `first_name` VARCHAR(255) NOT NULL DEFAULT '',
    `last_name` VARCHAR(255) NOT NULL DEFAULT '',
    `email` VARCHAR(150) NOT NULL,
    `status` VARCHAR(12) NOT NULL DEFAULT 'unconfirmed',
    `subscribed_ip` VARCHAR(45) NULL,
    `confirmed_ip` VARCHAR(45) NULL,
    `confirmed_at` TIMESTAMP(0) NULL,
    `last_subscribed_at` TIMESTAMP(0) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` TIMESTAMP(0) NULL,
    `unconfirmed_data` LONGTEXT NULL,
    `source` ENUM('form', 'imported', 'administrator', 'api', 'wordpress_user', 'woocommerce_user', 'woocommerce_checkout', 'unknown') NULL DEFAULT 'unknown',
    `count_confirmations` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `unsubscribe_token` CHAR(15) NULL,
    `link_token` CHAR(32) NULL,
    `engagement_score` FLOAT NULL,
    `engagement_score_updated_at` TIMESTAMP(0) NULL,
    `last_engagement_at` TIMESTAMP(0) NULL,
    `woocommerce_synced_at` TIMESTAMP(0) NULL,
    `email_count` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `last_sending_at` TIMESTAMP(0) NULL,
    `last_open_at` TIMESTAMP(0) NULL,
    `last_click_at` TIMESTAMP(0) NULL,
    `last_purchase_at` TIMESTAMP(0) NULL,
    `last_page_view_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `email`(`email`),
    UNIQUE INDEX `unsubscribe_token`(`unsubscribe_token`),
    INDEX `engagement_score_updated_at`(`engagement_score_updated_at`),
    INDEX `first_name`(`first_name`(10)),
    INDEX `last_click_at`(`last_click_at`),
    INDEX `last_name`(`last_name`(10)),
    INDEX `last_open_at`(`last_open_at`),
    INDEX `last_page_view_at`(`last_page_view_at`),
    INDEX `last_purchase_at`(`last_purchase_at`),
    INDEX `last_sending_at`(`last_sending_at`),
    INDEX `last_subscribed_at`(`last_subscribed_at`),
    INDEX `link_token`(`link_token`),
    INDEX `status_deleted_at`(`status`, `deleted_at`),
    INDEX `updated_at`(`updated_at`),
    INDEX `wp_user_id`(`wp_user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_tags` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_user_agents` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `hash` VARCHAR(32) NOT NULL,
    `user_agent` TEXT NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `hash`(`hash`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_mailpoet_user_flags` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `value` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `user_id_name`(`user_id`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_options` (
    `option_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `option_name` VARCHAR(191) NOT NULL DEFAULT '',
    `option_value` LONGTEXT NOT NULL,
    `autoload` VARCHAR(20) NOT NULL DEFAULT 'yes',

    UNIQUE INDEX `option_name`(`option_name`),
    INDEX `autoload`(`autoload`),
    PRIMARY KEY (`option_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_postmeta` (
    `meta_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `post_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `meta_key` VARCHAR(255) NULL,
    `meta_value` LONGTEXT NULL,

    INDEX `meta_key`(`meta_key`(191)),
    INDEX `post_id`(`post_id`),
    PRIMARY KEY (`meta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_posts` (
    `ID` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `post_author` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `post_date` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `post_date_gmt` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `post_content` LONGTEXT NOT NULL,
    `post_title` TEXT NOT NULL,
    `post_excerpt` TEXT NOT NULL,
    `post_status` VARCHAR(20) NOT NULL DEFAULT 'publish',
    `comment_status` VARCHAR(20) NOT NULL DEFAULT 'open',
    `ping_status` VARCHAR(20) NOT NULL DEFAULT 'open',
    `post_password` VARCHAR(255) NOT NULL DEFAULT '',
    `post_name` VARCHAR(200) NOT NULL DEFAULT '',
    `to_ping` TEXT NOT NULL,
    `pinged` TEXT NOT NULL,
    `post_modified` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `post_modified_gmt` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `post_content_filtered` LONGTEXT NOT NULL,
    `post_parent` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `guid` VARCHAR(255) NOT NULL DEFAULT '',
    `menu_order` INTEGER NOT NULL DEFAULT 0,
    `post_type` VARCHAR(20) NOT NULL DEFAULT 'post',
    `post_mime_type` VARCHAR(100) NOT NULL DEFAULT '',
    `comment_count` BIGINT NOT NULL DEFAULT 0,

    INDEX `post_author`(`post_author`),
    INDEX `post_name`(`post_name`(191)),
    INDEX `post_parent`(`post_parent`),
    INDEX `type_status_date`(`post_type`, `post_status`, `post_date`, `ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_term_relationships` (
    `object_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `term_taxonomy_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `term_order` INTEGER NOT NULL DEFAULT 0,

    INDEX `term_taxonomy_id`(`term_taxonomy_id`),
    PRIMARY KEY (`object_id`, `term_taxonomy_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_term_taxonomy` (
    `term_taxonomy_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `term_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `taxonomy` VARCHAR(32) NOT NULL DEFAULT '',
    `description` LONGTEXT NOT NULL,
    `parent` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `count` BIGINT NOT NULL DEFAULT 0,

    INDEX `taxonomy`(`taxonomy`),
    UNIQUE INDEX `term_id_taxonomy`(`term_id`, `taxonomy`),
    PRIMARY KEY (`term_taxonomy_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_termmeta` (
    `meta_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `term_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `meta_key` VARCHAR(255) NULL,
    `meta_value` LONGTEXT NULL,

    INDEX `meta_key`(`meta_key`(191)),
    INDEX `term_id`(`term_id`),
    PRIMARY KEY (`meta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_terms` (
    `term_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL DEFAULT '',
    `slug` VARCHAR(200) NOT NULL DEFAULT '',
    `term_group` BIGINT NOT NULL DEFAULT 0,

    INDEX `name`(`name`(191)),
    INDEX `slug`(`slug`(191)),
    PRIMARY KEY (`term_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_usermeta` (
    `umeta_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `meta_key` VARCHAR(255) NULL,
    `meta_value` LONGTEXT NULL,

    INDEX `meta_key`(`meta_key`(191)),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`umeta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_users` (
    `ID` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_login` VARCHAR(60) NOT NULL DEFAULT '',
    `user_pass` VARCHAR(255) NOT NULL DEFAULT '',
    `user_nicename` VARCHAR(50) NOT NULL DEFAULT '',
    `user_email` VARCHAR(100) NOT NULL DEFAULT '',
    `user_url` VARCHAR(100) NOT NULL DEFAULT '',
    `user_registered` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `user_activation_key` VARCHAR(255) NOT NULL DEFAULT '',
    `user_status` INTEGER NOT NULL DEFAULT 0,
    `display_name` VARCHAR(250) NOT NULL DEFAULT '',

    INDEX `user_email`(`user_email`),
    INDEX `user_login_key`(`user_login`),
    INDEX `user_nicename`(`user_nicename`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_admin_note_actions` (
    `action_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `note_id` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `label` VARCHAR(255) NOT NULL,
    `query` LONGTEXT NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `actioned_text` VARCHAR(255) NOT NULL,
    `nonce_action` VARCHAR(255) NULL,
    `nonce_name` VARCHAR(255) NULL,

    INDEX `note_id`(`note_id`),
    PRIMARY KEY (`action_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_admin_notes` (
    `note_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `type` VARCHAR(20) NOT NULL,
    `locale` VARCHAR(20) NOT NULL,
    `title` LONGTEXT NOT NULL,
    `content` LONGTEXT NOT NULL,
    `content_data` LONGTEXT NULL,
    `status` VARCHAR(200) NOT NULL,
    `source` VARCHAR(200) NOT NULL,
    `date_created` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `date_reminder` DATETIME(0) NULL,
    `is_snoozable` BOOLEAN NOT NULL DEFAULT false,
    `layout` VARCHAR(20) NOT NULL DEFAULT '',
    `image` VARCHAR(200) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `is_read` BOOLEAN NOT NULL DEFAULT false,
    `icon` VARCHAR(200) NOT NULL DEFAULT 'info',

    PRIMARY KEY (`note_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_category_lookup` (
    `category_tree_id` BIGINT UNSIGNED NOT NULL,
    `category_id` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`category_tree_id`, `category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_customer_lookup` (
    `customer_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT UNSIGNED NULL,
    `username` VARCHAR(60) NOT NULL DEFAULT '',
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) NULL,
    `date_last_active` TIMESTAMP(0) NULL,
    `date_registered` TIMESTAMP(0) NULL,
    `country` CHAR(2) NOT NULL DEFAULT '',
    `postcode` VARCHAR(20) NOT NULL DEFAULT '',
    `city` VARCHAR(100) NOT NULL DEFAULT '',
    `state` VARCHAR(100) NOT NULL DEFAULT '',

    UNIQUE INDEX `user_id`(`user_id`),
    INDEX `email`(`email`),
    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_download_log` (
    `download_log_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `timestamp` DATETIME(0) NOT NULL,
    `permission_id` BIGINT UNSIGNED NOT NULL,
    `user_id` BIGINT UNSIGNED NULL,
    `user_ip_address` VARCHAR(100) NULL DEFAULT '',

    INDEX `permission_id`(`permission_id`),
    INDEX `timestamp`(`timestamp`),
    PRIMARY KEY (`download_log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_order_addresses` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `order_id` BIGINT UNSIGNED NOT NULL,
    `address_type` VARCHAR(20) NULL,
    `first_name` TEXT NULL,
    `last_name` TEXT NULL,
    `company` TEXT NULL,
    `address_1` TEXT NULL,
    `address_2` TEXT NULL,
    `city` TEXT NULL,
    `state` TEXT NULL,
    `postcode` TEXT NULL,
    `country` TEXT NULL,
    `email` VARCHAR(320) NULL,
    `phone` VARCHAR(100) NULL,

    INDEX `email`(`email`(191)),
    INDEX `order_id`(`order_id`),
    INDEX `phone`(`phone`),
    UNIQUE INDEX `address_type_order_id`(`address_type`, `order_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_order_coupon_lookup` (
    `order_id` BIGINT UNSIGNED NOT NULL,
    `coupon_id` BIGINT NOT NULL,
    `date_created` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `discount_amount` DOUBLE NOT NULL DEFAULT 0,

    INDEX `coupon_id`(`coupon_id`),
    INDEX `date_created`(`date_created`),
    PRIMARY KEY (`order_id`, `coupon_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_order_operational_data` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `order_id` BIGINT UNSIGNED NULL,
    `created_via` VARCHAR(100) NULL,
    `woocommerce_version` VARCHAR(20) NULL,
    `prices_include_tax` BOOLEAN NULL,
    `coupon_usages_are_counted` BOOLEAN NULL,
    `download_permission_granted` BOOLEAN NULL,
    `cart_hash` VARCHAR(100) NULL,
    `new_order_email_sent` BOOLEAN NULL,
    `order_key` VARCHAR(100) NULL,
    `order_stock_reduced` BOOLEAN NULL,
    `date_paid_gmt` DATETIME(0) NULL,
    `date_completed_gmt` DATETIME(0) NULL,
    `shipping_tax_amount` DECIMAL(26, 8) NULL,
    `shipping_total_amount` DECIMAL(26, 8) NULL,
    `discount_tax_amount` DECIMAL(26, 8) NULL,
    `discount_total_amount` DECIMAL(26, 8) NULL,
    `recorded_sales` BOOLEAN NULL,

    UNIQUE INDEX `order_id`(`order_id`),
    INDEX `order_key`(`order_key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_order_product_lookup` (
    `order_item_id` BIGINT UNSIGNED NOT NULL,
    `order_id` BIGINT UNSIGNED NOT NULL,
    `product_id` BIGINT UNSIGNED NOT NULL,
    `variation_id` BIGINT UNSIGNED NOT NULL,
    `customer_id` BIGINT UNSIGNED NULL,
    `date_created` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `product_qty` INTEGER NOT NULL,
    `product_net_revenue` DOUBLE NOT NULL DEFAULT 0,
    `product_gross_revenue` DOUBLE NOT NULL DEFAULT 0,
    `coupon_amount` DOUBLE NOT NULL DEFAULT 0,
    `tax_amount` DOUBLE NOT NULL DEFAULT 0,
    `shipping_amount` DOUBLE NOT NULL DEFAULT 0,
    `shipping_tax_amount` DOUBLE NOT NULL DEFAULT 0,

    INDEX `customer_id`(`customer_id`),
    INDEX `date_created`(`date_created`),
    INDEX `order_id`(`order_id`),
    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`order_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_order_stats` (
    `order_id` BIGINT UNSIGNED NOT NULL,
    `parent_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `date_created` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `date_created_gmt` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `date_paid` DATETIME(0) NULL DEFAULT '1970-01-01 12:00:00',
    `date_completed` DATETIME(0) NULL DEFAULT '1970-01-01 12:00:00',
    `num_items_sold` INTEGER NOT NULL DEFAULT 0,
    `total_sales` DOUBLE NOT NULL DEFAULT 0,
    `tax_total` DOUBLE NOT NULL DEFAULT 0,
    `shipping_total` DOUBLE NOT NULL DEFAULT 0,
    `net_total` DOUBLE NOT NULL DEFAULT 0,
    `returning_customer` BOOLEAN NULL,
    `status` VARCHAR(200) NOT NULL,
    `customer_id` BIGINT UNSIGNED NOT NULL,

    INDEX `customer_id`(`customer_id`),
    INDEX `date_created`(`date_created`),
    INDEX `status`(`status`(191)),
    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_order_tax_lookup` (
    `order_id` BIGINT UNSIGNED NOT NULL,
    `tax_rate_id` BIGINT UNSIGNED NOT NULL,
    `date_created` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `shipping_tax` DOUBLE NOT NULL DEFAULT 0,
    `order_tax` DOUBLE NOT NULL DEFAULT 0,
    `total_tax` DOUBLE NOT NULL DEFAULT 0,

    INDEX `date_created`(`date_created`),
    INDEX `tax_rate_id`(`tax_rate_id`),
    PRIMARY KEY (`order_id`, `tax_rate_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_orders` (
    `id` BIGINT UNSIGNED NOT NULL,
    `status` VARCHAR(20) NULL,
    `currency` VARCHAR(10) NULL,
    `type` VARCHAR(20) NULL,
    `tax_amount` DECIMAL(26, 8) NULL,
    `total_amount` DECIMAL(26, 8) NULL,
    `customer_id` BIGINT UNSIGNED NULL,
    `billing_email` VARCHAR(320) NULL,
    `date_created_gmt` DATETIME(0) NULL,
    `date_updated_gmt` DATETIME(0) NULL,
    `parent_order_id` BIGINT UNSIGNED NULL,
    `payment_method` VARCHAR(100) NULL,
    `payment_method_title` TEXT NULL,
    `transaction_id` VARCHAR(100) NULL,
    `ip_address` VARCHAR(100) NULL,
    `user_agent` TEXT NULL,
    `customer_note` TEXT NULL,

    INDEX `billing_email`(`billing_email`(191)),
    INDEX `customer_id_billing_email`(`customer_id`, `billing_email`(171)),
    INDEX `date_created`(`date_created_gmt`),
    INDEX `date_updated`(`date_updated_gmt`),
    INDEX `parent_order_id`(`parent_order_id`),
    INDEX `status`(`status`),
    INDEX `type_status_date`(`type`, `status`, `date_created_gmt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_orders_meta` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `order_id` BIGINT UNSIGNED NULL,
    `meta_key` VARCHAR(255) NULL,
    `meta_value` TEXT NULL,

    INDEX `meta_key_value`(`meta_key`(100), `meta_value`(82)),
    INDEX `order_id_meta_key_meta_value`(`order_id`, `meta_key`(100), `meta_value`(82)),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_product_attributes_lookup` (
    `product_id` BIGINT NOT NULL,
    `product_or_parent_id` BIGINT NOT NULL,
    `taxonomy` VARCHAR(32) NOT NULL,
    `term_id` BIGINT NOT NULL,
    `is_variation_attribute` BOOLEAN NOT NULL,
    `in_stock` BOOLEAN NOT NULL,

    INDEX `is_variation_attribute_term_id`(`is_variation_attribute`, `term_id`),
    PRIMARY KEY (`product_or_parent_id`, `term_id`, `product_id`, `taxonomy`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_product_download_directories` (
    `url_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(256) NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT false,

    INDEX `url`(`url`(191)),
    PRIMARY KEY (`url_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_product_meta_lookup` (
    `product_id` BIGINT NOT NULL,
    `sku` VARCHAR(100) NULL DEFAULT '',
    `virtual` BOOLEAN NULL DEFAULT false,
    `downloadable` BOOLEAN NULL DEFAULT false,
    `min_price` DECIMAL(19, 4) NULL,
    `max_price` DECIMAL(19, 4) NULL,
    `onsale` BOOLEAN NULL DEFAULT false,
    `stock_quantity` DOUBLE NULL,
    `stock_status` VARCHAR(100) NULL DEFAULT 'instock',
    `rating_count` BIGINT NULL DEFAULT 0,
    `average_rating` DECIMAL(3, 2) NULL DEFAULT 0.00,
    `total_sales` BIGINT NULL DEFAULT 0,
    `tax_status` VARCHAR(100) NULL DEFAULT 'taxable',
    `tax_class` VARCHAR(100) NULL DEFAULT '',

    INDEX `downloadable`(`downloadable`),
    INDEX `min_max_price`(`min_price`, `max_price`),
    INDEX `onsale`(`onsale`),
    INDEX `stock_quantity`(`stock_quantity`),
    INDEX `stock_status`(`stock_status`),
    INDEX `virtual`(`virtual`),
    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_rate_limits` (
    `rate_limit_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `rate_limit_key` VARCHAR(200) NOT NULL,
    `rate_limit_expiry` BIGINT UNSIGNED NOT NULL,
    `rate_limit_remaining` SMALLINT NOT NULL DEFAULT 0,

    UNIQUE INDEX `rate_limit_key`(`rate_limit_key`(191)),
    PRIMARY KEY (`rate_limit_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_reserved_stock` (
    `order_id` BIGINT NOT NULL,
    `product_id` BIGINT NOT NULL,
    `stock_quantity` DOUBLE NOT NULL DEFAULT 0,
    `timestamp` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `expires` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',

    PRIMARY KEY (`order_id`, `product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_tax_rate_classes` (
    `tax_rate_class_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL DEFAULT '',
    `slug` VARCHAR(200) NOT NULL DEFAULT '',

    UNIQUE INDEX `slug`(`slug`(191)),
    PRIMARY KEY (`tax_rate_class_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_wc_webhooks` (
    `webhook_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(200) NOT NULL,
    `name` TEXT NOT NULL,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `delivery_url` TEXT NOT NULL,
    `secret` TEXT NOT NULL,
    `topic` VARCHAR(200) NOT NULL,
    `date_created` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `date_created_gmt` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `date_modified` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `date_modified_gmt` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `api_version` SMALLINT NOT NULL,
    `failure_count` SMALLINT NOT NULL DEFAULT 0,
    `pending_delivery` BOOLEAN NOT NULL DEFAULT false,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`webhook_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_api_keys` (
    `key_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `description` VARCHAR(200) NULL,
    `permissions` VARCHAR(10) NOT NULL,
    `consumer_key` CHAR(64) NOT NULL,
    `consumer_secret` CHAR(43) NOT NULL,
    `nonces` LONGTEXT NULL,
    `truncated_key` CHAR(7) NOT NULL,
    `last_access` DATETIME(0) NULL,

    INDEX `consumer_key`(`consumer_key`),
    INDEX `consumer_secret`(`consumer_secret`),
    PRIMARY KEY (`key_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_attribute_taxonomies` (
    `attribute_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `attribute_name` VARCHAR(200) NOT NULL,
    `attribute_label` VARCHAR(200) NULL,
    `attribute_type` VARCHAR(20) NOT NULL,
    `attribute_orderby` VARCHAR(20) NOT NULL,
    `attribute_public` INTEGER NOT NULL DEFAULT 1,

    INDEX `attribute_name`(`attribute_name`(20)),
    PRIMARY KEY (`attribute_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_downloadable_product_permissions` (
    `permission_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `download_id` VARCHAR(36) NOT NULL,
    `product_id` BIGINT UNSIGNED NOT NULL,
    `order_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `order_key` VARCHAR(200) NOT NULL,
    `user_email` VARCHAR(200) NOT NULL,
    `user_id` BIGINT UNSIGNED NULL,
    `downloads_remaining` VARCHAR(9) NULL,
    `access_granted` DATETIME(0) NOT NULL DEFAULT '1970-01-01 12:00:00',
    `access_expires` DATETIME(0) NULL,
    `download_count` BIGINT UNSIGNED NOT NULL DEFAULT 0,

    INDEX `download_order_key_product`(`product_id`, `order_id`, `order_key`(16), `download_id`),
    INDEX `download_order_product`(`download_id`, `order_id`, `product_id`),
    INDEX `order_id`(`order_id`),
    INDEX `user_order_remaining_expires`(`user_id`, `order_id`, `downloads_remaining`, `access_expires`),
    PRIMARY KEY (`permission_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_log` (
    `log_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `timestamp` DATETIME(0) NOT NULL,
    `level` SMALLINT NOT NULL,
    `source` VARCHAR(200) NOT NULL,
    `message` LONGTEXT NOT NULL,
    `context` LONGTEXT NULL,

    INDEX `level`(`level`),
    PRIMARY KEY (`log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_order_itemmeta` (
    `meta_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `order_item_id` BIGINT UNSIGNED NOT NULL,
    `meta_key` VARCHAR(255) NULL,
    `meta_value` LONGTEXT NULL,

    INDEX `meta_key`(`meta_key`(32)),
    INDEX `order_item_id`(`order_item_id`),
    PRIMARY KEY (`meta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_order_items` (
    `order_item_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `order_item_name` TEXT NOT NULL,
    `order_item_type` VARCHAR(200) NOT NULL DEFAULT '',
    `order_id` BIGINT UNSIGNED NOT NULL,

    INDEX `order_id`(`order_id`),
    PRIMARY KEY (`order_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_payment_tokenmeta` (
    `meta_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `payment_token_id` BIGINT UNSIGNED NOT NULL,
    `meta_key` VARCHAR(255) NULL,
    `meta_value` LONGTEXT NULL,

    INDEX `meta_key`(`meta_key`(32)),
    INDEX `payment_token_id`(`payment_token_id`),
    PRIMARY KEY (`meta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_payment_tokens` (
    `token_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `gateway_id` VARCHAR(200) NOT NULL,
    `token` TEXT NOT NULL,
    `user_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
    `type` VARCHAR(200) NOT NULL,
    `is_default` BOOLEAN NOT NULL DEFAULT false,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`token_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_sessions` (
    `session_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `session_key` CHAR(32) NOT NULL,
    `session_value` LONGTEXT NOT NULL,
    `session_expiry` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `session_key`(`session_key`),
    PRIMARY KEY (`session_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_shipping_zone_locations` (
    `location_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `zone_id` BIGINT UNSIGNED NOT NULL,
    `location_code` VARCHAR(200) NOT NULL,
    `location_type` VARCHAR(40) NOT NULL,

    INDEX `location_id`(`location_id`),
    INDEX `location_type_code`(`location_type`(10), `location_code`(20)),
    PRIMARY KEY (`location_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_shipping_zone_methods` (
    `zone_id` BIGINT UNSIGNED NOT NULL,
    `instance_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `method_id` VARCHAR(200) NOT NULL,
    `method_order` BIGINT UNSIGNED NOT NULL,
    `is_enabled` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`instance_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_shipping_zones` (
    `zone_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `zone_name` VARCHAR(200) NOT NULL,
    `zone_order` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`zone_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_tax_rate_locations` (
    `location_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `location_code` VARCHAR(200) NOT NULL,
    `tax_rate_id` BIGINT UNSIGNED NOT NULL,
    `location_type` VARCHAR(40) NOT NULL,

    INDEX `location_type_code`(`location_type`(10), `location_code`(20)),
    INDEX `tax_rate_id`(`tax_rate_id`),
    PRIMARY KEY (`location_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wp_woocommerce_tax_rates` (
    `tax_rate_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `tax_rate_country` VARCHAR(2) NOT NULL DEFAULT '',
    `tax_rate_state` VARCHAR(200) NOT NULL DEFAULT '',
    `tax_rate` VARCHAR(8) NOT NULL DEFAULT '',
    `tax_rate_name` VARCHAR(200) NOT NULL DEFAULT '',
    `tax_rate_priority` BIGINT UNSIGNED NOT NULL,
    `tax_rate_compound` INTEGER NOT NULL DEFAULT 0,
    `tax_rate_shipping` INTEGER NOT NULL DEFAULT 1,
    `tax_rate_order` BIGINT UNSIGNED NOT NULL,
    `tax_rate_class` VARCHAR(200) NOT NULL DEFAULT '',

    INDEX `tax_rate_class`(`tax_rate_class`(10)),
    INDEX `tax_rate_country`(`tax_rate_country`),
    INDEX `tax_rate_priority`(`tax_rate_priority`),
    INDEX `tax_rate_state`(`tax_rate_state`(2)),
    PRIMARY KEY (`tax_rate_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
