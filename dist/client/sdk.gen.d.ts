import type { Client, Options as Options2, TDataShape } from './client/index.js';
import type { FastingDeleteData, FastingDeleteErrors, FastingDeleteResponses, FastingEndData, FastingEndErrors, FastingEndResponses, FastingGetActiveData, FastingGetActiveErrors, FastingGetActiveResponses, FastingGetDashboardInfoData, FastingGetDashboardInfoErrors, FastingGetDashboardInfoResponses, FastingGetData, FastingGetErrors, FastingGetResponses, FastingGetStatsData, FastingGetStatsErrors, FastingGetStatsResponses, FastingListData, FastingListErrors, FastingListResponses, FastingStartData, FastingStartErrors, FastingStartResponses, FastingUpdateData, FastingUpdateErrors, FastingUpdateResponses, HabitsCreateData, HabitsCreateErrors, HabitsCreateResponses, HabitsDeleteData, HabitsDeleteErrors, HabitsDeleteResponses, HabitsDuplicateData, HabitsDuplicateErrors, HabitsDuplicateResponses, HabitsGetData, HabitsGetErrors, HabitsGetHabitsAndCompletionsData, HabitsGetHabitsAndCompletionsErrors, HabitsGetHabitsAndCompletionsResponses, HabitsGetHabitScoreForWidgetData, HabitsGetHabitScoreForWidgetErrors, HabitsGetHabitScoreForWidgetResponses, HabitsGetHabitsForCurrentUserData, HabitsGetHabitsForCurrentUserErrors, HabitsGetHabitsForCurrentUserResponses, HabitsGetResponses, HabitsLogHabitOnDayData, HabitsLogHabitOnDayErrors, HabitsLogHabitOnDayResponses, HabitsLogManyHabitsOnDayData, HabitsLogManyHabitsOnDayErrors, HabitsLogManyHabitsOnDayResponses, HabitsUpdateData, HabitsUpdateErrors, HabitsUpdateResponses, HydrationLogsCreateData, HydrationLogsCreateErrors, HydrationLogsCreateResponses, HydrationLogsDeleteData, HydrationLogsDeleteErrors, HydrationLogsDeleteManyData, HydrationLogsDeleteManyErrors, HydrationLogsDeleteManyResponses, HydrationLogsDeleteResponses, HydrationLogsGetData, HydrationLogsGetErrors, HydrationLogsGetResponses, HydrationLogsGetStatsData, HydrationLogsGetStatsErrors, HydrationLogsGetStatsResponses, HydrationLogsListData, HydrationLogsListErrors, HydrationLogsListResponses, HydrationLogsUpdateData, HydrationLogsUpdateErrors, HydrationLogsUpdateResponses, JournalEntriesCreateData, JournalEntriesCreateErrors, JournalEntriesCreateResponses, JournalEntriesDecryptData, JournalEntriesDecryptErrors, JournalEntriesDecryptResponses, JournalEntriesDeleteData, JournalEntriesDeleteErrors, JournalEntriesDeleteManyData, JournalEntriesDeleteManyErrors, JournalEntriesDeleteManyResponses, JournalEntriesDeleteResponses, JournalEntriesEncryptData, JournalEntriesEncryptErrors, JournalEntriesEncryptManyData, JournalEntriesEncryptManyErrors, JournalEntriesEncryptManyResponses, JournalEntriesEncryptResponses, JournalEntriesGetData, JournalEntriesGetErrors, JournalEntriesGetForDecryptingData, JournalEntriesGetForDecryptingErrors, JournalEntriesGetForDecryptingResponses, JournalEntriesGetResponses, JournalEntriesListData, JournalEntriesListErrors, JournalEntriesListResponses, JournalEntriesStatsData, JournalEntriesStatsErrors, JournalEntriesStatsResponses, JournalEntriesToggleEncryptionData, JournalEntriesToggleEncryptionErrors, JournalEntriesToggleEncryptionResponses, JournalEntriesUpdateData, JournalEntriesUpdateErrors, JournalEntriesUpdateManyEncryptionData, JournalEntriesUpdateManyEncryptionErrors, JournalEntriesUpdateManyEncryptionResponses, JournalEntriesUpdateResponses, MoodCreateData, MoodCreateErrors, MoodCreateResponses, MoodDeleteAllData, MoodDeleteAllErrors, MoodDeleteAllResponses, MoodDeleteData, MoodDeleteErrors, MoodDeleteManyData, MoodDeleteManyErrors, MoodDeleteManyResponses, MoodDeleteResponses, MoodGetData, MoodGetErrors, MoodGetForWidgetData, MoodGetForWidgetErrors, MoodGetForWidgetResponses, MoodGetResponses, MoodListData, MoodListErrors, MoodListResponses, MoodUpdateData, MoodUpdateErrors, MoodUpdateResponses, PackingActivitiesCreateData, PackingActivitiesCreateErrors, PackingActivitiesCreateResponses, PackingActivitiesDeleteData, PackingActivitiesDeleteErrors, PackingActivitiesDeleteManyData, PackingActivitiesDeleteManyErrors, PackingActivitiesDeleteManyResponses, PackingActivitiesDeleteResponses, PackingActivitiesExistsData, PackingActivitiesExistsErrors, PackingActivitiesExistsResponses, PackingActivitiesGetData, PackingActivitiesGetErrors, PackingActivitiesGetResponses, PackingActivitiesListData, PackingActivitiesListErrors, PackingActivitiesListResponses, PackingActivitiesUpdateData, PackingActivitiesUpdateErrors, PackingActivitiesUpdateResponses, PackingItemsCreateData, PackingItemsCreateErrors, PackingItemsCreateResponses, PackingItemsDeleteData, PackingItemsDeleteErrors, PackingItemsDeleteManyData, PackingItemsDeleteManyErrors, PackingItemsDeleteManyResponses, PackingItemsDeleteResponses, PackingItemsGetData, PackingItemsGetErrors, PackingItemsGetResponses, PackingItemsListData, PackingItemsListErrors, PackingItemsListResponses, PackingItemsUpdateData, PackingItemsUpdateErrors, PackingItemsUpdateResponses, PainEventsBodyPartsData, PainEventsBodyPartsErrors, PainEventsBodyPartsResponses, PainEventsCreateData, PainEventsCreateErrors, PainEventsCreateResponses, PainEventsDeleteData, PainEventsDeleteErrors, PainEventsDeleteManyData, PainEventsDeleteManyErrors, PainEventsDeleteManyResponses, PainEventsDeleteResponses, PainEventsGetData, PainEventsGetErrors, PainEventsGetResponses, PainEventsListData, PainEventsListErrors, PainEventsListResponses, PainEventsRecentBodyPartsData, PainEventsRecentBodyPartsErrors, PainEventsRecentBodyPartsResponses, PainEventsUpdateData, PainEventsUpdateErrors, PainEventsUpdateResponses, ProjectsCreateData, ProjectsCreateErrors, ProjectsCreateResponses, ProjectsDeleteData, ProjectsDeleteErrors, ProjectsDeleteResponses, ProjectsExistsData, ProjectsExistsErrors, ProjectsExistsResponses, ProjectsForTodoFormData, ProjectsForTodoFormErrors, ProjectsForTodoFormResponses, ProjectsGetData, ProjectsGetErrors, ProjectsGetResponses, ProjectsListData, ProjectsListErrors, ProjectsListResponses, ProjectsUpdateData, ProjectsUpdateErrors, ProjectsUpdateResponses, StaysCreateData, StaysCreateErrors, StaysCreateResponses, StaysDeleteData, StaysDeleteErrors, StaysDeleteManyData, StaysDeleteManyErrors, StaysDeleteManyResponses, StaysDeleteResponses, StaysGetData, StaysGetErrors, StaysGetResponses, StaysListData, StaysListErrors, StaysListResponses, StaysUpdateData, StaysUpdateErrors, StaysUpdateResponses, TagsCreateData, TagsCreateErrors, TagsCreateResponses, TagsDeleteData, TagsDeleteErrors, TagsDeleteResponses, TagsExistsData, TagsExistsErrors, TagsExistsResponses, TagsFavoritesData, TagsFavoritesErrors, TagsFavoritesResponses, TagsForTodoFormData, TagsForTodoFormErrors, TagsForTodoFormResponses, TagsGetData, TagsGetErrors, TagsGetResponses, TagsListData, TagsListErrors, TagsListResponses, TagsUpdateData, TagsUpdateErrors, TagsUpdateResponses, TodoListsCreateData, TodoListsCreateErrors, TodoListsCreateResponses, TodoListsDeleteData, TodoListsDeleteErrors, TodoListsDeleteResponses, TodoListsExistsData, TodoListsExistsErrors, TodoListsExistsResponses, TodoListsFavoritesData, TodoListsFavoritesErrors, TodoListsFavoritesResponses, TodoListsForTodoFormData, TodoListsForTodoFormErrors, TodoListsForTodoFormResponses, TodoListsGetData, TodoListsGetErrors, TodoListsGetResponses, TodoListsListData, TodoListsListErrors, TodoListsListResponses, TodoListsUpdateData, TodoListsUpdateErrors, TodoListsUpdateResponses, TodosAssignableUsersData, TodosAssignableUsersErrors, TodosAssignableUsersResponses, TodosAssignData, TodosAssignErrors, TodosAssignResponses, TodosByListData, TodosByListErrors, TodosByListResponses, TodosByProjectData, TodosByProjectErrors, TodosByProjectResponses, TodosByTagData, TodosByTagErrors, TodosByTagResponses, TodosCreateData, TodosCreateErrors, TodosCreateResponses, TodosDeleteData, TodosDeleteErrors, TodosDeleteManyData, TodosDeleteManyErrors, TodosDeleteManyResponses, TodosDeleteResponses, TodosExistsData, TodosExistsErrors, TodosExistsResponses, TodosGetData, TodosGetErrors, TodosGetResponses, TodosListData, TodosListErrors, TodosListResponses, TodosPossibleAssigneesData, TodosPossibleAssigneesErrors, TodosPossibleAssigneesResponses, TodosQuickUpdateManyData, TodosQuickUpdateManyErrors, TodosQuickUpdateManyResponses, TodosToggleData, TodosToggleErrors, TodosToggleResponses, TodosUnassignData, TodosUnassignErrors, TodosUnassignResponses, TodosUpdateData, TodosUpdateErrors, TodosUpdateResponses, TransportsCreateData, TransportsCreateErrors, TransportsCreateResponses, TransportsDeleteData, TransportsDeleteErrors, TransportsDeleteManyData, TransportsDeleteManyErrors, TransportsDeleteManyResponses, TransportsDeleteResponses, TransportsExistsData, TransportsExistsErrors, TransportsExistsResponses, TransportsGetData, TransportsGetErrors, TransportsGetResponses, TransportsListData, TransportsListErrors, TransportsListResponses, TransportsUpdateData, TransportsUpdateErrors, TransportsUpdateResponses, TripsCreateData, TripsCreateErrors, TripsCreateResponses, TripsDeleteData, TripsDeleteErrors, TripsDeleteManyData, TripsDeleteManyErrors, TripsDeleteManyResponses, TripsDeleteResponses, TripsGetData, TripsGetErrors, TripsGetResponses, TripsListData, TripsListErrors, TripsListResponses, TripsUpdateData, TripsUpdateErrors, TripsUpdateResponses, WorkoutsActiveUsersData, WorkoutsActiveUsersErrors, WorkoutsActiveUsersResponses, WorkoutsCreateData, WorkoutsCreateErrors, WorkoutsCreateResponses, WorkoutsDeleteData, WorkoutsDeleteErrors, WorkoutsDeleteResponses, WorkoutsDuplicateData, WorkoutsDuplicateErrors, WorkoutsDuplicateResponses, WorkoutsEndData, WorkoutsEndErrors, WorkoutsEndResponses, WorkoutsGetData, WorkoutsGetErrors, WorkoutsGetResponses, WorkoutsGetWithDetailsData, WorkoutsGetWithDetailsErrors, WorkoutsGetWithDetailsResponses, WorkoutsInProgressData, WorkoutsInProgressErrors, WorkoutsInProgressResponses, WorkoutsListData, WorkoutsListErrors, WorkoutsListResponses, WorkoutsStartData, WorkoutsStartErrors, WorkoutsStartResponses, WorkoutsSubmitCompleteData, WorkoutsSubmitCompleteErrors, WorkoutsSubmitCompleteResponses, WorkoutsUpdateData, WorkoutsUpdateErrors, WorkoutsUpdateNameData, WorkoutsUpdateNameErrors, WorkoutsUpdateNameResponses, WorkoutsUpdateResponses } from './types.gen.js';
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = Options2<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
export declare class Mood {
    /**
     * Get mood log
     *
     * Get a single mood log by ID
     */
    static moodGet<ThrowOnError extends boolean = false>(options: Options<MoodGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<MoodGetResponses, MoodGetErrors, ThrowOnError, "fields">;
    /**
     * List mood logs
     *
     * List mood logs for a date range
     */
    static moodList<ThrowOnError extends boolean = false>(options: Options<MoodListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<MoodListResponses, MoodListErrors, ThrowOnError, "fields">;
    /**
     * Get mood widget data
     *
     * Get aggregated mood data for widgets
     */
    static moodGetForWidget<ThrowOnError extends boolean = false>(options: Options<MoodGetForWidgetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<MoodGetForWidgetResponses, MoodGetForWidgetErrors, ThrowOnError, "fields">;
    /**
     * Create mood log
     *
     * Create a new mood log
     */
    static moodCreate<ThrowOnError extends boolean = false>(options: Options<MoodCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<MoodCreateResponses, MoodCreateErrors, ThrowOnError, "fields">;
    /**
     * Update mood log
     *
     * Update an existing mood log
     */
    static moodUpdate<ThrowOnError extends boolean = false>(options: Options<MoodUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<MoodUpdateResponses, MoodUpdateErrors, ThrowOnError, "fields">;
    /**
     * Delete mood log
     *
     * Delete a mood log
     */
    static moodDelete<ThrowOnError extends boolean = false>(options: Options<MoodDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<MoodDeleteResponses, MoodDeleteErrors, ThrowOnError, "fields">;
    /**
     * Delete multiple mood logs
     *
     * Delete multiple mood logs
     */
    static moodDeleteMany<ThrowOnError extends boolean = false>(options: Options<MoodDeleteManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<MoodDeleteManyResponses, MoodDeleteManyErrors, ThrowOnError, "fields">;
    /**
     * Delete all mood logs
     *
     * Delete all mood logs for the user
     */
    static moodDeleteAll<ThrowOnError extends boolean = false>(options: Options<MoodDeleteAllData, ThrowOnError>): import("./client/types.gen.js").RequestResult<MoodDeleteAllResponses, MoodDeleteAllErrors, ThrowOnError, "fields">;
}
export declare class PainEvents {
    /**
     * List body parts
     *
     * List available pain event body parts
     */
    static painEventsBodyParts<ThrowOnError extends boolean = false>(options?: Options<PainEventsBodyPartsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PainEventsBodyPartsResponses, PainEventsBodyPartsErrors, ThrowOnError, "fields">;
    /**
     * Recent body parts
     *
     * List recently used pain event body parts
     */
    static painEventsRecentBodyParts<ThrowOnError extends boolean = false>(options?: Options<PainEventsRecentBodyPartsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PainEventsRecentBodyPartsResponses, PainEventsRecentBodyPartsErrors, ThrowOnError, "fields">;
    /**
     * Get pain event
     *
     * Get a single pain event by ID
     */
    static painEventsGet<ThrowOnError extends boolean = false>(options: Options<PainEventsGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PainEventsGetResponses, PainEventsGetErrors, ThrowOnError, "fields">;
    /**
     * List pain events
     *
     * List pain events for a date range
     */
    static painEventsList<ThrowOnError extends boolean = false>(options: Options<PainEventsListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PainEventsListResponses, PainEventsListErrors, ThrowOnError, "fields">;
    /**
     * Create pain event
     *
     * Create a new pain event
     */
    static painEventsCreate<ThrowOnError extends boolean = false>(options: Options<PainEventsCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PainEventsCreateResponses, PainEventsCreateErrors, ThrowOnError, "fields">;
    /**
     * Update pain event
     *
     * Update an existing pain event
     */
    static painEventsUpdate<ThrowOnError extends boolean = false>(options: Options<PainEventsUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PainEventsUpdateResponses, PainEventsUpdateErrors, ThrowOnError, "fields">;
    /**
     * Delete pain event
     *
     * Delete a pain event
     */
    static painEventsDelete<ThrowOnError extends boolean = false>(options: Options<PainEventsDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PainEventsDeleteResponses, PainEventsDeleteErrors, ThrowOnError, "fields">;
    /**
     * Delete multiple pain events
     *
     * Delete multiple pain events
     */
    static painEventsDeleteMany<ThrowOnError extends boolean = false>(options: Options<PainEventsDeleteManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PainEventsDeleteManyResponses, PainEventsDeleteManyErrors, ThrowOnError, "fields">;
}
export declare class Trips {
    /**
     * Get trip
     *
     * Get a single trip by ID
     */
    static tripsGet<ThrowOnError extends boolean = false>(options: Options<TripsGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TripsGetResponses, TripsGetErrors, ThrowOnError, "fields">;
    /**
     * List trips
     *
     * List trips for the current user
     */
    static tripsList<ThrowOnError extends boolean = false>(options?: Options<TripsListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TripsListResponses, TripsListErrors, ThrowOnError, "fields">;
    /**
     * Create trip
     *
     * Create a new trip
     */
    static tripsCreate<ThrowOnError extends boolean = false>(options: Options<TripsCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TripsCreateResponses, TripsCreateErrors, ThrowOnError, "fields">;
    /**
     * Update trip
     *
     * Update an existing trip
     */
    static tripsUpdate<ThrowOnError extends boolean = false>(options: Options<TripsUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TripsUpdateResponses, TripsUpdateErrors, ThrowOnError, "fields">;
    /**
     * Delete trip
     *
     * Delete a trip
     */
    static tripsDelete<ThrowOnError extends boolean = false>(options: Options<TripsDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TripsDeleteResponses, TripsDeleteErrors, ThrowOnError, "fields">;
    /**
     * Delete multiple trips
     *
     * Delete multiple trips
     */
    static tripsDeleteMany<ThrowOnError extends boolean = false>(options: Options<TripsDeleteManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TripsDeleteManyResponses, TripsDeleteManyErrors, ThrowOnError, "fields">;
}
export declare class PackingActivities {
    /**
     * Get packing activity
     *
     * Get a single packing activity by ID
     */
    static packingActivitiesGet<ThrowOnError extends boolean = false>(options: Options<PackingActivitiesGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingActivitiesGetResponses, PackingActivitiesGetErrors, ThrowOnError, "fields">;
    /**
     * List packing activities
     *
     * List packing activities for the current user
     */
    static packingActivitiesList<ThrowOnError extends boolean = false>(options?: Options<PackingActivitiesListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingActivitiesListResponses, PackingActivitiesListErrors, ThrowOnError, "fields">;
    /**
     * Create packing activity
     *
     * Create a new packing activity
     */
    static packingActivitiesCreate<ThrowOnError extends boolean = false>(options: Options<PackingActivitiesCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingActivitiesCreateResponses, PackingActivitiesCreateErrors, ThrowOnError, "fields">;
    /**
     * Update packing activity
     *
     * Update an existing packing activity
     */
    static packingActivitiesUpdate<ThrowOnError extends boolean = false>(options: Options<PackingActivitiesUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingActivitiesUpdateResponses, PackingActivitiesUpdateErrors, ThrowOnError, "fields">;
    /**
     * Delete packing activity
     *
     * Delete a packing activity
     */
    static packingActivitiesDelete<ThrowOnError extends boolean = false>(options: Options<PackingActivitiesDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingActivitiesDeleteResponses, PackingActivitiesDeleteErrors, ThrowOnError, "fields">;
    /**
     * Delete multiple packing activities
     *
     * Delete multiple packing activities
     */
    static packingActivitiesDeleteMany<ThrowOnError extends boolean = false>(options: Options<PackingActivitiesDeleteManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingActivitiesDeleteManyResponses, PackingActivitiesDeleteManyErrors, ThrowOnError, "fields">;
    /**
     * Check packing activity exists
     *
     * Check whether a packing activity exists
     */
    static packingActivitiesExists<ThrowOnError extends boolean = false>(options: Options<PackingActivitiesExistsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingActivitiesExistsResponses, PackingActivitiesExistsErrors, ThrowOnError, "fields">;
}
export declare class PackingItems {
    /**
     * Get packing item
     *
     * Get a single packing item by ID
     */
    static packingItemsGet<ThrowOnError extends boolean = false>(options: Options<PackingItemsGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingItemsGetResponses, PackingItemsGetErrors, ThrowOnError, "fields">;
    /**
     * List packing items
     *
     * List packing items for the current user
     */
    static packingItemsList<ThrowOnError extends boolean = false>(options?: Options<PackingItemsListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingItemsListResponses, PackingItemsListErrors, ThrowOnError, "fields">;
    /**
     * Create packing item
     *
     * Create a new packing item
     */
    static packingItemsCreate<ThrowOnError extends boolean = false>(options: Options<PackingItemsCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingItemsCreateResponses, PackingItemsCreateErrors, ThrowOnError, "fields">;
    /**
     * Update packing item
     *
     * Update an existing packing item
     */
    static packingItemsUpdate<ThrowOnError extends boolean = false>(options: Options<PackingItemsUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingItemsUpdateResponses, PackingItemsUpdateErrors, ThrowOnError, "fields">;
    /**
     * Delete packing item
     *
     * Delete a packing item
     */
    static packingItemsDelete<ThrowOnError extends boolean = false>(options: Options<PackingItemsDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingItemsDeleteResponses, PackingItemsDeleteErrors, ThrowOnError, "fields">;
    /**
     * Delete multiple packing items
     *
     * Delete multiple packing items
     */
    static packingItemsDeleteMany<ThrowOnError extends boolean = false>(options: Options<PackingItemsDeleteManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<PackingItemsDeleteManyResponses, PackingItemsDeleteManyErrors, ThrowOnError, "fields">;
}
export declare class Transports {
    /**
     * Get transport
     *
     * Get a single transport by ID
     */
    static transportsGet<ThrowOnError extends boolean = false>(options: Options<TransportsGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TransportsGetResponses, TransportsGetErrors, ThrowOnError, "fields">;
    /**
     * List transports
     *
     * List transports for the current user
     */
    static transportsList<ThrowOnError extends boolean = false>(options?: Options<TransportsListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TransportsListResponses, TransportsListErrors, ThrowOnError, "fields">;
    /**
     * Create transport
     *
     * Create a new transport
     */
    static transportsCreate<ThrowOnError extends boolean = false>(options: Options<TransportsCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TransportsCreateResponses, TransportsCreateErrors, ThrowOnError, "fields">;
    /**
     * Update transport
     *
     * Update an existing transport
     */
    static transportsUpdate<ThrowOnError extends boolean = false>(options: Options<TransportsUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TransportsUpdateResponses, TransportsUpdateErrors, ThrowOnError, "fields">;
    /**
     * Delete transport
     *
     * Delete a transport
     */
    static transportsDelete<ThrowOnError extends boolean = false>(options: Options<TransportsDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TransportsDeleteResponses, TransportsDeleteErrors, ThrowOnError, "fields">;
    /**
     * Delete multiple transports
     *
     * Delete multiple transports
     */
    static transportsDeleteMany<ThrowOnError extends boolean = false>(options: Options<TransportsDeleteManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TransportsDeleteManyResponses, TransportsDeleteManyErrors, ThrowOnError, "fields">;
    /**
     * Check transport exists
     *
     * Check whether a transport exists
     */
    static transportsExists<ThrowOnError extends boolean = false>(options: Options<TransportsExistsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TransportsExistsResponses, TransportsExistsErrors, ThrowOnError, "fields">;
}
export declare class Stays {
    /**
     * Get stay
     *
     * Get a single stay by ID
     */
    static staysGet<ThrowOnError extends boolean = false>(options: Options<StaysGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<StaysGetResponses, StaysGetErrors, ThrowOnError, "fields">;
    /**
     * List stays
     *
     * List stays for the current user
     */
    static staysList<ThrowOnError extends boolean = false>(options?: Options<StaysListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<StaysListResponses, StaysListErrors, ThrowOnError, "fields">;
    /**
     * Create stay
     *
     * Create a new stay
     */
    static staysCreate<ThrowOnError extends boolean = false>(options: Options<StaysCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<StaysCreateResponses, StaysCreateErrors, ThrowOnError, "fields">;
    /**
     * Update stay
     *
     * Update an existing stay
     */
    static staysUpdate<ThrowOnError extends boolean = false>(options: Options<StaysUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<StaysUpdateResponses, StaysUpdateErrors, ThrowOnError, "fields">;
    /**
     * Delete stay
     *
     * Delete a stay
     */
    static staysDelete<ThrowOnError extends boolean = false>(options: Options<StaysDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<StaysDeleteResponses, StaysDeleteErrors, ThrowOnError, "fields">;
    /**
     * Delete multiple stays
     *
     * Delete multiple stays
     */
    static staysDeleteMany<ThrowOnError extends boolean = false>(options: Options<StaysDeleteManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<StaysDeleteManyResponses, StaysDeleteManyErrors, ThrowOnError, "fields">;
}
export declare class Todos {
    /**
     * Get todo
     *
     * Get a single todo by ID
     */
    static todosGet<ThrowOnError extends boolean = false>(options: Options<TodosGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosGetResponses, TodosGetErrors, ThrowOnError, "fields">;
    /**
     * List todos
     *
     * List todos with filters
     */
    static todosList<ThrowOnError extends boolean = false>(options?: Options<TodosListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosListResponses, TodosListErrors, ThrowOnError, "fields">;
    /**
     * List todos by tag
     *
     * List todos filtered by tag ID
     */
    static todosByTag<ThrowOnError extends boolean = false>(options: Options<TodosByTagData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosByTagResponses, TodosByTagErrors, ThrowOnError, "fields">;
    /**
     * List todos by project
     *
     * List todos filtered by project ID
     */
    static todosByProject<ThrowOnError extends boolean = false>(options: Options<TodosByProjectData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosByProjectResponses, TodosByProjectErrors, ThrowOnError, "fields">;
    /**
     * List todos by list
     *
     * List todos filtered by list ID
     */
    static todosByList<ThrowOnError extends boolean = false>(options: Options<TodosByListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosByListResponses, TodosByListErrors, ThrowOnError, "fields">;
    /**
     * Check todo existence
     *
     * Check if a todo exists
     */
    static todosExists<ThrowOnError extends boolean = false>(options: Options<TodosExistsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosExistsResponses, TodosExistsErrors, ThrowOnError, "fields">;
    /**
     * Create todo
     *
     * Create a new todo
     */
    static todosCreate<ThrowOnError extends boolean = false>(options: Options<TodosCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosCreateResponses, TodosCreateErrors, ThrowOnError, "fields">;
    /**
     * Update todo
     *
     * Update an existing todo
     */
    static todosUpdate<ThrowOnError extends boolean = false>(options: Options<TodosUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosUpdateResponses, TodosUpdateErrors, ThrowOnError, "fields">;
    /**
     * Toggle todo completion
     *
     * Toggle the completion status of a todo
     */
    static todosToggle<ThrowOnError extends boolean = false>(options: Options<TodosToggleData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosToggleResponses, TodosToggleErrors, ThrowOnError, "fields">;
    /**
     * Delete todo
     *
     * Delete a todo
     */
    static todosDelete<ThrowOnError extends boolean = false>(options: Options<TodosDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosDeleteResponses, TodosDeleteErrors, ThrowOnError, "fields">;
    /**
     * Delete multiple todos
     *
     * Delete multiple todos
     */
    static todosDeleteMany<ThrowOnError extends boolean = false>(options: Options<TodosDeleteManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosDeleteManyResponses, TodosDeleteManyErrors, ThrowOnError, "fields">;
    /**
     * Quick update multiple todos
     *
     * Quickly update multiple todos with common fields
     */
    static todosQuickUpdateMany<ThrowOnError extends boolean = false>(options: Options<TodosQuickUpdateManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosQuickUpdateManyResponses, TodosQuickUpdateManyErrors, ThrowOnError, "fields">;
    /**
     * Assign user to todo
     *
     * Assign a user to a todo
     */
    static todosAssign<ThrowOnError extends boolean = false>(options: Options<TodosAssignData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosAssignResponses, TodosAssignErrors, ThrowOnError, "fields">;
    /**
     * Unassign user from todo
     *
     * Unassign a user from a todo
     */
    static todosUnassign<ThrowOnError extends boolean = false>(options: Options<TodosUnassignData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosUnassignResponses, TodosUnassignErrors, ThrowOnError, "fields">;
    /**
     * Get assignable users
     *
     * Get all users that can be assigned to todos (from shared lists/projects)
     */
    static todosAssignableUsers<ThrowOnError extends boolean = false>(options?: Options<TodosAssignableUsersData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosAssignableUsersResponses, TodosAssignableUsersErrors, ThrowOnError, "fields">;
    /**
     * Get possible assignees
     *
     * Get possible assignees for a specific list or project
     */
    static todosPossibleAssignees<ThrowOnError extends boolean = false>(options: Options<TodosPossibleAssigneesData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosPossibleAssigneesResponses, TodosPossibleAssigneesErrors, ThrowOnError, "fields">;
}
export declare class Assignments {
    /**
     * Assign user to todo
     *
     * Assign a user to a todo
     */
    static todosAssign<ThrowOnError extends boolean = false>(options: Options<TodosAssignData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosAssignResponses, TodosAssignErrors, ThrowOnError, "fields">;
    /**
     * Unassign user from todo
     *
     * Unassign a user from a todo
     */
    static todosUnassign<ThrowOnError extends boolean = false>(options: Options<TodosUnassignData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosUnassignResponses, TodosUnassignErrors, ThrowOnError, "fields">;
    /**
     * Get assignable users
     *
     * Get all users that can be assigned to todos (from shared lists/projects)
     */
    static todosAssignableUsers<ThrowOnError extends boolean = false>(options?: Options<TodosAssignableUsersData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosAssignableUsersResponses, TodosAssignableUsersErrors, ThrowOnError, "fields">;
    /**
     * Get possible assignees
     *
     * Get possible assignees for a specific list or project
     */
    static todosPossibleAssignees<ThrowOnError extends boolean = false>(options: Options<TodosPossibleAssigneesData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodosPossibleAssigneesResponses, TodosPossibleAssigneesErrors, ThrowOnError, "fields">;
}
export declare class Tags {
    /**
     * List tags
     *
     * List tags for the current user
     */
    static tagsList<ThrowOnError extends boolean = false>(options: Options<TagsListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TagsListResponses, TagsListErrors, ThrowOnError, "fields">;
    /**
     * Get tag
     *
     * Get a single tag by ID
     */
    static tagsGet<ThrowOnError extends boolean = false>(options: Options<TagsGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TagsGetResponses, TagsGetErrors, ThrowOnError, "fields">;
    /**
     * Create tag
     *
     * Create a new tag
     */
    static tagsCreate<ThrowOnError extends boolean = false>(options: Options<TagsCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TagsCreateResponses, TagsCreateErrors, ThrowOnError, "fields">;
    /**
     * Update tag
     *
     * Update an existing tag
     */
    static tagsUpdate<ThrowOnError extends boolean = false>(options: Options<TagsUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TagsUpdateResponses, TagsUpdateErrors, ThrowOnError, "fields">;
    /**
     * Delete tag
     *
     * Delete a tag
     */
    static tagsDelete<ThrowOnError extends boolean = false>(options: Options<TagsDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TagsDeleteResponses, TagsDeleteErrors, ThrowOnError, "fields">;
    /**
     * Check tag exists
     *
     * Check whether a tag exists
     */
    static tagsExists<ThrowOnError extends boolean = false>(options: Options<TagsExistsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TagsExistsResponses, TagsExistsErrors, ThrowOnError, "fields">;
    /**
     * Tags for todo form
     *
     * List tags, tag groups, and favorites for the todo form
     */
    static tagsForTodoForm<ThrowOnError extends boolean = false>(options: Options<TagsForTodoFormData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TagsForTodoFormResponses, TagsForTodoFormErrors, ThrowOnError, "fields">;
    /**
     * Favorite tags
     *
     * List favorite tags by usage
     */
    static tagsFavorites<ThrowOnError extends boolean = false>(options: Options<TagsFavoritesData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TagsFavoritesResponses, TagsFavoritesErrors, ThrowOnError, "fields">;
}
export declare class Projects {
    /**
     * List projects
     *
     * List projects for the current user
     */
    static projectsList<ThrowOnError extends boolean = false>(options: Options<ProjectsListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<ProjectsListResponses, ProjectsListErrors, ThrowOnError, "fields">;
    /**
     * Get project
     *
     * Get a single project by ID
     */
    static projectsGet<ThrowOnError extends boolean = false>(options: Options<ProjectsGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<ProjectsGetResponses, ProjectsGetErrors, ThrowOnError, "fields">;
    /**
     * Create project
     *
     * Create a new project
     */
    static projectsCreate<ThrowOnError extends boolean = false>(options: Options<ProjectsCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<ProjectsCreateResponses, ProjectsCreateErrors, ThrowOnError, "fields">;
    /**
     * Update project
     *
     * Update an existing project
     */
    static projectsUpdate<ThrowOnError extends boolean = false>(options: Options<ProjectsUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<ProjectsUpdateResponses, ProjectsUpdateErrors, ThrowOnError, "fields">;
    /**
     * Delete project
     *
     * Delete a project
     */
    static projectsDelete<ThrowOnError extends boolean = false>(options: Options<ProjectsDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<ProjectsDeleteResponses, ProjectsDeleteErrors, ThrowOnError, "fields">;
    /**
     * Check project exists
     *
     * Check whether a project exists
     */
    static projectsExists<ThrowOnError extends boolean = false>(options: Options<ProjectsExistsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<ProjectsExistsResponses, ProjectsExistsErrors, ThrowOnError, "fields">;
    /**
     * Projects for todo form
     *
     * List projects for the todo form
     */
    static projectsForTodoForm<ThrowOnError extends boolean = false>(options: Options<ProjectsForTodoFormData, ThrowOnError>): import("./client/types.gen.js").RequestResult<ProjectsForTodoFormResponses, ProjectsForTodoFormErrors, ThrowOnError, "fields">;
}
export declare class TodoLists {
    /**
     * List todo lists
     *
     * List todo lists for the current user
     */
    static todoListsList<ThrowOnError extends boolean = false>(options: Options<TodoListsListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodoListsListResponses, TodoListsListErrors, ThrowOnError, "fields">;
    /**
     * Get todo list
     *
     * Get a single todo list by ID
     */
    static todoListsGet<ThrowOnError extends boolean = false>(options: Options<TodoListsGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodoListsGetResponses, TodoListsGetErrors, ThrowOnError, "fields">;
    /**
     * Favorite todo lists
     *
     * List favorite todo lists by usage
     */
    static todoListsFavorites<ThrowOnError extends boolean = false>(options?: Options<TodoListsFavoritesData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodoListsFavoritesResponses, TodoListsFavoritesErrors, ThrowOnError, "fields">;
    /**
     * Create todo list
     *
     * Create a new todo list
     */
    static todoListsCreate<ThrowOnError extends boolean = false>(options: Options<TodoListsCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodoListsCreateResponses, TodoListsCreateErrors, ThrowOnError, "fields">;
    /**
     * Update todo list
     *
     * Update an existing todo list
     */
    static todoListsUpdate<ThrowOnError extends boolean = false>(options: Options<TodoListsUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodoListsUpdateResponses, TodoListsUpdateErrors, ThrowOnError, "fields">;
    /**
     * Delete todo list
     *
     * Delete a todo list
     */
    static todoListsDelete<ThrowOnError extends boolean = false>(options: Options<TodoListsDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodoListsDeleteResponses, TodoListsDeleteErrors, ThrowOnError, "fields">;
    /**
     * Check todo list exists
     *
     * Check whether a todo list exists
     */
    static todoListsExists<ThrowOnError extends boolean = false>(options: Options<TodoListsExistsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodoListsExistsResponses, TodoListsExistsErrors, ThrowOnError, "fields">;
    /**
     * Todo lists for todo form
     *
     * List todo lists for the todo form
     */
    static todoListsForTodoForm<ThrowOnError extends boolean = false>(options: Options<TodoListsForTodoFormData, ThrowOnError>): import("./client/types.gen.js").RequestResult<TodoListsForTodoFormResponses, TodoListsForTodoFormErrors, ThrowOnError, "fields">;
}
export declare class Habits {
    /**
     * Get habits with completions
     *
     * Get habits with completions for a date range
     */
    static habitsGetHabitsAndCompletions<ThrowOnError extends boolean = false>(options: Options<HabitsGetHabitsAndCompletionsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HabitsGetHabitsAndCompletionsResponses, HabitsGetHabitsAndCompletionsErrors, ThrowOnError, "fields">;
    /**
     * Get all habits
     *
     * Get all habits for the authenticated user
     */
    static habitsGetHabitsForCurrentUser<ThrowOnError extends boolean = false>(options?: Options<HabitsGetHabitsForCurrentUserData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HabitsGetHabitsForCurrentUserResponses, HabitsGetHabitsForCurrentUserErrors, ThrowOnError, "fields">;
    /**
     * Get single habit
     *
     * Get a single habit by ID
     */
    static habitsGet<ThrowOnError extends boolean = false>(options: Options<HabitsGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HabitsGetResponses, HabitsGetErrors, ThrowOnError, "fields">;
    /**
     * Create habit
     *
     * Create a new habit
     */
    static habitsCreate<ThrowOnError extends boolean = false>(options: Options<HabitsCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HabitsCreateResponses, HabitsCreateErrors, ThrowOnError, "fields">;
    /**
     * Update habit
     *
     * Update an existing habit
     */
    static habitsUpdate<ThrowOnError extends boolean = false>(options: Options<HabitsUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HabitsUpdateResponses, HabitsUpdateErrors, ThrowOnError, "fields">;
    /**
     * Delete habit
     *
     * Delete a habit
     */
    static habitsDelete<ThrowOnError extends boolean = false>(options: Options<HabitsDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HabitsDeleteResponses, HabitsDeleteErrors, ThrowOnError, "fields">;
    /**
     * Duplicate habit
     *
     * Duplicate an existing habit
     */
    static habitsDuplicate<ThrowOnError extends boolean = false>(options: Options<HabitsDuplicateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HabitsDuplicateResponses, HabitsDuplicateErrors, ThrowOnError, "fields">;
    /**
     * Log habit
     *
     * Log a habit completion or failure for a specific day
     */
    static habitsLogHabitOnDay<ThrowOnError extends boolean = false>(options: Options<HabitsLogHabitOnDayData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HabitsLogHabitOnDayResponses, HabitsLogHabitOnDayErrors, ThrowOnError, "fields">;
    /**
     * Log many habits
     *
     * Log multiple habits for a specific day
     */
    static habitsLogManyHabitsOnDay<ThrowOnError extends boolean = false>(options: Options<HabitsLogManyHabitsOnDayData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HabitsLogManyHabitsOnDayResponses, HabitsLogManyHabitsOnDayErrors, ThrowOnError, "fields">;
    /**
     * Get habit score for widget
     *
     * Get aggregated habit score for the widget
     */
    static habitsGetHabitScoreForWidget<ThrowOnError extends boolean = false>(options?: Options<HabitsGetHabitScoreForWidgetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HabitsGetHabitScoreForWidgetResponses, HabitsGetHabitScoreForWidgetErrors, ThrowOnError, "fields">;
}
export declare class Hydration {
    /**
     * Delete hydration log
     *
     * Delete a hydration log
     */
    static hydrationLogsDelete<ThrowOnError extends boolean = false>(options: Options<HydrationLogsDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HydrationLogsDeleteResponses, HydrationLogsDeleteErrors, ThrowOnError, "fields">;
    /**
     * Update hydration log
     *
     * Update an existing hydration log
     */
    static hydrationLogsUpdate<ThrowOnError extends boolean = false>(options: Options<HydrationLogsUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HydrationLogsUpdateResponses, HydrationLogsUpdateErrors, ThrowOnError, "fields">;
    /**
     * Get hydration log
     *
     * Get a single hydration log by ID
     */
    static hydrationLogsGet<ThrowOnError extends boolean = false>(options: Options<HydrationLogsGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HydrationLogsGetResponses, HydrationLogsGetErrors, ThrowOnError, "fields">;
    /**
     * List hydration logs
     *
     * List hydration logs for a date range
     */
    static hydrationLogsList<ThrowOnError extends boolean = false>(options: Options<HydrationLogsListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HydrationLogsListResponses, HydrationLogsListErrors, ThrowOnError, "fields">;
    /**
     * Create hydration log
     *
     * Create a new hydration log
     */
    static hydrationLogsCreate<ThrowOnError extends boolean = false>(options: Options<HydrationLogsCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HydrationLogsCreateResponses, HydrationLogsCreateErrors, ThrowOnError, "fields">;
    /**
     * Delete multiple hydration logs
     *
     * Delete multiple hydration logs
     */
    static hydrationLogsDeleteMany<ThrowOnError extends boolean = false>(options: Options<HydrationLogsDeleteManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HydrationLogsDeleteManyResponses, HydrationLogsDeleteManyErrors, ThrowOnError, "fields">;
    /**
     * Get hydration stats
     *
     * Get hydration stats for a date
     */
    static hydrationLogsGetStats<ThrowOnError extends boolean = false>(options: Options<HydrationLogsGetStatsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<HydrationLogsGetStatsResponses, HydrationLogsGetStatsErrors, ThrowOnError, "fields">;
}
export declare class Fasting {
    /**
     * Delete fast
     *
     * Delete a fast
     */
    static fastingDelete<ThrowOnError extends boolean = false>(options: Options<FastingDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<FastingDeleteResponses, FastingDeleteErrors, ThrowOnError, "fields">;
    /**
     * Update fast
     *
     * Update an existing fast
     */
    static fastingUpdate<ThrowOnError extends boolean = false>(options: Options<FastingUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<FastingUpdateResponses, FastingUpdateErrors, ThrowOnError, "fields">;
    /**
     * Get fast
     *
     * Get a single fast by ID
     */
    static fastingGet<ThrowOnError extends boolean = false>(options: Options<FastingGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<FastingGetResponses, FastingGetErrors, ThrowOnError, "fields">;
    /**
     * List fasts
     *
     * List fasts for a date range
     */
    static fastingList<ThrowOnError extends boolean = false>(options?: Options<FastingListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<FastingListResponses, FastingListErrors, ThrowOnError, "fields">;
    /**
     * Get active fast
     *
     * Get the currently active fast
     */
    static fastingGetActive<ThrowOnError extends boolean = false>(options?: Options<FastingGetActiveData, ThrowOnError>): import("./client/types.gen.js").RequestResult<FastingGetActiveResponses, FastingGetActiveErrors, ThrowOnError, "fields">;
    /**
     * Get fasting stats
     *
     * Get fasting statistics
     */
    static fastingGetStats<ThrowOnError extends boolean = false>(options?: Options<FastingGetStatsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<FastingGetStatsResponses, FastingGetStatsErrors, ThrowOnError, "fields">;
    /**
     * Get dashboard info
     *
     * Get fasting information for the dashboard
     */
    static fastingGetDashboardInfo<ThrowOnError extends boolean = false>(options?: Options<FastingGetDashboardInfoData, ThrowOnError>): import("./client/types.gen.js").RequestResult<FastingGetDashboardInfoResponses, FastingGetDashboardInfoErrors, ThrowOnError, "fields">;
    /**
     * Start fast
     *
     * Start a new fast
     */
    static fastingStart<ThrowOnError extends boolean = false>(options?: Options<FastingStartData, ThrowOnError>): import("./client/types.gen.js").RequestResult<FastingStartResponses, FastingStartErrors, ThrowOnError, "fields">;
    /**
     * End fast
     *
     * End an active fast
     */
    static fastingEnd<ThrowOnError extends boolean = false>(options: Options<FastingEndData, ThrowOnError>): import("./client/types.gen.js").RequestResult<FastingEndResponses, FastingEndErrors, ThrowOnError, "fields">;
}
export declare class Workouts {
    /**
     * Delete workout
     *
     * Delete a workout
     */
    static workoutsDelete<ThrowOnError extends boolean = false>(options: Options<WorkoutsDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsDeleteResponses, WorkoutsDeleteErrors, ThrowOnError, "fields">;
    /**
     * Update workout
     *
     * Update an existing workout
     */
    static workoutsUpdate<ThrowOnError extends boolean = false>(options: Options<WorkoutsUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsUpdateResponses, WorkoutsUpdateErrors, ThrowOnError, "fields">;
    /**
     * Get workout
     *
     * Get a single workout by ID
     */
    static workoutsGet<ThrowOnError extends boolean = false>(options: Options<WorkoutsGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsGetResponses, WorkoutsGetErrors, ThrowOnError, "fields">;
    /**
     * List workouts
     *
     * List workouts for a date range
     */
    static workoutsList<ThrowOnError extends boolean = false>(options?: Options<WorkoutsListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsListResponses, WorkoutsListErrors, ThrowOnError, "fields">;
    /**
     * Create workout
     *
     * Create a new workout
     */
    static workoutsCreate<ThrowOnError extends boolean = false>(options: Options<WorkoutsCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsCreateResponses, WorkoutsCreateErrors, ThrowOnError, "fields">;
    /**
     * Get in-progress workout
     *
     * Get the currently in-progress workout
     */
    static workoutsInProgress<ThrowOnError extends boolean = false>(options?: Options<WorkoutsInProgressData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsInProgressResponses, WorkoutsInProgressErrors, ThrowOnError, "fields">;
    /**
     * Start workout
     *
     * Start a new workout
     */
    static workoutsStart<ThrowOnError extends boolean = false>(options?: Options<WorkoutsStartData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsStartResponses, WorkoutsStartErrors, ThrowOnError, "fields">;
    /**
     * End workout
     *
     * End an in-progress workout
     */
    static workoutsEnd<ThrowOnError extends boolean = false>(options: Options<WorkoutsEndData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsEndResponses, WorkoutsEndErrors, ThrowOnError, "fields">;
    /**
     * Duplicate workout
     *
     * Duplicate an existing workout
     */
    static workoutsDuplicate<ThrowOnError extends boolean = false>(options: Options<WorkoutsDuplicateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsDuplicateResponses, WorkoutsDuplicateErrors, ThrowOnError, "fields">;
    /**
     * Get workout with details
     *
     * Get a workout with full details (exercises, sets)
     */
    static workoutsGetWithDetails<ThrowOnError extends boolean = false>(options: Options<WorkoutsGetWithDetailsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsGetWithDetailsResponses, WorkoutsGetWithDetailsErrors, ThrowOnError, "fields">;
    /**
     * Update workout name
     *
     * Update the name of a workout
     */
    static workoutsUpdateName<ThrowOnError extends boolean = false>(options: Options<WorkoutsUpdateNameData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsUpdateNameResponses, WorkoutsUpdateNameErrors, ThrowOnError, "fields">;
    /**
     * Get active users
     *
     * Get users who are currently working out
     */
    static workoutsActiveUsers<ThrowOnError extends boolean = false>(options?: Options<WorkoutsActiveUsersData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsActiveUsersResponses, WorkoutsActiveUsersErrors, ThrowOnError, "fields">;
    /**
     * Submit complete workout
     *
     * Submit a complete workout with all exercises and sets
     */
    static workoutsSubmitComplete<ThrowOnError extends boolean = false>(options: Options<WorkoutsSubmitCompleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<WorkoutsSubmitCompleteResponses, WorkoutsSubmitCompleteErrors, ThrowOnError, "fields">;
}
export declare class Journal {
    /**
     * Delete journal entry
     *
     * Delete a journal entry
     */
    static journalEntriesDelete<ThrowOnError extends boolean = false>(options: Options<JournalEntriesDeleteData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesDeleteResponses, JournalEntriesDeleteErrors, ThrowOnError, "fields">;
    /**
     * Update journal entry
     *
     * Update an existing journal entry
     */
    static journalEntriesUpdate<ThrowOnError extends boolean = false>(options: Options<JournalEntriesUpdateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesUpdateResponses, JournalEntriesUpdateErrors, ThrowOnError, "fields">;
    /**
     * Get journal entry
     *
     * Get a single journal entry
     */
    static journalEntriesGet<ThrowOnError extends boolean = false>(options: Options<JournalEntriesGetData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesGetResponses, JournalEntriesGetErrors, ThrowOnError, "fields">;
    /**
     * List journal entries
     *
     * List journal entries for a date range
     */
    static journalEntriesList<ThrowOnError extends boolean = false>(options: Options<JournalEntriesListData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesListResponses, JournalEntriesListErrors, ThrowOnError, "fields">;
    /**
     * Create journal entry
     *
     * Create a new journal entry
     */
    static journalEntriesCreate<ThrowOnError extends boolean = false>(options: Options<JournalEntriesCreateData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesCreateResponses, JournalEntriesCreateErrors, ThrowOnError, "fields">;
    /**
     * Delete multiple entries
     *
     * Delete multiple journal entries
     */
    static journalEntriesDeleteMany<ThrowOnError extends boolean = false>(options: Options<JournalEntriesDeleteManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesDeleteManyResponses, JournalEntriesDeleteManyErrors, ThrowOnError, "fields">;
    /**
     * Get journal stats
     *
     * Get statistics for journal entries
     */
    static journalEntriesStats<ThrowOnError extends boolean = false>(options: Options<JournalEntriesStatsData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesStatsResponses, JournalEntriesStatsErrors, ThrowOnError, "fields">;
    /**
     * Get entry for decrypting
     *
     * Get entry for decrypting without persisting changes
     */
    static journalEntriesGetForDecrypting<ThrowOnError extends boolean = false>(options: Options<JournalEntriesGetForDecryptingData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesGetForDecryptingResponses, JournalEntriesGetForDecryptingErrors, ThrowOnError, "fields">;
    /**
     * Update encryption status
     *
     * Update encryption status for multiple entries
     */
    static journalEntriesUpdateManyEncryption<ThrowOnError extends boolean = false>(options: Options<JournalEntriesUpdateManyEncryptionData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesUpdateManyEncryptionResponses, JournalEntriesUpdateManyEncryptionErrors, ThrowOnError, "fields">;
    /**
     * Encrypt multiple entries
     *
     * Encrypt multiple journal entries
     */
    static journalEntriesEncryptMany<ThrowOnError extends boolean = false>(options: Options<JournalEntriesEncryptManyData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesEncryptManyResponses, JournalEntriesEncryptManyErrors, ThrowOnError, "fields">;
    /**
     * Encrypt entry
     *
     * Encrypt a single journal entry
     */
    static journalEntriesEncrypt<ThrowOnError extends boolean = false>(options: Options<JournalEntriesEncryptData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesEncryptResponses, JournalEntriesEncryptErrors, ThrowOnError, "fields">;
    /**
     * Decrypt entry
     *
     * Permanently decrypt a journal entry
     */
    static journalEntriesDecrypt<ThrowOnError extends boolean = false>(options: Options<JournalEntriesDecryptData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesDecryptResponses, JournalEntriesDecryptErrors, ThrowOnError, "fields">;
    /**
     * Toggle encryption flag
     *
     * Toggle encryption flag without processing content
     */
    static journalEntriesToggleEncryption<ThrowOnError extends boolean = false>(options: Options<JournalEntriesToggleEncryptionData, ThrowOnError>): import("./client/types.gen.js").RequestResult<JournalEntriesToggleEncryptionResponses, JournalEntriesToggleEncryptionErrors, ThrowOnError, "fields">;
}
//# sourceMappingURL=sdk.gen.d.ts.map