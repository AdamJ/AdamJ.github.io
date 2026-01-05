---
layout: 'markdown'
permalink: 'apps/taskstat-privacy.html'
title: 'TaskStat Privacy Policy'
date: git Last Modified
abbreviation: 'taskstat-privacy'
description: 'Privacy policy for TaskStat - a privacy-first task management app for iOS'
eleventyNavigation:
  key: TaskStat Privacy
  parent: Apps
  order: 20
---

<section>

**Last Updated:** January 5, 2026
**Effective Date:** January 5, 2026

## Our Privacy Commitment

TaskStat is built with privacy as a core principle. We believe your task data is yours alone, and we've designed TaskStat to ensure your information stays completely private and under your control.

**The short version:** We don't collect, transmit, or store any of your data on our servers. Everything stays on your device.

## Information Collection and Use

### What We DON'T Collect

TaskStat does **NOT** collect, transmit, or have access to:

- ❌ Your task data
- ❌ Your personal information
- ❌ Your usage patterns or analytics
- ❌ Your device identifiers
- ❌ Your location data
- ❌ Your contacts or calendar information
- ❌ Any tracking or advertising identifiers
- ❌ Crash reports or diagnostic data (beyond iOS system-level reporting)

### What IS Stored on Your Device

TaskStat stores the following information **locally on your device only**:

#### Task Data (SwiftData/SQLite)

- Task titles
- Task descriptions and notes
- Status, priority, and type classifications
- Project assignments
- Assignee names (if you enter them)
- Creation dates
- Completion status

#### App Preferences (UserDefaults)

- Your default filter settings (status, priority, project)
- Your default grouping preferences
- Your default values for new tasks
- UI customization preferences

**Important:** All of this data is stored exclusively in your device's local storage using Apple's SwiftData framework. It is never transmitted to our servers or any third-party services.

## Data Storage Location

### Local Storage Only

