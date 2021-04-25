"""init

Revision ID: f8a79d2f3685
Revises:
Create Date: 2021-04-25 20:19:32.568034

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f8a79d2f3685'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'todos',
        sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
        sa.Column('title', sa.String, nullable=False),
        sa.Column('description', sa.String, nullable=True),
    )


def downgrade():
    op.drop_table('todos')
