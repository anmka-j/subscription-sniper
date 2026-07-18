import { ExecutionContext, z } from '@nitrostack/core';
import { SubscriptionsService } from './subscriptions.service.js';
declare const FetchSubscriptionEmailsSchema: z.ZodObject<{
    account_email: z.ZodOptional<z.ZodString>;
    max_results: z.ZodDefault<z.ZodNumber>;
    fallback_to_mock: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    max_results: number;
    fallback_to_mock: boolean;
    account_email?: string | undefined;
}, {
    account_email?: string | undefined;
    max_results?: number | undefined;
    fallback_to_mock?: boolean | undefined;
}>;
declare const FetchGmailEmailsSchema: z.ZodObject<{
    account_email: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
    max_results: z.ZodDefault<z.ZodNumber>;
    fallback_to_mock: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    max_results: number;
    fallback_to_mock: boolean;
    query: string;
    account_email?: string | undefined;
}, {
    query: string;
    account_email?: string | undefined;
    max_results?: number | undefined;
    fallback_to_mock?: boolean | undefined;
}>;
declare const SearchEmailsBySenderSchema: z.ZodObject<{
    account_email: z.ZodOptional<z.ZodString>;
    sender_email: z.ZodString;
    max_results: z.ZodDefault<z.ZodNumber>;
    fallback_to_mock: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    max_results: number;
    fallback_to_mock: boolean;
    sender_email: string;
    account_email?: string | undefined;
}, {
    sender_email: string;
    account_email?: string | undefined;
    max_results?: number | undefined;
    fallback_to_mock?: boolean | undefined;
}>;
declare const SearchEmailsBySubjectSchema: z.ZodObject<{
    account_email: z.ZodOptional<z.ZodString>;
    subject: z.ZodString;
    max_results: z.ZodDefault<z.ZodNumber>;
    fallback_to_mock: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    max_results: number;
    fallback_to_mock: boolean;
    subject: string;
    account_email?: string | undefined;
}, {
    subject: string;
    account_email?: string | undefined;
    max_results?: number | undefined;
    fallback_to_mock?: boolean | undefined;
}>;
declare const GmailConnectionStatusSchema: z.ZodObject<{
    account_email: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    account_email?: string | undefined;
}, {
    account_email?: string | undefined;
}>;
declare const ExtractSubscriptionMetadataSchema: z.ZodObject<{
    email_body: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email_body: string;
}, {
    email_body: string;
}>;
declare const CheckEngagementSignalsSchema: z.ZodObject<{
    service_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    service_name: string;
}, {
    service_name: string;
}>;
declare const CalculateFinancialMetricsSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
declare const GenerateCancellationPlaybookSchema: z.ZodObject<{
    service_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    service_name: string;
}, {
    service_name: string;
}>;
export declare class SubscriptionsTools {
    private readonly subscriptionsService;
    constructor(subscriptionsService: SubscriptionsService);
    fetchSubscriptionEmails(args: z.infer<typeof FetchSubscriptionEmailsSchema>, ctx: ExecutionContext): Promise<{
        emails: (import("./subscriptions.data.js").MockSubscriptionEmail | import("./subscriptions.service.js").LiveSubscriptionEmail)[];
        source: import("./subscriptions.service.js").EmailSource;
        connected_account: string | undefined;
        total: number;
    }>;
    fetchBillingEmails(args: z.infer<typeof FetchSubscriptionEmailsSchema>, ctx: ExecutionContext): Promise<{
        emails: (import("./subscriptions.data.js").MockSubscriptionEmail | import("./subscriptions.service.js").LiveSubscriptionEmail)[];
        source: import("./subscriptions.service.js").EmailSource;
        connected_account: string | undefined;
        total: number;
    }>;
    fetchGmailEmails(args: z.infer<typeof FetchGmailEmailsSchema>, ctx: ExecutionContext): Promise<{
        emails: (import("./subscriptions.data.js").MockSubscriptionEmail | import("./subscriptions.service.js").LiveSubscriptionEmail)[];
        source: import("./subscriptions.service.js").EmailSource;
        connected_account: string | undefined;
        total: number;
    }>;
    searchEmailsBySender(args: z.infer<typeof SearchEmailsBySenderSchema>, ctx: ExecutionContext): Promise<{
        emails: (import("./subscriptions.data.js").MockSubscriptionEmail | import("./subscriptions.service.js").LiveSubscriptionEmail)[];
        source: import("./subscriptions.service.js").EmailSource;
        connected_account: string | undefined;
        total: number;
    }>;
    searchEmailsBySubject(args: z.infer<typeof SearchEmailsBySubjectSchema>, ctx: ExecutionContext): Promise<{
        emails: (import("./subscriptions.data.js").MockSubscriptionEmail | import("./subscriptions.service.js").LiveSubscriptionEmail)[];
        source: import("./subscriptions.service.js").EmailSource;
        connected_account: string | undefined;
        total: number;
    }>;
    gmailConnectionStatus(args: z.infer<typeof GmailConnectionStatusSchema>, ctx: ExecutionContext): Promise<import("./subscriptions.service.js").GmailConnectionStatus>;
    extractSubscriptionMetadata(args: z.infer<typeof ExtractSubscriptionMetadataSchema>, ctx: ExecutionContext): Promise<import("./subscriptions.service.js").SubscriptionRecord>;
    checkEngagementSignals(args: z.infer<typeof CheckEngagementSignalsSchema>, ctx: ExecutionContext): Promise<{
        service_name: string;
        engagement_status: import("./subscriptions.service.js").EngagementStatus;
    }>;
    calculateFinancialMetrics(args: z.infer<typeof CalculateFinancialMetricsSchema>, ctx: ExecutionContext): Promise<import("./subscriptions.service.js").SubscriptionMetrics>;
    generateCancellationPlaybook(args: z.infer<typeof GenerateCancellationPlaybookSchema>, ctx: ExecutionContext): Promise<{
        service_name: string;
        markdown: string;
    }>;
}
export {};
//# sourceMappingURL=subscriptions.tools.d.ts.map