TaskStat uses **local-only storage** via SwiftData (Apple's native persistence framework). Your data is stored in a SQLite database within the app's sandboxed container on your device.

### No Cloud Synchronization

TaskStat **intentionally does not use:**

- iCloud sync
- CloudKit
- Any proprietary cloud services
- Any third-party cloud storage

This design choice ensures your task data never leaves your device unless you explicitly export it.

### What Happens to Your Data

- **When you use the app:** Data is read from and written to local storage only
- **When you close the app:** Data persists in local storage
- **When you delete the app:** All app data is permanently deleted from your device
- **When you upgrade iOS:** Data remains in local storage (standard iOS behavior)

## Data Sharing and Export

### User-Controlled Export Only

TaskStat includes a CSV export feature that allows you to export your task list. This is **entirely under your control**:

- ✅ **You initiate the export** by tapping the export button
- ✅ **You choose where to share** using iOS's native share sheet
- ✅ **You control the recipients** (email, files, cloud storage, etc.)
- ✅ **We never receive the exported file**

### What's in an Export

When you export your tasks to CSV, the file contains:

- Task State
- Task Title
- Task Type
- Task Status
- Assignee
- Priority
- Project
- Notes
- Entry Date

**Important:** Once you share an exported CSV file via email, cloud storage, or messaging apps, that data is subject to the privacy policies of those services. We recommend being mindful of what you share and with whom.

## Third-Party Services

TaskStat does **NOT** integrate with any third-party services, including:

- ❌ Analytics platforms (Google Analytics, Firebase Analytics, Amplitude, etc.)
- ❌ Crash reporting services (Crashlytics, Sentry, Bugsnag, etc.)
- ❌ Advertising networks
- ❌ Social media platforms
- ❌ Cloud storage providers
- ❌ Backend-as-a-service platforms

The only external code included in TaskStat consists of:

- Apple's native iOS frameworks (SwiftUI, SwiftData, Foundation, UIKit)

## Network Activity

### Zero Network Requests

TaskStat makes **zero network requests**. The app:

- ❌ Does not connect to any servers
- ❌ Does not send any data over the internet
- ❌ Does not require an internet connection to function
- ❌ Does not check for updates (uses App Store's standard update mechanism)

You can use TaskStat in airplane mode, offline, or with network access completely disabled.

## Data Security

### How We Protect Your Data

Since all data is stored locally on your device:

1. **iOS Security Model:** Your data benefits from iOS's robust security architecture, including:

   - App sandboxing (TaskStat cannot access other apps' data)
   - Encryption at rest (if you enable device encryption)
   - Secure enclave protection (on supported devices)

2. **No Transmission Risk:** Since data never leaves your device, there's no risk of interception during transmission

3. **No Server Breaches:** We don't have servers, so there's no risk of server-side data breaches

4. **No Password Storage:** TaskStat doesn't require an account, so there are no passwords to compromise

### Your Responsibility

To keep your task data secure:

- ✅ Use a device passcode or biometric authentication
- ✅ Keep your device's operating system updated
- ✅ Be mindful when exporting and sharing CSV files
- ✅ Only install TaskStat from the official Apple App Store

## Children's Privacy

TaskStat does not collect any personal information from anyone, including children under 13. Since all data stays on the device and we have no servers or data collection mechanisms, TaskStat is safe for users of all ages.

Parents should be aware that:

- The app stores task information locally on the device
- Users can enter any text content into tasks
- CSV exports could be shared if the device is not properly secured

## Your Privacy Rights

### Complete Data Ownership

You have complete ownership and control over your data:

- ✅ **Access:** You can view all your data within the app at any time
- ✅ **Export:** You can export all your data to CSV format
- ✅ **Delete:** You can delete individual tasks, projects, or all data
- ✅ **Modify:** You can edit any task information at any time

### How to Exercise Your Rights

- **To access your data:** Open TaskStat—all your data is visible
- **To export your data:** Use the CSV export feature in the task list
- **To delete specific data:** Swipe to delete tasks or projects, or use multi-select
- **To delete all data:** Delete the TaskStat app from your device

### No Data Requests Needed

Since we don't collect or store your data on our servers, you don't need to submit data access or deletion requests to us. You have direct, immediate control over all your information.

## Changes to Data Practices

### Current Status

As of January 2026, TaskStat:

- ✅ Does not collect any user data
- ✅ Uses local-only storage
- ✅ Makes zero network requests
- ✅ Includes no third-party services

### If This Changes

We are committed to maintaining TaskStat's privacy-first design. However, if we ever:

- Add cloud synchronization features
- Integrate third-party services
- Implement analytics or crash reporting
- Change our data collection practices

We will:

1. **Update this privacy policy** with clear explanations
2. **Make these features opt-in** (not mandatory)
3. **Notify users** through App Store update notes

Any changes to this privacy policy will be posted to this page and reflected in the app's version history.

## Legal Compliance

### Regulatory Compliance

TaskStat's privacy-first design ensures compliance with major privacy regulations:

- **GDPR (General Data Protection Regulation):** We don't collect personal data, so GDPR's data protection requirements don't apply
- **CCPA (California Consumer Privacy Act):** We don't sell or share personal information
- **COPPA (Children's Online Privacy Protection Act):** We don't collect information from children
- **Apple App Store Privacy Requirements:** We accurately disclose that we collect zero data

### App Store Privacy Nutrition Label

In accordance with Apple's App Privacy details requirements, TaskStat's privacy label states:

- **Data Used to Track You:** None
- **Data Linked to You:** None
- **Data Not Linked to You:** None

This accurately reflects that TaskStat collects no data.

## Open Source and Transparency

### Code Transparency

While TaskStat is not currently open source, we are committed to transparency about our privacy practices:

- This privacy policy accurately reflects our app's behavior
- You can verify our claims using network monitoring tools
- We welcome security researchers to audit our app's data practices

### Verification

If you're technically inclined, you can verify our privacy claims by:

1. Using network monitoring tools (Charles Proxy, Wireshark, etc.) to confirm zero network traffic
2. Reviewing the app's storage using iOS system tools
3. Examining iOS privacy permissions (TaskStat requests none)

## Contact Information

### Questions or Concerns

If you have questions about this privacy policy or TaskStat's data practices:

- **Email:** [support@adamjolicoeur.com](mailto:support@adamjolicoeur.com)
- **Website:** [adamjolicoeur.com](https://www.adamjolicoeur.com/apps/taskstat)
- **App Store:** Leave a review or question on the TaskStat App Store page

### Data Breach Notification

Since TaskStat doesn't collect or store data on our servers, we cannot experience a data breach of user information. Any data security is determined by your device's security posture.

## International Users

TaskStat is available worldwide. Since all data is stored locally on your device and never transmitted to our servers, there are no cross-border data transfer concerns. Your data never leaves your device unless you explicitly export and share it.

## Summary

**In Plain English:**

1. ✅ TaskStat stores your tasks only on your device
2. ✅ We never see, collect, or transmit your data
3. ✅ No internet connection is required
4. ✅ No account or registration needed
5. ✅ Export features are entirely under your control
6. ✅ Delete the app = delete your data permanently
7. ✅ No tracking, analytics, or third-party services

TaskStat is designed to be the most private task manager possible. Your data is yours, and only yours.

## Acknowledgment

By using TaskStat, you acknowledge that you have read and understood this privacy policy. Given that we don't collect any data, your use of the app does not involve sharing personal information with us.

**TaskStat Privacy Policy Version 1.0**
_Simple tasks. Complete privacy._

</section>
