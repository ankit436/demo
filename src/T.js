
using Microsoft.EntityFrameworkCore;

using System;

using System.Linq;

using System.Linq.Expressions;

using System.Reflection;

// ...

public static class QueryableExtensions

{

    public static IQueryable<T> OrderByProperty<T>(this IQueryable<T> query, string propertyName, bool isAscending)

    {

        var entityType = typeof(T);

        var propertyInfo = entityType.GetProperty(propertyName, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);

        if (propertyInfo == null)

        {

            throw new ArgumentException($"Property '{propertyName}' not found on type '{entityType.Name}'.");

        }

        var parameter = Expression.Parameter(entityType, "x");

        var propertyExpression = Expression.Property(parameter, propertyInfo);

        var lambda = Expression.Lambda(propertyExpression, parameter);

        var methodName = isAscending ? "OrderBy" : "OrderByDescending";

        var methodCallExpression = Expression.Call(

            typeof(Queryable),

            methodName,

            new[] { entityType, propertyInfo.PropertyType },

            query.Expression,

            Expression.Quote(lambda)

        );

        return query.Provider.CreateQuery<T>(methodCallExpression);

    }

}






