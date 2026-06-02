#!/bin/sh
set -e

echo "=== vercel.sh started ==="
echo "RUN_DB_MIGRATION=$RUN_DB_MIGRATION"
echo "VERCEL_ENV=$VERCEL_ENV"

if [ "$RUN_DB_MIGRATION" = "1" ]; then
  echo "=== running migration build ==="
  npm run build:migration
else
  echo "=== running normal build ==="
  npm run build:production
fi